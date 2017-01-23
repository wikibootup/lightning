import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUrl = '/api/auth/thingplus';

  constructor(private _router: Router) { }

  ngOnInit() {
    window.location.href = this.loginUrl; 
  }

}
