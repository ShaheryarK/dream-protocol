import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<any>;
  public currentTheme: Observable<any>;

  constructor() {
    this.currentThemeSubject = new BehaviorSubject<any>(this.generateRandomInteger(1, 15));
    // this.currentThemeSubject = new BehaviorSubject<any>(7);

    this.currentTheme = this.currentThemeSubject.asObservable();
  }



  public get currentThemeValue(): any {
    return this.currentThemeSubject.value;
  }

  generateRandomInteger(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  changeTheme() {
    this.currentThemeSubject.next(this.generateRandomInteger(1, 15));
  }
}
