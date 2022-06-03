import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';
import Web3 from 'web3';
declare var window: any;
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private publicHttp: HttpClient,
    handler: HttpBackend
  ) {
    this.publicHttp = new HttpClient(handler);
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') as string)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  public get currentUserData(): any {
    return this.currentUserSubject.value;
  }

  connectMetaMaskWallet() {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(async (res: any) => {
          console.log({ res });
          let web3 = new Web3(window.ethereum);
          let address = res[0].toLowerCase();
          let message = `This will not trigger a transaction or cost any gas. Signing address: ${address}`;
          try {
          const signature = await web3.eth.personal.sign(message, address, '');
          console.log(`Signature: ${signature}&${address}`);
          let authToken = `${signature}&${address}`;
          let currentUser = {
            authToken: authToken,
          };

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
        } catch (e) {
            console.error(e);
            alert('Unable to sign using wallet, try again!');
        }
          // Auth token

        });
    } else {
      console.log('Error connecting wallet');
      alert('Error connecting wallet MetaMask Not Found');
    }
  }
  clearStorage() {
    localStorage.clear();
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
  }
}
