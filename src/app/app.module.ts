import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketplaceComponent } from './features/marketplace/marketplace.component';
import { AboutComponent } from './features/about/about.component';
import { AccountComponent } from './features/account/account.component';
import { OverviewComponent } from './features/account/overview/overview.component';
import { PurchasesComponent } from './features/account/purchases/purchases.component';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/helpers/token.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    MarketplaceComponent,
    AboutComponent,
    AccountComponent,
    OverviewComponent,
    PurchasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FlexLayoutModule,
    NgbModule,
    NgPipesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
