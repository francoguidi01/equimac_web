import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent {

  constructor(private darkModeService: DarkModeService) {}

  isDarkMode: boolean = false;


  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }
}
