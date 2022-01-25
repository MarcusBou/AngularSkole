import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingTranslatorComponent } from './piping-translator.component';

describe('PipingTranslatorComponent', () => {
  let component: PipingTranslatorComponent;
  let fixture: ComponentFixture<PipingTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipingTranslatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipingTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
