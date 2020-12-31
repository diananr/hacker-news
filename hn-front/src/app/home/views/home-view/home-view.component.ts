import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public articles = [
    {
      "created_at": "2020-12-31T01:18:01.000Z",
      "title": null,
      "url": null,
      "author": "derefr",
      "story_id": 25582187,
      "story_title": "Show HN: PSX Party – Online Multiplayer Playstation 1 Emulator Using WebRTC",
      "story_url": "https://psxparty.kosmi.io/?ref=hn1",
    },
    {
			"created_at": "2020-12-31T01:01:16.000Z",
			"title": null,
			"url": null,
			"author": "Jonnax",
			"story_id": 25585953,
			"story_title": "Intel Urged to Take 'Immediate Action' Amid Threats from Apple Silicon and AMD",
			"story_url": "https://www.macrumors.com/2020/12/30/intel-urged-to-take-immediate-action-amid-threats/",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
