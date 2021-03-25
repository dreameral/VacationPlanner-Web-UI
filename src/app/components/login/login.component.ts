import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isValid() {
    return this.loginForm.valid;
  }

  logIn() {
    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
        let token = data.headers.get('Authorization') as string;
        token = token.split(' ')[1];
        this.tokenStorage.setToken(token);
        this.router.navigate(['home']);
      }, error => {
        this.snackbar.open('Incorrect Credentials!', 'Close', {duration: 2000});
        console.log(error);
      });
    }
  }
}
