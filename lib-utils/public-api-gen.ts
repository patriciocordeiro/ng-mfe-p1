import * as fs from 'fs-extra';
import * as path from 'path';
import { from, Observable } from 'rxjs';
import { filter, map, mergeMap, takeLast } from 'rxjs/operators';



export function generateNgPublicApiFile(rootDir?: string, targetFilePath?: string, excludeFileTypes?: string[], customAllowedFileTypes?: string[]) {
  let exportContent = '';
  const allowedFileTypes = customAllowedFileTypes || ['ts'];
  const CURR_DIR = process.cwd();

  const targetPath = path.join(CURR_DIR, rootDir || 'src/lib');
  const destFilePath = path.join(CURR_DIR, targetFilePath || 'src/public-api.ts');
  const files = getAllFiles(targetPath, []);

  if (files && files.length) {

    from(files).pipe(
      filter(file => {
        return !file.includes('.spec');
      }),
      filter(file => {
        const fileType = getFileType(file);
        return allowedFileTypes.includes(fileType);
      }),
      filter(file => {
        if (excludeFileTypes && excludeFileTypes.length) {
          const fileType = getFileType(file);
          return !excludeFileTypes.includes(fileType);
        }
        return true;
      }),
      map(file => {
        if (file.includes('.reducer')) {
          const fileNameArray = file.split('/');
          const fileName = fileNameArray[fileNameArray.length - 1].replace('.reducer.ts', '');
          const aliasName = camelize(fileName).replace(/-/g, '');
          exportContent += `export * as ${aliasName}Reducer from '${file.replace(CURR_DIR, '.').replace('/src', '').replace('.ts', '')}';\n`;
        } else {
          exportContent += `export * from '${file.replace(CURR_DIR, '.').replace('/src', '').replace('.ts', '')}';\n`;
        }

        return exportContent;
      }
      ),
      takeLast(1),
      mergeMap(res => saveFile(destFilePath, res))
    ).subscribe();
  } else {

    return;
  }
}


export function getFileType(file: string) {
  const fileArray = file.split('.');
  const fileType = fileArray[fileArray.length - 1];
  return fileType;
}


export function saveFile(filePath: string, doc: any): Observable<any> {
  return new Observable((observer) => {
    fs.writeFile(filePath, doc, 'utf8', (err: any) => {
      if (err) {
        observer.error(err);
      } else {
        observer.next('saved');
        observer.complete();
      }
    });
  });
}

 function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

 function getAllFiles(dirPath: string, arrayOfFiles: string[]): string[] {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};
