import { Component, OnInit, Input, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Cause } from '../cause.model';
import { CauseService } from '../../../services/cause.service';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.css']
})


export class CauseListComponent implements OnInit {

  @Input() causes: Cause[];

  constructor(private causeService: CauseService) { }

  ngOnInit() {
  }

  setNewCauseDetails(cause: Cause) {
    this.causeService.causeDetails.emit(cause);
  }
}