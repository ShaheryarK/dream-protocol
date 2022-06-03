import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { PurchaseFlowModalComponent } from 'src/app/shared/components/modals/purchase-flow-modal/purchase-flow-modal.component';
import { MarketplaceItem } from 'src/app/shared/models/marketplact-item';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DpMainService } from 'src/app/shared/services/dp-main.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
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
  balance = 515;
  items: MarketplaceItem[] = [
    {
      availability: {
        price: 3,
        qty: 4,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: 1654002913,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'Godjira Gen 2',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://pbs.twimg.com/profile_images/1493765570642120706/6JYwCpdE_400x400.jpg',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 515,
        qty: 4,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: 1654002913,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'JAPANESE BAPES WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://www.creepz.co/static/media/creepz-gif.9adaf641.gif',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 715,
        qty: 0,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: 1654002913,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'PERFIDIOUS WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://www.creepz.co/static/media/arms-gif.f4ff79ba.gif',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 915,
        qty: 8,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: 1654002913,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: new Date().getTime() / 1000,
        name: 'JAPANESE BAPES WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'assets/images/others/img2.png',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 3,
        qty: 4,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: new Date().getTime() / 1000,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'JAPANESE BAPES WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://www.creepz.co/static/media/pouch.7e483bc4.gif',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 3,
        qty: 4,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: new Date().getTime() / 1000,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'JAPANESE BAPES WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://www.creepz.co/static/media/creepz-gif.9adaf641.gif',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
    {
      availability: {
        price: 3,
        qty: 4,
        total: 10,
      },
      id: 492949293,
      info: {
        category: '2',
        created: 1654002913,
        description:
          'A Collection of 3333 Unique Gen 2 GodJiras on the Ethereum blockchain living as NFTs.',
        expires: 1659266113,
        name: 'JAPANESE BAPES WL',
      },
      links: {
        discord: 'https://discord.com/invite/projectgodjira',
        img: 'https://www.creepz.co/static/media/creepz-gif.9adaf641.gif',
        twitter: 'https://twitter.com/PGodjira',
      },
    },
  ];
  currentTheme: any;
  hideContent: boolean = true;
  sortBy: string = 'info.expires';
  filterByCategories: string[] = [];
  selectedCategories: string[] = [];
  purchaseFlowSubscription!:Subscription;
  constructor(
    private themeService: ThemeService,
    private modalService: NgbModal,
    private dpMainService: DpMainService,
    private authService: AuthService
  ) {
    this.currentTheme = this.themeService.currentTheme;
    dpMainService.getMarketPlaceData().subscribe((res) => {
      // this.items = res.items;
      this.categories = res.categories;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideContent = false;
    }, 500);
  }

  openPurchaseFlowModal() {
    const modalRef = this.modalService.open(PurchaseFlowModalComponent);
    modalRef.componentInstance.name = 'World';
    modalRef.result.then(
      (result) => {
        console.log({ result });
      },
      (reason) => {
        console.log({ reason });
      }
    );
  }
  startPurchaseFlow(){
    if(this.purchaseFlowSubscription){
      this.purchaseFlowSubscription.unsubscribe();
    }
    if(this.authService.currentUserData){
      this.openPurchaseFlowModal();
    }else{
      this.authService.connectMetaMaskWallet()
      this.purchaseFlowSubscription = this.authService.currentUser.subscribe(res=>{
        console.log({res});
        if(res){
          this.openPurchaseFlowModal();
        }
      })
    }
  }

  onCheckboxChange(catId: string, event: any) {
    let isChecked = event.target.checked;
    console.log({ catId }, { isChecked });
    if (isChecked) {
      this.selectedCategories.push(catId);
    } else {
      let index = this.selectedCategories.indexOf(catId);
      this.selectedCategories.splice(index, 1);
    }
    console.log(this.selectedCategories);
  }

  applyFilter(){
    this.filterByCategories = this.selectedCategories.slice();
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
