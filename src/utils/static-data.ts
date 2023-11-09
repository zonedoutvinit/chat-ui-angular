import { timeFormater } from './helpers';

export const sampleChatHeaderJson = {
  chatGrpName: 'United',
  profile: 'assets/images/pexels-dids.jpg',
  videocall: 'assets/images/video-call.svg',
  settings: 'assets/images/three-dots.svg',
};

export const sampleChatJson = [
  {
    userId: '1',
    username: 'Harry Maguire',
    content: 'Hey guys',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/images/userimg.svg',
    type: 'sender',
  },
  {
    userId: '1',
    username: 'Harry Maguire',
    content:
      'The sun hung low in the sky, casting long shadows across the tranquil meadow. Birds chirped merrily in the distance, and a gentle breeze rustled the leaves of the tall oak trees that lined the edge of the field. It was a perfect day for a leisurely picnic, and Sarah and John had spread out a checkered blanket under the shade of a massive oak',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/images/userimg.svg',
    type: 'sender',
  },
  {
    userId: '1',
    username: 'Harry Maguire',
    content:
      'I hope you find this sample text enjoyable! If you have any specific topics or themes in mind, please let me know, and I can generate text accordingly.',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/images/userimg.svg',
    type: 'sender',
  },
  {
    userId: '0',
    username: 'You',
    content:
      'You can further customize the CSS styles to match your specific design requirements. This is just a starting point to create a chat input field with CSS.',
    time: timeFormater(new Date().toISOString()),
    image: '/assets/images/userimg.svg',
    type: 'user',
  },
];

export const sampleInputJson = {
  attachBtn: 'assets/images/plus.svg',
  sendBtn: 'assets/images/send-white.svg',
};

export const sampleChatDetail = {
  chatGrpName: 'United',
  profile: 'assets/images/pexels-dids.jpg',
  close: 'assets/images/cross.svg',
  title: 'Detail group',
  settingsIcon: 'assets/images/settings.svg',
  descriptionTitle: 'Description',
  linkTitle: 'Link Group',
  link: 'https://google.com',
  membersTitle: 'Members',
  description:
    'Join us for engaging discussions on all things related to lifestyle, from fitness and fashion to travel and food.',
};

export const sampleMediaDetail = {
  close: 'assets/images/cross.svg',
  title: 'Media',
};

export const availableChats = [
  {
    userName: 'Harry Maguire',
  },
  {
    userName: 'Harry Maguire',
  },
  {
    userName: 'Harry Maguire',
  },
  {
    userName: 'Harry Maguire',
  },
  {
    userName: 'Harry Maguire',
  },
  {
    userName: 'Harry Maguire',
  },
];

export const mediaStaticFiles = [
  {
    name: '1',
    img: 'assets/images/media/1.jpg',
  },
  {
    name: '2',
    img: 'assets/images/media/2.jpg',
  },
  {
    name: '3',
    img: 'assets/images/media/3.jpg',
  },
  {
    name: '4',
    img: 'assets/images/media/4.jpg',
  },
  {
    name: '5',
    img: 'assets/images/media/5.jpg',
  },
  {
    name: '6',
    img: 'assets/images/media/6.jpg',
  },
  {
    name: '7',
    img: 'assets/images/media/7.jpg',
  },
  {
    name: '8',
    img: 'assets/images/media/8.jpg',
  },
  {
    name: '9',
    img: 'assets/images/media/9.jpg',
  },
];

export const linkStaticFiles = [
  {
    id: '1',
    link: 'https://google.com',
    name: 'Better your game',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '2',
    link: 'https://google.com',
    name: 'Chelsea Own goal',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '3',
    link: 'https://google.com',
    name: 'Manchester to buy',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '4',
    link: 'https://google.com',
    name: 'Messi vs Ronaldo',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '5',
    link: 'https://google.com',
    name: 'Messi',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '6',
    link: 'https://google.com',
    name: '',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '7',
    link: 'https://google.com',
    name: '',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '8',
    link: 'https://google.com',
    name: '',
    desc: '',
    img: 'assets/images/link.svg',
  },
  {
    id: '9',
    link: 'https://google.com',
    name: '',
    desc: '',
    img: 'assets/images/link.svg',
  },
];
