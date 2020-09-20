import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Cause } from './cause.model';
import { CauseService } from 'src/app/services/cause.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css'],
  providers: [CauseService]
})

export class CausesComponent implements OnInit, OnDestroy {
  causesSub: Subscription;
  causes: Cause[];
  causeForDetails: Cause = null;
  isLoading = false;

  constructor(private causesService: CauseService, private userService: UserService) { }

  setCauseDetails(cause: Cause) {
    this.causesService.causeDetails.subscribe((cause: Cause) => {
      console.log(cause)
      this.causeForDetails = cause;
    })
  }

  ngOnInit() {
    this.isLoading = true;
    this.causesSub = this.causesService.getAllCauses()
      .subscribe(data => {
        this.isLoading = false;
        console.log(data);
        this.causes = data;
      });
  }

  ngOnDestroy() {
    this.causesSub.unsubscribe();
  }

}