import { Component, OnInit } from '@angular/core';
import { CauseService } from '../../../services/cause.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private causeService: CauseService) { }

  ngOnInit() {
  }

}
