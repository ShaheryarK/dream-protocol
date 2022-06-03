import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-disclaimer-modal',
  templateUrl: './disclaimer-modal.component.html',
  styleUrls: ['./disclaimer-modal.component.scss'],
})
export class DisclaimerModalComponent implements OnInit {
  @Output() disclaimerAccepted: EventEmitter<any> = new EventEmitter();
  currentTheme: any;
  constructor(
    private themeService: ThemeService
  ) {
    this.currentTheme = this.themeService.currentTheme;
  }

  ngOnInit(): void {}
}
