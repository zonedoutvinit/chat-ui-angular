import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './main-window/main-window.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [MainWindowComponent, ChatWindowComponent],
  imports: [CommonModule],
  exports: [MainWindowComponent],
})
export class PostLoginModule {}
