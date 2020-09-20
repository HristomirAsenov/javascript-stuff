import { Component, OnInit, Input } from '@angular/core';
import { Cause } from '../../cause.model';

@Component({
  selector: 'app-cause-item',
  templateUrl: './cause-item.component.html',
  styleUrls: ['./cause-item.component.css']
})
export class CauseItemComponent implements OnInit {

  @Input() cause: Cause;

  constructor() { }

  ngOnInit() {
  }

}
