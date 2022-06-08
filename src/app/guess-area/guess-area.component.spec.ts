import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessAreaComponent } from './guess-area.component';

describe('GuessAreaComponent', () => {
  let component: GuessAreaComponent;
  let fixture: ComponentFixture<GuessAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
