import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  todayDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onMail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=eyapublicidad22@gmail.com','_blank');
  }

  onFacebook() {
    window.open('https://www.facebook.com/Publicidad-E-y-A-108286588311528','_blank');
  }

  onPrivacidad(){
    window.open('https://docs.google.com/document/d/13RPRuMmW7pLu2rWLwcAp2ldqnRsbox3VOICtEsCDrOY/edit?usp=sharing','_blank');
  }

  onCookies(){
    window.open('https://docs.google.com/document/d/1-WeW7cCjTpKbH5I-yV0UJ_8gZxB2cRWy-lYlO0URlCc/edit?usp=sharing','_blank');
  }

  onAviso(){
    window.open('https://docs.google.com/document/d/1rjaV8-T1uoWp4aFifuihbxyimE92xljp5In1h6CGYC8/edit?usp=sharing','_blank');
  }

}
