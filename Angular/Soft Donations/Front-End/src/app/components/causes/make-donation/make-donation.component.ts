import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CauseService } from 'src/app/services/cause.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'make-donation',
    templateUrl: 'make-donation.component.html',
    styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
    constructor(private causesService: CauseService, private route: Router) { }

    @Input() id;

    ngOnInit() { }

    onDonationHandler(formData: NgForm) {
        console.log(this.id)
        this.causesService.updateCauseNeededAmount(this.id, formData.value).subscribe((updatedCause) => {
            console.log(updatedCause);
            this.route.navigate(['./'])
        })
    }
}