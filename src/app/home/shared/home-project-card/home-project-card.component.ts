import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-project-card',
  templateUrl: './home-project-card.component.html',
  styleUrls: ['./home-project-card.component.scss'],
})
export class HomeProjectCardComponent implements OnInit {
  @Input() icon?: string;
  @Input() name?: string;
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {}
}
