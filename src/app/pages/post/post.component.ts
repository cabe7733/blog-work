import { ContactServicesService } from './../../services/contact-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  urlTree;
  postData;

  constructor(private router:Router,
              private post:PostService,
              private activatedRoute:ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.router.url
    this.activatedRoute.paramMap.subscribe(params=>{
      this.urlTree=params.get('title')
    });

    this.getpost();
  }

  getpost(){
    this.post.onePost(this.urlTree).then(resp=>{
      this.postData = resp;
    })
  }

  volver(){
    this.location.back();
  }

}
