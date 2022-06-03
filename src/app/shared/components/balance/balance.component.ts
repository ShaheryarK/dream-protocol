import { Component, OnInit } from '@angular/core';
import { DpMainService } from '../../services/dp-main.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  currentBalance: any;
  constructor(private dpMainService: DpMainService) {
    dpMainService.currentBalance.subscribe(res=>{
      this.currentBalance = res;
    })
  }

  ngOnInit(): void {}
}
