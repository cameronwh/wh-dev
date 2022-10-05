import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './src/ticket/ticket.component';
import { TicketColumnComponent } from './src/ticket-column/ticket-column.component';
import { TicketBoardComponent } from './src/ticket-board/ticket-board.component';

@NgModule({
  declarations: [
    TicketComponent,
    TicketColumnComponent,
    TicketBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TicketComponent,
    TicketColumnComponent,
    TicketBoardComponent
  ]
})
export class ComponentsModule { }
