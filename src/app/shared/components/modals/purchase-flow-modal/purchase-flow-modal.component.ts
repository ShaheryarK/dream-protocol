import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-purchase-flow-modal',
  templateUrl: './purchase-flow-modal.component.html',
  styleUrls: ['./purchase-flow-modal.component.scss'],
})
export class PurchaseFlowModalComponent implements OnInit {
  @Input() name: string = '';
  isDisclaimerAccepted: boolean = false;
  isSuccess:boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }
  ngOnInit(): void {}

}
