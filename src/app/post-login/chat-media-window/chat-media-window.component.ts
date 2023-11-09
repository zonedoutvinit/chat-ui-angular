import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-media-window',
  templateUrl: './chat-media-window.component.html',
  styleUrls: ['./chat-media-window.component.css']
})
export class ChatMediaWindowComponent implements OnInit {

  @Input() onClose!: (args: any) => void;
  constructor() { }

  ngOnInit(): void {
  }

  closeCard = () => this.onClose && this.onClose(false);
}
