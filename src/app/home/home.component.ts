import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1500/300`
  );
  faArrowRight = faArrowRight;
}
