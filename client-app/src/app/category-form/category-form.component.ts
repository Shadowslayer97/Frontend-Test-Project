import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs/Subscription';
import { SubCategory } from '../shared/sdk/models';
import { SubCategoryApi } from '../shared/sdk/services';
import { Category } from '../shared/sdk/models';
import { CategoryApi } from '../shared/sdk/services';

declare var $:any;

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() createCategory:boolean;
  private chosenCategory: any;
  private parentCategory:boolean;
  private categoryDecided:boolean = false;
  private chosenParent:any;
  private categoryFormData:any = {};
  private subCategoryFormData = new SubCategory();
  private subscriber: Subscription;

  private parentList:any = [];
  private selectedChildrenList:any = [];
  private childrenList:any = [];



  constructor(
    private _sharedService: SharedService,
    private subCategoryApi: SubCategoryApi,
    private categoryApi: CategoryApi
  ) { }

  ngOnInit() {
    this.subscriber = this._sharedService.breadcrumListItem$.subscribe(item => {
      this.chosenCategory = item;
    })
    this.categoryApi.getCategories().subscribe((categories:any[]) => {
        console.log(categories);
        this.parentList = categories;
    });
    this.subCategoryApi.getSubCategories().subscribe((subCategories:any[]) => {
        console.log(subCategories);
        this.childrenList = subCategories;
    },error => {
      console.log(error);
    });
  }

  ngAfterViewInit() {
  }

  setSelected(selectElement) {
    console.log(selectElement);
    this.selectedChildrenList.push(selectElement.id);
  }

// Creating a parent category with children sub categories
  createNewCategory() {
    if(this.parentCategory) {
      this.categoryApi.createCategory(this.categoryFormData).subscribe(result => {
        console.log(result);
        if(this.selectedChildrenList.length!=0) {
          this.selectedChildrenList.forEach(child => {
            child.categoryId = result.id;
            this.subCategoryApi.updateSubCategory(child).subscribe(res => {
              console.log("done");
            })
          })
        }
      })
    }
    else {  //Create a new sub category

      this.subCategoryFormData = this.categoryFormData;
      this.subCategoryFormData["parent-type"] = this.chosenParent.type;
      this.subCategoryFormData.categoryId = this.chosenParent.id;
      this.subCategoryApi.createSubCategory(this.subCategoryFormData).subscribe(result => {
        console.log(result);
      });
    }
  }

  editCategory() {

  }

}
