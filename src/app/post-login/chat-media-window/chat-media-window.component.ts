import { Component, Input, OnInit } from '@angular/core';
import { sampleMediaDetail } from 'src/utils/static-data';

@Component({
  selector: 'app-chat-media-window',
  templateUrl: './chat-media-window.component.html',
  styleUrls: ['./chat-media-window.component.css'],
})
export class ChatMediaWindowComponent implements OnInit {
  @Input() onClose!: (args: any) => void;
  selectedtab = 'Media';
  tabs = ['Media', 'Links', 'Docs'];
  constructor() {}

  ngOnInit(): void {}

  chatDetailAssets = sampleMediaDetail;
  closeCard = () => this.onClose && this.onClose(false);
  tabSwitch = (newSelectedtab: string) => {
    this.selectedtab = newSelectedtab;
  };
}
