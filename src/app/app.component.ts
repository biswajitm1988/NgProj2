import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  caption:string;

  constructor(){
    this.title = 'Angular Project 2';
    this.caption="Demonstrating bootstrap, observable and CRUD operation";
  }
}
