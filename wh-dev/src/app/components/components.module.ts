import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    CommonModule,
    DragDropModule
  ],
  exports: [
    TicketComponent,
    TicketColumnComponent,
    TicketBoardComponent
  ]
})
export class ComponentsModule { }
