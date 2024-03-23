import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-exp',
  templateUrl: './view-exp.component.html',
  styleUrls: ['./view-exp.component.css'],
})
export class ViewExpComponent {
  pageTitle: string = 'View Expenses';
  data: any[] = [];
  expenseObj: Expense;
  constructor(private router: Router, private http: HttpClient) {
    this.expenseObj = {
      paymentType: '',
      amountTo: '',
      amountFrom: '',
      description: '',
      expenseType: '',
      month: '',
      date: '',
    };
  }
  filter() {
    this.http
      .post<[]>('http://localhost:8080/api/expense/getExpense', this.expenseObj)
      .subscribe(
        (res) => {
          console.log(res);
          this.data.push(...res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  goHome() {
    console.log('backkk to hoome');
    this.router.navigate(['/home']);
  }
}
interface Expense {
  paymentType: string;
  amountTo: string;
  amountFrom: string;
  description: string;
  expenseType: string;
  month: string;
  date: string;
}
