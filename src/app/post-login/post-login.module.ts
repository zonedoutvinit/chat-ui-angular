import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './main-window/main-window.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatDetailWindowComponent } from './chat-detail-window/chat-detail-window.component';
import { ChatMediaWindowComponent } from './chat-media-window/chat-media-window.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    MainWindowComponent,
    ChatWindowComponent,
    ChatDetailWindowComponent,
    ChatMediaWindowComponent,
  ],
  imports: [CommonModule, CommonComponentsModule],
  exports: [MainWindowComponent],
})
export class PostLoginModule {}
