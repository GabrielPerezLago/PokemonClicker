import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'clicker-button',
  imports: [],
  templateUrl: './clicker-button.html',
  styleUrl: './clicker-button.css',
})
export class ClickerButton {
  

  @ViewChild('btn') btn!: ElementRef;


  onPress() {
    gsap.killTweensOf(this.btn.nativeElement)

    gsap.to( this.btn.nativeElement ,{
      scale: 0.8,
      duration: 0.9,
      ease: 'elastic.out(1, 0.1)'
    })
  }


  onMouseUp() {
    gsap.killTweensOf(this.btn.nativeElement)

    gsap.to( this.btn.nativeElement ,{
      scale: 1,
      duration: 0.9,
      ease: 'power2.out'
    })
  }
}
