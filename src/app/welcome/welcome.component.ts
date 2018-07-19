import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  greeting : string;

  constructor() { }

  ngOnInit() {
    this.greeting = "Hello Biswajit";
  }

}
