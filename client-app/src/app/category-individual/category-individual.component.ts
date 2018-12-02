import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../shared/sdk/models';
import { SharedService } from '../shared.service';
import { CategoryApi } from '../shared/sdk/services';

@Component({
  selector: 'app-category-individual',
  templateUrl: './category-individual.component.html',
  styleUrls: ['./category-individual.component.scss']
})
export class CategoryIndividualComponent implements OnInit {

  @Input() chosenCategory: Category;

  constructor(private categoryApi: CategoryApi, private _sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    console.log(this.chosenCategory);
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
