import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmojiComponent } from './find-emoji.component';

describe('FindEmojiComponent', () => {
  let component: FindEmojiComponent;
  let fixture: ComponentFixture<FindEmojiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindEmojiComponent]
    });
    fixture = TestBed.createComponent(FindEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
