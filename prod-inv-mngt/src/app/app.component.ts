import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  // showWelcome: boolean = true;

  // constructor(private router: Router) {}

  // enterApplication() {
  //   this.showWelcome = false;
  //   //this.router.navigate(['/products']); // Navigate to Main Services Page
  }
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
}
}
