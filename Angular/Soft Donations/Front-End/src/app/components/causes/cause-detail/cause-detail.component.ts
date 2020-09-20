import { Component, OnInit, Input } from '@angular/core';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './cause-detail.component.html',
  styleUrls: ['./cause-detail.component.css']
})
export class CauseDetailComponent implements OnInit {

  @Input() causeForDetails: Cause;

  constructor() { }

  checkForDetails() {
    return this.causeForDetails !== null;
  }

  getCurrentColor() {
    const { collectedAmount, neededAmount } = this.causeForDetails;
    const lowAmount = neededAmount / 3;

    if (collectedAmount >= 0 && collectedAmount <= lowAmount) {
      return { lowAmount: true };
    } else if (collectedAmount > lowAmount && collectedAmount < neededAmount) {
      return { middleAmount: true }
    } else {
      return { highAmount: true }
    }
  }

  ngOnInit() {
  }

}