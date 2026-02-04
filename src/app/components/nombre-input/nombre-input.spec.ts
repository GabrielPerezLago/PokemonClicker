import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreInput } from './nombre-input';

describe('NombreInput', () => {
  let component: NombreInput;
  let fixture: ComponentFixture<NombreInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
