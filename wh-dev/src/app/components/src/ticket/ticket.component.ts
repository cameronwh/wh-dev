import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wh-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }

    onClick($event: any) {
        console.log('clicked ticketa!', $event);
    }

}
