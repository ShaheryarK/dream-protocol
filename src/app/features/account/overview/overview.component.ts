import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(['(max-width: 920px)', Breakpoints.Handset])
  .pipe(
    map((result: { matches: any; }) => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
