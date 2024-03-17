import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent {
  expenseObj:FormObject;
  constructor(private router:Router,private http:HttpClient) {
    // Initialize the expense object with initial values
    this.expenseObj = {
      amount: 0,
      expenseType: '',
      description: '',
      paymentType: ''
    };
  }
  goHome(){
    console.log('backkk to hoome');
    this.router.navigate(['/home']);
  }
  saveExpense(){
    console.log('save');
    console.log(this.expenseObj);
    this.http
      .post('http://localhost:8080/api/expense/addExpense', this.expenseObj)
      .subscribe(
        (res) => {
          console.log("saved",res);
        },
        (err) => {
          console.log("saved",err);
        }
      );
  }
}

interface FormObject{
  amount:number,
  expenseType:string,
  description:string,
  paymentType:string
}
