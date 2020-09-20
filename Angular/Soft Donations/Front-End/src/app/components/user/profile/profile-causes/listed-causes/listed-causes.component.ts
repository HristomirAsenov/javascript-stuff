import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'listed-causes',
    templateUrl: './listed-causes.component.html',
    styleUrls: []
})
export class ListedCausesComponent implements OnInit {

    @Input() causes: [];
    constructor() { }

    ngOnInit() {

        console.log(this.causes);
    }
}