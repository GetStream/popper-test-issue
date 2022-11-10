import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChatComponent, MyLibModule } from 'my-lib';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MyLibModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display lib-chat component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.query(By.directive(ChatComponent))
      ?.componentInstance as ChatComponent;

    expect(component).toBeDefined();
  });
});
