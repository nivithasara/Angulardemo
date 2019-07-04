import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  login(data){
	  console.log(data.value);
  }

}
