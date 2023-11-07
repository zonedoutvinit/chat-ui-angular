import { timeFormater } from './helpers';

export const sampleChatHeaderJson = {
  chatGrpName: 'United',
  profile: 'assets/pexels-dids.jpg',
  videocall: 'assets/video-call.svg',
  settings: 'assets/three-dots.svg',
};

export const sampleChatJson = [
  {
    userId: '1',
    username: 'Harry Maguire',
    content: 'Hey guys',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/userimg.svg',
    type: 'sender',
  },
  {
    userId: '1',
    username: 'Harry Maguire',
    content:
      'The sun hung low in the sky, casting long shadows across the tranquil meadow. Birds chirped merrily in the distance, and a gentle breeze rustled the leaves of the tall oak trees that lined the edge of the field. It was a perfect day for a leisurely picnic, and Sarah and John had spread out a checkered blanket under the shade of a massive oak',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/userimg.svg',
    type: 'sender',
  },
  {
    userId: '1',
    username: 'Harry Maguire',
    content:
      'I hope you find this sample text enjoyable! If you have any specific topics or themes in mind, please let me know, and I can generate text accordingly.',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/userimg.svg',
    type: 'sender',
  },
  {
    userId: '1',
    username: 'You',
    content:
      'You can further customize the CSS styles to match your specific design requirements. This is just a starting point to create a chat input field with CSS.',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/userimg.svg',
    type: 'user',
  },
];

export const sampleInputJson = {
  attachBtn: 'assets/plus.svg',
  sendBtn: 'assets/send-white.svg',
};