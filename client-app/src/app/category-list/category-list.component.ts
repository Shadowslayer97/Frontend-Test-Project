import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/sdk/models';
import { CategoryApi } from '../shared/sdk/services';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: Category[];

  constructor(private categoryApi: CategoryApi, private _sharedService: SharedService) { }

  ngOnInit() {

  }

  updateBreadcrumList(chosenCategory: Category,view: number) {
    this._sharedService.updateBreadcrumList(chosenCategory,view);
  }

}
