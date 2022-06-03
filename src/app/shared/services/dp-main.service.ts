import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DpMainService {
  private currentBalanceSubject: BehaviorSubject<any>;
  public currentBalance: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private publicHttp: HttpClient,
    handler: HttpBackend
  ) {
    this.currentBalanceSubject = new BehaviorSubject<any>(null);
    this.currentBalance = this.currentBalanceSubject.asObservable();
  }

  public get currentThemeValue(): any {
    return this.currentBalanceSubject.value;
  }

  updateCurrentBalance() {
    this.http
      .get<any>(`${environment.backendUrl}/account/balance`)
      .subscribe((res) => {
        this.currentBalanceSubject.next(res);
      });
  }
  getVerifaiOtp() {
    return this.http.post<any>(`${environment.backendUrl}/otp`, {});
  }

  getMarketPlaceData() {
    return this.http.get<any>(`${environment.backendUrl}/marketplace/items`);
  }
  getBalance() {
    return this.http.get<any>(`${environment.backendUrl}/account/balance`);
  }

  getPurchases() {
    return this.http.get<any>(`${environment.backendUrl}/account/purchases`);
  }

  getOwnedNfts() {
    return this.http.get<any>(`${environment.backendUrl}/account/collection`);
  }
}
