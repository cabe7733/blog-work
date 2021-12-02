import { db } from './../app.module';
import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public async getPost() {
    let id;
    let data;
    let datosPost:any[];
    let datosPost2 =[];
    const querySnapshot = await getDocs(collection(db, "blogPost"));
    querySnapshot.forEach((doc) => {
      id = doc.id
      data=doc.data();
      datosPost={id, ...data}
      datosPost2.push(datosPost)
    });
    return datosPost2;
  }

  async insertPost(){
    const docRef = await addDoc(collection(db, "blogPost"), {
      titlePost:"",
      contentPost:"",
      imagePost:"",
      preContentPost:"",
      date: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
  }


  async onePost(post){
    let data;
    let id;
    let datosPost;
    const q = query(collection(db, "blogPost"), where("titlePost", "==", post));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      id = doc.id
      data=doc.data();
    });
    return datosPost={id,...data};
  }

}
