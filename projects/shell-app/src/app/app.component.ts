import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-app';
  menu = ['home', 'user'];
  activeLink: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  this.activatedRoute

}



}
