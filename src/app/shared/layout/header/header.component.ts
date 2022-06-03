import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import Web3 from 'web3';
import { AuthService } from '../../services/auth.service';
import { DpMainService } from '../../services/dp-main.service';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  currentTheme: any;
  currentUser: any = null;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 920px)', Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private dpService: DpMainService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.currentTheme = this.themeService.currentTheme;
    this.authService.currentUser.subscribe((res) => {
      this.currentUser = res;
      if (res) {
        this.dpService.updateCurrentBalance();
      }
    });
  }

  ngOnInit(): void {}

  login() {
    this.authService.connectMetaMaskWallet();
  }
}
