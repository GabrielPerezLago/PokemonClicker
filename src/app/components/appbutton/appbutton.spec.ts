import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appbutton } from './appbutton';

describe('Appbutton', () => {
  let component: Appbutton;
  let fixture: ComponentFixture<Appbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
