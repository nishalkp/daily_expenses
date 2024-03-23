import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}
  activeTabIndex = 0;
  logEmail: string = '';
  logPass: string = '';
  signEmail: string = '';
  signPass: string = '';
  activeTab: string = 'login';
  loginUrl: string = 'http://localhost:8080/api/user/login';
  login() {
    console.log('login');
    let params = new HttpParams()
      .set('name', this.logEmail)
      .set('password', this.logPass);
    this.http
      .post(
        `http://localhost:8080/api/user/login?name=${this.logEmail}&password=${this.logPass}`,
        null
      )
      .subscribe(
        (res) => {
          res ? this.router.navigate(['/new-expense']) : '';
        },
        (err) => {
          console.log(err);
        }
      );
  }
  signupUrl: string = 'http://localhost:8080/api/user/signup';
  signup() {
    console.log('sign up');
    this.http
      .post(this.signupUrl, { name: this.signEmail, password: this.signPass })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
