import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './main-window/main-window.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [MainWindowComponent, ChatWindowComponent, CustomCardComponent],
  imports: [CommonModule],
  exports: [MainWindowComponent],
})
export class PostLoginModule {}
