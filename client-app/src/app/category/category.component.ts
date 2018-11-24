import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/sdk/models';
import { CategoryApi } from '../shared/sdk/services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categories: Category[];

  constructor(private categoryApi: CategoryApi) { }

  ngOnInit() {
    this.categoryApi.getCategories()
    .subscribe((categories:any[]) => console.log(categories));
    }

}
