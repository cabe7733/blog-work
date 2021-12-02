import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ContactServicesService } from "../../services/contact-services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myForm: FormGroup;
  event$;
  url:any;
  urlPost;
  urldescomponer;
  constructor(private fb: FormBuilder, private services:ContactServicesService,private router: Router,
    @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.url ="/inicio";

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.minLength(10)]],
      edad: ['', Validators.required],
    });

    this.event$=this.router.events.subscribe((event: NavigationEvent) => {
      this.url ="/inicio";
      let url;
      if(event instanceof NavigationStart) {
        this.url = event.url;
        url= this.url
        this.urlPost =url.split('/',5);
      }
    });

  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    if (form.valid) {
      console.log('Name', form.value);
      form.reset();
    }
  }

  saberMas(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  inicio(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  contacto(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
