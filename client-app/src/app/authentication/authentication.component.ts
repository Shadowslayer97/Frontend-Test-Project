import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/sdk/models';
import { UserApi } from '../shared/sdk/services';
import { SharedService } from '../shared.service';
declare var $:any;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private checked: boolean = false;
  private confirmPassword: string;
  private userObject: any = {};

  constructor(private userApi: UserApi, private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
          $(document).ready(function(){
            $(".btn").click(function() {
              $(".form-signin").toggleClass("form-signin-left");
              $(".form-signup").toggleClass("form-signup-left");
              $(".frame").toggleClass("frame-long");
              $(".signup-inactive").toggleClass("signup-active");
              $(".signin-active").toggleClass("signin-inactive");
              $(".forgot").toggleClass("forgot-left");
              $(this).removeClass("idle").addClass("active");
              });
            });

            $(function() {
              $(".btn-signup").click(function(e) {
                $(".nav").toggleClass("nav-up");
                $(".form-signup-left").toggleClass("form-signup-down");
                $(".success").toggleClass("success-left");
                $(".frame").toggleClass("frame-short");
              });
            });

            $(function() {
              $(".btn-signin").click(function() {
                $(".btn-animate").toggleClass("btn-animate-grow");
                $(".welcome").toggleClass("welcome-left");
                $(".cover-photo").toggleClass("cover-photo-down");
                $(".frame").toggleClass("frame-short");
                $(".profile-photo").toggleClass("profile-photo-down");
                $(".btn-goback").toggleClass("btn-goback-up");
                $(".forgot").toggleClass("forgot-fade");
              });
            });
    }

    signUpUser() {
      console.log(this.userObject);
      if(this.confirmPassword === this.userObject.password) {
        this.userApi.createUser(this.userObject)
          .subscribe((user:any) => console.log(user));
        }
      }

      loginUser() {
        console.log(this.userObject);
        this.userApi.login(this.userObject)
          .subscribe((user:any) => {
            this._sharedService.setLoggedUserDetails(user);
            setTimeout(() => {
              console.log(user);
              this.router.navigate(['category']);
            },3000)
          }, error => {
            console.log(error);
          })
      }

  }
