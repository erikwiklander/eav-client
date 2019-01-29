import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  mediaWatcher: Subscription;
  navWatcher: Subscription;
  opened = true;
  mode = 'side';

  constructor(mediaObserver: MediaObserver, router: Router) {
    this.mediaWatcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.opened = false;
        this.mode = 'over';
      } else {
        this.opened = true; // isAuthenticated
        this.mode = 'side';
      }
    });
}

  ngOnInit() {
  }

}
