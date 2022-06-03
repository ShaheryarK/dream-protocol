import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  @Input() purchaseList = [1, 2, 3];
  categories = [
    {
      id: '1',
      name: 'Access',
    },
    {
      id: '2',
      name: 'Whitelist',
    },
    {
      id: '3',
      name: 'Other',
    },
  ];
  sortBy: string = 'info.expires';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 920px)', Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
