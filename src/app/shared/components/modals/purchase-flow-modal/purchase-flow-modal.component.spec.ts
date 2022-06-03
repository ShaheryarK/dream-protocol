import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFlowModalComponent } from './purchase-flow-modal.component';

describe('PurchaseFlowModalComponent', () => {
  let component: PurchaseFlowModalComponent;
  let fixture: ComponentFixture<PurchaseFlowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseFlowModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseFlowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
