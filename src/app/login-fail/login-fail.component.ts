import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fail',
  templateUrl: './login-fail.component.html',
  styleUrls: ['./login-fail.component.css']
})
export class LoginFailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Login Failed',
    })
    this.router.navigate(['']);
  }

}
