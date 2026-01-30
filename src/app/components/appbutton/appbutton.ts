import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import gsap from 'gsap'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './appbutton.html',
  styleUrl: './appbutton.css',
})

export class Appbutton {
  @Input() text: string = `Boton`

  private _color : string = `black`
  protected textColor : string = `white`

  @Input() margin: string = `1rem` 

  @Input() 
  set color(value: string) {
      this._color = value

      if(value == `white`){
        this.textColor = `black`
      }
  } 

  get color() {
    return this._color
  }

    
  
  

  @ViewChild('btn') btn!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.btn.nativeElement, {
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
  }

  hover() {
    gsap.killTweensOf(this.btn.nativeElement)
    gsap.to(this.btn.nativeElement, {
      scale: 1.1,
      opacity:1,
      duration: 4,
      ease: 'elastic.out(1, 0.1)',
    })
  }

  leave() {
    gsap.killTweensOf(this.btn.nativeElement)
    gsap.to(this.btn.nativeElement, {
      scale:1,
      duration: 2,
      ease: 'elastic.out(1, 0.1)'
    })
  }
}
