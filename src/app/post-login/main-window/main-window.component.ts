import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
})
export class MainWindowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showChatDetails = false;
  showMediaDetails = true;

  setShowChatDetails = (bool: boolean) => {
    this.showChatDetails = bool;
  };

  setShowMediaDetails = (bool: boolean) => {
    this.showMediaDetails = bool;
  };
}
