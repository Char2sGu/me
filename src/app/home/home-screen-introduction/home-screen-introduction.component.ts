import { Component, OnInit } from '@angular/core';
import {
  faDiscord,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-screen-introduction',
  templateUrl: './home-screen-introduction.component.html',
  styleUrls: ['./home-screen-introduction.component.scss'],
})
export class HomeScreenIntroductionComponent implements OnInit {
  links: HomeScreenIntroductionLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/TheNightmareX',
      icon: faGithub,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/Nzfhx5tqje',
      icon: faDiscord,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Char2s',
      icon: faTwitter,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface HomeScreenIntroductionLink {
  name: string;
  href: string;
  icon: any;
}
