import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css'],
})
export class AppTitleComponent {
  @Input() heading: string = '';
  constructor(private router: Router) {}
  goHome() {
    console.log('backkk to hoome');
    this.router.navigate(['/home']);
  }
}
