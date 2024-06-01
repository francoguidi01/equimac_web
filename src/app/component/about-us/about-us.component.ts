import { Component, ElementRef, ViewChild } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
  }
  
  ngOnInit(): void {
    window.scrollTo(0, 0); 

    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
