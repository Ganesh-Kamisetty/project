import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl(),
    passWord: new FormControl()
  })
  isRouted: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.profileForm.controls.userName.value == 'admin' && this.profileForm.controls.passWord.value == 'admin') {
      this.isRouted = true;
      this.router.navigate(['/home']);
    }
    else {
      this.router.navigate(['/error']);
      this.isRouted = true;
    }
  }

}
