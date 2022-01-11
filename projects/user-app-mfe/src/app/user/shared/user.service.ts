import { Injectable } from '@angular/core';

import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() { }

  get userList(): User[] {
    return [
      {
        id: 0,
        email: 'melissa.fleming@example.com',
        gender: 'female',
        phoneNumber: '0740-304-475',
        birthdate: 469521368,
        name: 'melissa fleming',
        picture: 'women/0.jpg',
      },
      {
        id: 1,
        email: 'christoffer.christiansen@example.com',
        gender: 'male',
        phoneNumber: '05761325',
        birthdate: 244475798,
        name: 'christoffer christiansen',
        picture: 'men/1.jpg',
      },
      {
        id: 2,
        email: 'delphine.taylor@example.com',
        gender: 'female',
        phoneNumber: '602-884-3078',
        birthdate: 1193621288,
        name: 'delphine taylor',
        picture: 'women/2.jpg',
      },
      {
        id: 3,
        email: 'todd.beck@example.com',
        gender: 'male',
        phoneNumber: '0768-374-878',
        birthdate: 216450355,
        name: 'todd beck',
        picture: 'men/3.jpg',
      },
      {
        id: 4,
        email: 'kayla.hall@example.com',
        gender: 'female',
        phoneNumber: '(932)-142-5202',
        birthdate: 450297969,

        name: 'kayla hall',

        picture: 'women/4.jpg',
      },
      {
        id: 5,
        email: 'jimmie.simmons@example.com',
        gender: 'male',
        phoneNumber: '0702-239-646',
        birthdate: 691663054,
        name: 'jimmie simmons',

        picture: 'men/5.jpg',
      },
      {
        id: 6,
        email: 'judith.schmitz@example.com',
        gender: 'female',
        phoneNumber: '0171-7824648',
        birthdate: 1348121292,
        name: 'judith schmitz',
        picture: 'women/6.jpg',
      },
      {
        id: 7,
        email: 'aloïs.moulin@example.com',
        gender: 'male',
        phoneNumber: '(334)-138-2260',
        birthdate: 787209800,
        name: 'aloïs moulin',
        picture: 'men/7.jpg',
      },
      {
        id: 8,
        email: 'tammy.bowman@example.com',
        gender: 'female',
        phoneNumber: '081-064-2923',
        birthdate: 833377307,
        name: 'tammy bowman',
        picture: 'women/8.jpg',
      },
      {
        id: 9,
        email: 'noah.dupont@example.com',
        gender: 'male',
        phoneNumber: '(280)-900-0140',
        birthdate: 857793035,
        name: 'noah dupont',
        picture: 'men/9.jpg',
      },
    ];
  }
}
