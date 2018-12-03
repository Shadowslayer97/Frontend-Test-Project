import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../shared/sdk/models';
import { SharedService } from '../shared.service';
import { CategoryApi } from '../shared/sdk/services';
import { SubCategoryApi } from '../shared/sdk/services';


@Component({
  selector: 'app-category-individual',
  templateUrl: './category-individual.component.html',
  styleUrls: ['./category-individual.component.scss']
})
export class CategoryIndividualComponent implements OnInit {

  @Input() chosenCategory: Category;
  private childrenList: any = [];

  constructor(
    private subCategoryApi: SubCategoryApi,
    private categoryApi: CategoryApi,
    private _sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.chosenCategory);
    this.subCategoryApi.getSubCategoriesOfCategory(this.chosenCategory.id).subscribe((subCategories:any[]) => {
        console.log(subCategories);
        this.childrenList = subCategories;
    },error => {
      console.log(error);
    });
  }

  editCategory() {
    this._sharedService.updateBreadcrumList(this.chosenCategory,3);
  }

  deleteCategory() {
    this.categoryApi.deleteCategory(this.chosenCategory.id).subscribe(result => {
      this._sharedService.createToast("Deleted successfully","green");
      this.router.navigate(["/category"]);
    });
  }

}
