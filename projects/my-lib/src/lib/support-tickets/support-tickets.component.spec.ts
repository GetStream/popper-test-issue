import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MyChatModule } from '../chat.module';
import { ChatComponent } from '../chat/chat.component';

import { SupportTicketsComponent } from './support-tickets.component';

describe('SupportTicketsComponent', () => {
  let component: SupportTicketsComponent;
  let fixture: ComponentFixture<SupportTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportTicketsComponent],
      imports: [MyChatModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display lib-chat component', () => {
    const component = fixture.debugElement.query(By.directive(ChatComponent))
      ?.componentInstance as ChatComponent;

    expect(component).toBeDefined();
  });
});
