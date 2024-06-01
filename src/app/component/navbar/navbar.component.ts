import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }
}
