import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'profile-causes',
    templateUrl: './profile-causes.component.html',
    styleUrls: ['./profile-causes.component.css']
})
export class ProfileCausesComponent implements OnInit {

    @Input() myOwnCauses: [];
    @Input() causesIDonatedTo: [];

    constructor() { }

    ngOnInit() {

        // console.log('*'.repeat(20));
        // console.log(this.myOwnCauses);
        // console.log(this.causesIDonatedTo);
        // console.log('*'.repeat(20));
    }
}