import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/sdk/models';
import { CategoryApi } from '../shared/sdk/services';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs/Subscription';

import { CategorySearchComponent } from '../category-search/category-search.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { CategoryIndividualComponent } from '../category-individual/category-individual.component';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private categories: Category[];
  private chosenCategory: Category;
  private show:number = 1;
  private createCategory:boolean = false;

  private subscriber: Subscription;


  constructor(private categoryApi: CategoryApi, private _sharedService: SharedService) { }

  ngOnInit() {
    this.categoryApi.getCategories()
      .subscribe((categories:any[]) => {
        console.log(categories);
        this.categories = categories;
    });
    this.subscriber = this._sharedService.breadcrumListItem$.subscribe(item => {
      this.chosenCategory = item;
    })
    this.subscriber = this._sharedService.currentView$.subscribe(view => {
      this.show = view;
    })

    }

    createNewCategory() {
      this.createCategory = true;
      this._sharedService.updateBreadcrumList({
        name: "new"
      },3);
    }


}
