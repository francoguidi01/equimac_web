import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-overlapping',
  templateUrl: './overlapping.component.html',
  styleUrls: ['./overlapping.component.css']
})
export class OverlappingComponent {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
  }


  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
