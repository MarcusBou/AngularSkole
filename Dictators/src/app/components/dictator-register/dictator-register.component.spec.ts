import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictatorRegisterComponent } from './dictator-register.component';

describe('DictatorRegisterComponent', () => {
  let component: DictatorRegisterComponent;
  let fixture: ComponentFixture<DictatorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictatorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictatorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
