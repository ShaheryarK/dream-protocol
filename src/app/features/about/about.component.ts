import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  currentTheme: any;
  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme;
  }
  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
