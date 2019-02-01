import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  slideIndex: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  plusSlides(n) {
    if (this.slideIndex === 3 && n === 1) {
      this.slideIndex = 1;
    } else if (this.slideIndex === 1 && n === -1) {
      this.slideIndex = 3;
    } else {
      this.slideIndex+= n;
    }
  }
}
