import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'wh-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

    public id: number = -1;

    @Output()
    onClose: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        
    }

    onCloseClick() {
        this.onClose.emit(this.id);
    }

    ngOnDestroy() {
        
    }

}
