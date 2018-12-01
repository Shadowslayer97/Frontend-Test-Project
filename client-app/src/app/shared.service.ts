import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// // TODO:
// Add models and update var types

@Injectable()
export class SharedService {

  private loggedUser = new Subject<any>();
  public loggedUser$ = this.loggedUser.asObservable();

  private breadcrumListItem = new Subject<any>();
  public breadcrumListItem$ = this.breadcrumListItem.asObservable();

  private currentView = new Subject<any>();
  public currentView$ = this.currentView.asObservable();


  constructor() { }

  updateBreadcrumList(chosen:any,view:number) {
    this.breadcrumListItem.next((chosen));
    this.currentView.next((view));
  }

  setLoggedUserDetails(user:any) {
    this.loggedUser.next((user));
  }

}
