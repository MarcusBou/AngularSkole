import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDictatorComponent } from './show-dictator.component';

describe('ShowDictatorComponent', () => {
  let component: ShowDictatorComponent;
  let fixture: ComponentFixture<ShowDictatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDictatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDictatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
