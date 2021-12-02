import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  todayDate: Date = new Date();
  itemPost:any;
  public post$:Observable<Post[]>
  constructor(private service:PostService, private router:Router) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.service.getPost().then(res=>{
      this.itemPost = res;
    })
  }

  post(title){
    this.router.navigate(['post/',title]);
  }

}
