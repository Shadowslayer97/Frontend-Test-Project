import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/sdk/models';
import { CategoryApi } from '../shared/sdk/services';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {

  @Input() categories: Category[];
  private showDropdown: boolean = false;
  private filteredCategories: any[];

  constructor(private categoryApi: CategoryApi, private _sharedService: SharedService) { }

  ngOnInit() {
    this.assignCopy();//when you fetch collection from server.
  }

  assignCopy(){
   this.filteredCategories = Object.assign([], this.categories);
  }
  filterCategory(value){
   this.showDropdown = true;
   if(!value) this.assignCopy(); //when nothing has typed
   this.filteredCategories = Object.assign([], this.categories).filter(
      category => category.name.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
  }

  autoCloseForDropdown(event) {
    var target = event.target;
    if (!target.closest(".dropdown-cats")) {
        this.showDropdown = false;
    }
  }

  updateBreadcrumList(chosenCategory: Category,view: number) {
    this._sharedService.updateBreadcrumList(chosenCategory,view);
  }


}
