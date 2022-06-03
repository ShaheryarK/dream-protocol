import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
})
export class PurchaseModalComponent implements OnInit {
  @Output() purchaseSuccess: EventEmitter<any> = new EventEmitter();
  currentTheme: any;
  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme;
  }

  ngOnInit(): void {}

  confirmPurchase(){
    this.purchaseSuccess.emit(true);
  }
}
