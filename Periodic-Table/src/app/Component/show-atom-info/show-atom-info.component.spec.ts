import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAtomInfoComponent } from './show-atom-info.component';

describe('ShowAtomInfoComponent', () => {
  let component: ShowAtomInfoComponent;
  let fixture: ComponentFixture<ShowAtomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAtomInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAtomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
