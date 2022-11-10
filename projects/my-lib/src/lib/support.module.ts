import { NgModule } from '@angular/core';
import { MyChatModule } from './chat.module';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@NgModule({
  declarations: [SupportTicketsComponent],
  imports: [MyChatModule],
  exports: [SupportTicketsComponent],
})
export class MySupportModule {}
