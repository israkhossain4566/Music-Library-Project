<<<<<<< HEAD
// login-signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
=======
import { Component } from '@angular/core';
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
<<<<<<< HEAD
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  constructor(private authService: AuthService) {}

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }

  signup(username: string, password: string, password2: string): void {
    this.authService.signup(username, password, password2).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('Signup successful', response);
      },
      (error) => {
        // Handle signup error
        console.error('Signup error', error);
      }
    );
  }
=======
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347
}
