import {
  Component,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { scrollToBottom, timeFormater } from 'src/utils/helpers';
import { sampleChatHeaderJson, sampleChatJson, sampleInputJson } from 'src/utils/static-data';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements AfterViewInit {
  @ViewChildren('messageItem') messageItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.messageItems.changes.subscribe(() => {
      scrollToBottom(this.messageItems);
    });
  }

  messageContent = '';
  messages = sampleChatJson;
  headerInfo = sampleChatHeaderJson;
  inputAssets = sampleInputJson;

  updateTextField(event: Event) {
    this.messageContent = (event.target as HTMLInputElement).value;
  }

  sendMessage(event?: Event) {
    const newMessage = {
      userId: '1',
      username: 'You',
      content: this.messageContent,
      time: timeFormater(new Date().toISOString()),
      image: '/assetsuserimg.svg',
      type: 'user',
    };
    this.messages = [...this.messages, newMessage];
    this.messageContent = '';
    if (event?.type === 'click' || event) {
      const inputField = document.getElementById(
        'message-input'
      ) as HTMLInputElement;
      inputField.value = '';
    }
  }
}
