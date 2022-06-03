import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentTheme: Observable<any>;
  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme;
    this.currentTheme.subscribe((res) => {
      this.initTheme(res);
    });
  }
  ngOnInit(): void {
    // this.changeTheme('#343C5C', '#ffffff','#544C6C','#DB7BB7','#E00000','#343C5C');
  }
  initTheme(themeId: number) {
    console.log({ themeId });
    switch (themeId) {
      case 1:
        {
          this.setTheme(
            '#ef8fb9',
            '#ffffff',
            '#220c65',
            '#ef8fb9',
            '#e00000',
            '#220c65',
            '#ef8fb9'
          );
        }

        break;
      case 2:
        {
          this.setTheme(
            '#343C5C',
            '#ffffff',
            '#544C6C',
            '#DB7BB7',
            '#E00000',
            '#343C5C',
            '#DB7BB7'
          );
        }

        break;
      case 3:
        {
          this.setTheme(
            '#CC5C04',
            '#ffffff',
            '#7C3636',
            '#A44C34',
            '#E00000',
            '#7C3636',
            '#CC5C04'
          );
        }

        break;

      case 4:
        {
          this.setTheme(
            '#20A36A',
            '#ffffff',
            '#7C3636',
            '#20A36A',
            '#E00000',
            '#A0572E',
            '#20A36A'
          );
        }

        break;

      case 5:
        {
          this.setTheme(
            '#567CD8',
            '#ffffff',
            '#3C2474',
            '#567CD8',
            '#E00000',
            '#3C2474',
            '#567CD8',
          );
        }

        break;

      case 6:
        {
          this.setTheme(
            '#422D15',
            '#ffffff',
            '#DDDDD4',
            '#84B0F7',
            '#E00000',
            '#422D15',
            '#DDDDD4',
          );
        }

        break;

      case 7:
        {
          this.setTheme(
            '#133149',
            '#ffffff',
            '#8C6C7C',
            '#D4845C',
            '#E00000',
            '#8C6C7C',
            '#133149'
          );
        }

        break;

      case 8:
        {
          this.setTheme(
            '#BC94AC',
            '#ffffff',
            '#DEA064',
            '#A6CDF2',
            '#E00000',
            '#C49C94',
            '#A6CDF2'
          );
        }

        break;

      case 9:
        {
          this.setTheme(
            '#70D4FB',
            '#ffffff',
            '#3494BC',
            '#3494BC',
            '#E00000',
            '#455E9D',
            '#70D4FB'
          );
        }

        break;
      case 10:
        {
          this.setTheme(
            '#FCE4D4',
            '#ffffff',
            '#CAC2BA',
            '#B8C4E4',
            '#E00000',
            '#CAC2BA',
            '#FCE4D4'
          );
        }

        break;

      case 11:
        {
          this.setTheme(
            '#2CFC3C',
            '#ffffff',
            '#247C24',
            '#6B7C34',
            '#E00000',
            '#345C2C',
            '#2CFC3C'
          );
        }

        break;
      case 12:
        {
          this.setTheme(
            '#55B7F4',
            '#ffffff',
            '#A4D8F8',
            '#55B7F4',
            '#E00000',
            '#006BAD',
            '#55B7F4'
          );
        }

        break;

      case 13:
        {
          this.setTheme(
            '#27383A',
            '#ffffff',
            '#7C8443',
            '#7C8443',
            '#E00000',
            '#27383A',
            '#7C8443'
          );
        }

        break;
      case 14:
        {
          this.setTheme(
            '#343C5C',
            '#ffffff',
            '#4C7C94',
            '#EC8494',
            '#E00000',
            '#343C5C',
            '#4C7C94'
          );
        }

        break;

      case 15:
        {
          this.setTheme(
            '#F381BA',
            '#ffffff',
            '#75429C',
            '#F381BA',
            '#E00000',
            '#75429C',
            '#F381BA',
          );
        }

        break;

      default:
        break;
    }
  }
  setTheme(
    primary: string,
    secondary: string,
    shadow: string,
    btnBgSmall: string,
    btnBgMedium: string,
    btnBgBig: string,
    tabColor: string,
  ) {
    console.log({ primary });
    document.documentElement.style.setProperty('--primary-theme-color', primary);
    document.documentElement.style.setProperty('--secondary-theme-color', secondary);
    document.documentElement.style.setProperty('--shadow-color', shadow);
    document.documentElement.style.setProperty(
      '--btn-bg-small-color',
      btnBgSmall
    );
    document.documentElement.style.setProperty(
      '--btn-bg-medium-color',
      btnBgMedium
    );
    document.documentElement.style.setProperty('--btn-bg-big-color', btnBgBig);
    document.documentElement.style.setProperty('--tab-color', tabColor);
  }
}
