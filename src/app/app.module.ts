
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
/* Firebase */
import { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

/* Enviroment */
import { environment } from "../environments/environment.prod";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PostComponent } from './pages/post/post.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routes';
import { PostService } from './services/post.service';



const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    NosotrosComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    RouterModule,
  ],
  exports:[],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
