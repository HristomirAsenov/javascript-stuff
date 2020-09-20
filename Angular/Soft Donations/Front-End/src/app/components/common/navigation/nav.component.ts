import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthGuard } from '../../../auth.guard';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class AppNavigation implements OnInit {

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  constructor(private userService: UserService) { }

  ngOnInit() { }

}