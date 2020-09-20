import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/validators/validators';
import { CauseService } from 'src/app/services/cause.service';
import { Cause } from '../../causes/cause.model';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: FormGroup;
  profileCauses = {
    myOwn: [],
    donatedTo: []
  };

  constructor(private userService: UserService, private route: Router, fb: FormBuilder, private causeService: CauseService) {
    this.userInfo = fb.group({
      email: ['', [Validators.required, Validators.pattern(/.{6,}@gmail\.(bg|com)$/g)]],
      passwords: fb.group({
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]]
      }, { validators: [passwordMatch] })
    });
  }

  get emailErrors() {
    return this.userInfo.get('email');
  }

  get passwordsErrors() {
    return this.userInfo.get('passwords');
  }

  get currentlyLoggedInUser() {
    return this.userService.user;
  }

  ngOnInit() {
    this.causeService.getProfileCauses().subscribe((data) => {
      this.profileCauses.myOwn = data[0].reduce((acc, curr) => {
        if (curr.author.email === this.userService.user.email) { acc.push(curr) }
        return acc;
      }, []);

      console.log(data[1].donatedTo)
      this.profileCauses.donatedTo = data[1].donatedTo.reduce((acc, curr) => {

        console.log(curr._id)
        const causeIndex = acc.findIndex((c) => c._id === curr._id );
        if(causeIndex === -1) {
          acc.push(curr);
        }

        return acc;
      }, []);
    })
  }

  onLogoutHandler() {
    this.userService.logout().subscribe((res) => {

      this.route.navigate(['/']);
    })
  }

  onChangeUserInfoHandler() { }
}
