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
  private showNavbar:boolean = false;

  constructor(private _sharedService: SharedService) {
  LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
  LoopBackConfig.setApiVersion('api');
  this.loggedUser.user = {};
  }

  ngOnInit() {
    console.log(this.loggedUser);
    if(localStorage.getItem('token')) {
      this.showNavbar = true;
      this.loggedUser.user.username = localStorage.getItem('token');
    }
    this.subscriber = this._sharedService.loggedUser$.subscribe(user => {
      console.log(user);
      this.showNavbar = true;
      this.loggedUser = user;
    })
  }

  signOut() {
    localStorage.removeItem('token')
  }

  // showNavbar(obj) {
  //   const validRedirect:boolean = (obj && (Object.keys(obj).length === 0)) || localStorage.getItem('token');
  //   return validRedirect;
  // }
}
