import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoopBackConfig } from './shared/sdk/index';
import { CategoryComponent } from './category/category.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private subscriber: Subscription;
  private loggedUser: any = {};

  constructor(private _sharedService: SharedService) {
  LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
  LoopBackConfig.setApiVersion('api');
  this.loggedUser.user = {};
  }

  ngOnInit() {
    console.log(this.loggedUser);
    this.subscriber = this._sharedService.loggedUser$.subscribe(user => {
      console.log(user);
      this.loggedUser = user;
    })
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
