import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit {

  private breadcrumList:any = [
    { name:"categories"}
  ];
  private subscriber: Subscription;

  @Input() breadcrumListItem: any = {};


  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.subscriber = this._sharedService.breadcrumListItem$.subscribe(item => {
      this.breadcrumList.push(item);
      console.log(this.breadcrumList);
    })
  }

  // // TODO:
  // Implement CHANGE component method

}
