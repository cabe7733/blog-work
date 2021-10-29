import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  todayDate: Date = new Date();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onMail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=eyapublicidad22@gmail.com','_blank');
  }

  onFacebook() {
    window.open('https://www.facebook.com/Publicidad-E-y-A-108286588311528','_blank');
  }

}
