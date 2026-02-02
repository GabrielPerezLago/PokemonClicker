import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerButton } from './clicker-button';

describe('ClickerButton', () => {
  let component: ClickerButton;
  let fixture: ComponentFixture<ClickerButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickerButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickerButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
