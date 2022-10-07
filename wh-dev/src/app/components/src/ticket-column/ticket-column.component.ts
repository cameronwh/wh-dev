import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
    selector: 'wh-ticket-column',
    templateUrl: './ticket-column.component.html',
    styleUrls: ['./ticket-column.component.scss']
})
export class TicketColumnComponent {

    private _ticketIndex: number = 0;

    childTickets: ComponentRef<TicketComponent>[] = [];

    constructor(private viewContainerRef: ViewContainerRef) { }

    onTicketClose(ticketId: number) {
        var ticketToClose = this.childTickets.find(x => x.instance.id === ticketId);
        if (ticketToClose) {
            console.log('ticketToClose', ticketToClose);
            ticketToClose.destroy();
        }
    }

    onClick() {
        console.log('clicked!');
        let newComponent = this.viewContainerRef.createComponent(TicketComponent);
        newComponent.instance.id = this._ticketIndex++;

        this.childTickets.push(this.viewContainerRef.createComponent(TicketComponent));
    }
}
