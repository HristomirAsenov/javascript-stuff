import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  onRegisterHandler(registerForm: NgForm) {
    const email: string = registerForm.value.email;
    const password: string = registerForm.value.passwords.password;
    const repeatPassword: string = registerForm.value.passwords.repeatPassword;

    this.userService.register(email, password).subscribe((user) => {
      this.route.navigate(["/user/login"]);
    });

    this.route.navigate(["/"]);
  }

}
