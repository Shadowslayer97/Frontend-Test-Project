import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKBrowserModule } from './shared/sdk/index';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const appRoutes: Routes = [
  { path: '' ,redirectTo: '/login' ,pathMatch:'full' },
  { path: 'login' ,component: AuthenticationComponent },
  { path: 'category' ,component: CategoryComponent },
  { path:'**' ,redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AuthenticationComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
