import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpFeedComponent } from './trump-feed.component';

describe('TrumpFeedComponent', () => {
  let component: TrumpFeedComponent;
  let fixture: ComponentFixture<TrumpFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumpFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
