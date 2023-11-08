import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './main-window/main-window.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ChatDetailWindowComponent } from './chat-detail-window/chat-detail-window.component';
import { ChatMediaWindowComponent } from './chat-media-window/chat-media-window.component';

@NgModule({
  declarations: [MainWindowComponent, ChatWindowComponent, CustomCardComponent, ChatDetailWindowComponent, ChatMediaWindowComponent],
  imports: [CommonModule],
  exports: [MainWindowComponent],
})
export class PostLoginModule {}
