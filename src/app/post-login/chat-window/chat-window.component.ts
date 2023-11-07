import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  sampleChatHeaderJson = {
    chatGrpName: 'United',
    profile: 'assets/pexels-dids.jpg',
    videocall: 'assets/video-call.svg',
    settings: 'assets/three-dots.svg',
  };

  sampleChatJson = [
    {
      userId: '1',
      username: 'Harry Maguire',
      content: 'Hey guys',
      time: this.timeFormater(new Date().toISOString()),
      image: '/assets/userimg.svg',
      type: 'sender',
    },
    {
      userId: '1',
      username: 'Harry Maguire',
      content:
        'The sun hung low in the sky, casting long shadows across the tranquil meadow. Birds chirped merrily in the distance, and a gentle breeze rustled the leaves of the tall oak trees that lined the edge of the field. It was a perfect day for a leisurely picnic, and Sarah and John had spread out a checkered blanket under the shade of a massive oak',
      time: this.timeFormater(new Date().toISOString()),
      image: '/assets/userimg.svg',
      type: 'sender',
    },
    {
      userId: '1',
      username: 'Harry Maguire',
      content:
        'I hope you find this sample text enjoyable! If you have any specific topics or themes in mind, please let me know, and I can generate text accordingly.',
      time: this.timeFormater(new Date().toISOString()),
      image: '/assets/userimg.svg',
      type: 'sender',
    },
    {
      userId: '1',
      username: 'You',
      content:
        'You can further customize the CSS styles to match your specific design requirements. This is just a starting point to create a chat input field with CSS.',
      time: this.timeFormater(new Date().toISOString()),
      image: '/assets/userimg.svg',
      type: 'user',
    },
  ];

  sampleInputJson = {
    attachBtn: 'assets/plus.svg',
    sendBtn:'assets/send-white.svg'
  };

  timeFormater(time: string) {
    const splitTime = time.split('T')[1];
    return splitTime.slice(0, 5);
  }
}
