import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BalanceComponent } from './components/balance/balance.component';
import { RouterModule } from '@angular/router';
import { DisclaimerModalComponent } from './components/modals/disclaimer-modal/disclaimer-modal.component';
import { PurchaseModalComponent } from './components/modals/purchase-modal/purchase-modal.component';
import { SuccessModalComponent } from './components/modals/success-modal/success-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseFlowModalComponent } from './components/modals/purchase-flow-modal/purchase-flow-modal.component';

const components = [
  HeaderComponent,
  BalanceComponent,
  DisclaimerModalComponent,
  PurchaseModalComponent,
  SuccessModalComponent,
  PurchaseFlowModalComponent
]
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    NgbModule,
  ],
  exports: [...components],
})
export class SharedModule {}
