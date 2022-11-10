import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  StreamAutocompleteTextareaModule,
  StreamChatModule,
} from 'stream-chat-angular';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
  ],
  exports: [ChatComponent],
})
export class MyChatModule {}
