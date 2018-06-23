import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
  public login(): void {
    this.authService.tryLogin();
  }

  public authenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
