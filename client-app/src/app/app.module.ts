import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKBrowserModule } from './shared/sdk/index';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from './shared.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { CategoryIndividualComponent } from './category-individual/category-individual.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const appRoutes: Routes = [
  { path: '' ,redirectTo: '/login' ,pathMatch:'full' },
  { path: 'login' ,component: AuthenticationComponent },
  { path: 'category' ,component: CategoryComponent, canActivate: [AuthService] },
  { path:'**' ,redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AuthenticationComponent,
    CategorySearchComponent,
    CategoryListComponent,
    BreadcrumComponent,
    CategoryIndividualComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [SharedService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
