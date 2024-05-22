import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }

}
