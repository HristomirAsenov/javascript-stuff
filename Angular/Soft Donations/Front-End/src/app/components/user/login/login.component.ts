import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  onLoginHandler(formData: NgForm) {

    const email: string = formData.value.email;
    const password: string = formData.value.password;

    this.userService.login(email, password).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/']);
    });

  }
}
