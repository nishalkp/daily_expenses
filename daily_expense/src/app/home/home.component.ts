import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}
  newExp(){
    console.log("home- new exp");
    this.router.navigate(['/new-expense'])
  }
  viewExp(){
    console.log("home- view exp");
    this.router.navigate(['/view-exp'])
  }
}
