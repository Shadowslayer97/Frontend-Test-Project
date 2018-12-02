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

  ngAfterViewInit() {
    var mincount = 2;
    var maxcount = 4;

    $(".list-group li").slice(2).hide();

    $(".category-list").scroll(function() {

      if($(".category-list").scrollTop() + $(".category-list").height() >= $(".category-list")[0].scrollHeight) {

        $(".list-group li").slice(mincount,maxcount).fadeIn(1000);

        mincount = mincount+2;
        maxcount = maxcount+4;

      }
    });
  }

}
