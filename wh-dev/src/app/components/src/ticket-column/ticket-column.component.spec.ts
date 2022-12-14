import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketColumnComponent } from './ticket-column.component';

describe('TicketColumnComponent', () => {
  let component: TicketColumnComponent;
  let fixture: ComponentFixture<TicketColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
