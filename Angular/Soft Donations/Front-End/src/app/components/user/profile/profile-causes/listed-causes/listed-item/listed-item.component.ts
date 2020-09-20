import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'listed-item',
    templateUrl: './listed-item.component.html',
    styleUrls: []
})

export class ListedItemComponent implements OnInit {
    
    @Input() cause: {_id: string, cause: string};
    constructor() { }

    ngOnInit() { 

        console.log(this.cause);
    }

}