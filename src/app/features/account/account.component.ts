import { Component, OnInit } from '@angular/core';
import { DpMainService } from 'src/app/shared/services/dp-main.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  activeId = 1;
  purchaseList: any = [1,2,3];
  nftCollection: any = [];
  constructor(private dpMainService: DpMainService) {
    this.dpMainService.getPurchases().subscribe((purchasesResponse) => {
      if (purchasesResponse?.purchases) {
        this.purchaseList = purchasesResponse?.purchases;
      }
      console.log({ purchasesResponse });
    });

    this.dpMainService.getOwnedNfts().subscribe((nftsResponse) => {
      if (nftsResponse) {
        this.nftCollection = nftsResponse;
      }
      console.log({ nftsResponse });
    });
  }

  ngOnInit(): void {}
}
