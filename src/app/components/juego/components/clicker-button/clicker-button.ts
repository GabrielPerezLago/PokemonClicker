import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { Game } from '../../../../global/Game';

@Component({
  selector: 'clicker-button',
  imports: [],
  templateUrl: './clicker-button.html',
  styleUrl: './clicker-button.css',
})
export class ClickerButton {
  
  constructor(private game: Game) {}
  
  onClick() {
    this.game.addClick()
  }

  @ViewChild('btn') btn!: ElementRef;


  onPress() {
    gsap.killTweensOf(this.btn.nativeElement)

    gsap.to( this.btn.nativeElement ,{
      scale: 0.7,
      duration: 0.5,
      ease: 'power2.out'
    })
  }
  onMouseUp() {
    gsap.killTweensOf(this.btn.nativeElement)

    gsap.to( this.btn.nativeElement ,{
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
  }
}
