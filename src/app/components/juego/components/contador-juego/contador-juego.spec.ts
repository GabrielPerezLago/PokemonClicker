import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorJuego } from './contador-juego';

describe('ContadorJuego', () => {
  let component: ContadorJuego;
  let fixture: ComponentFixture<ContadorJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorJuego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorJuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
