import { isNgTemplate } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange} from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription = new Subscription;
  constructor(public mediaObserver:MediaObserver){}
  ngOnDestroy() {
    this.mediaSub?.unsubscribe();
  }
  ngOnInit() {
  
     
    
  }
  title = 'ProjectsAngular';
  
}
