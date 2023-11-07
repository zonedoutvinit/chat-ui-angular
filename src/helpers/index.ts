import { ElementRef, QueryList } from '@angular/core';

export const timeFormater = (time: string) => {
  const date = time.split('T')[0];
  if (date) {
    console.log('func/var: ChatWindowComponent -> timeFormater -> date', date);
  }
  const splitTime = time.split('T')[1];
  return splitTime.slice(0, 5);
};

export const scrollToBottom = (messageItems: QueryList<ElementRef>) => {
  const lastMessageItem = messageItems.last;
  if (lastMessageItem) {
    lastMessageItem.nativeElement.scrollIntoView();
  }
};
