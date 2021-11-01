import { Component, AfterViewInit } from '@angular/core';

import { getAnalytics, logEvent,setUserProperties } from "firebase/analytics";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'blog-work';

  ngAfterViewInit(){
    const analytics = getAnalytics();
    logEvent(analytics, 'notification_received');
    setUserProperties(analytics, { favorite_food: 'apples' });
  }
}
