import { Component, OnInit, OnDestroy } from '@angular/core';
import { CauseService } from '../../../services/cause.service';
import { Cause } from '../cause.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cause-big-details',
  templateUrl: './cause-big-details.component.html',
  styleUrls: ['./cause-big-details.component.css']
})
export class CauseBigDetailsComponent implements OnInit {

  cause: Cause = null;

  constructor(private causeService: CauseService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];

    console.log(id);
    this.causeService.getCauseById(id).subscribe((cause) => {
      console.log(cause);
      this.cause = cause[0];
    })
  }

  getCurrentColor() {
    const { collectedAmount, neededAmount } = this.cause;
    const lowAmount = neededAmount / 3;

    if (collectedAmount >= 0 && collectedAmount <= lowAmount) {
      return { lowAmount: true };
    } else if (collectedAmount > lowAmount && collectedAmount < neededAmount) {
      return { middleAmount: true }
    } else {
      return { highAmount: true }
    }
  }


}
