import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import gsap from 'gsap'
import { Game } from '../../global/Game'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './appbutton.html',
  styleUrl: './appbutton.css',
})

/**
 * @param {*}
 * 
 * Esta clase es la clase que genera los botones de la app.
 * Crea un boton con un stilo predefinido y continete varios atributtons utilizables
 * 
 * 
 * 
 * 
 */

export class Appbutton {
  @Input() text: string = `Boton`
  private _color : string = `black`
  protected textColor : string = `white`
  @Input() margin: string = `1rem` 
  @Input() ruta: string = ``
  @Input() salir: string = `false`
  @Input() clearGlobal: string = `false`

  // Estos atributos sirven para mandar datos , con SendData digo que quiero mandar datos 
  // y con los atributos inferiores le digo lo que quiero mandar
  @Input() sendData: string = `false`
  @Input() nombre: string = `User`


  constructor(private router: Router, private game: Game) {}

  @Input() 
  set color(value: string) {
      this._color = value

      if( value == `white` || 
          value === `yellow` ||
          value === `orange` ||
          value === `blue`
        ){
        this.textColor = `black`
      }
  } 

  get color() {
    return this._color
  }

    
  
  // Amimaciones

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

  // Ruta 

  onClick() {
    if(this.strToBool(this.clearGlobal)){
        this.game.reset()
    }

    if (this.strToBool(this.salir)) {
      window.electronAPI.quitApp()
    } 

    if(this.ruta) {
      this.router.navigate([this.ruta])
    }
  }


  private strToBool(str: string): boolean {
    return str === `true`
  }

  private setData() {
    if(this.nombre !== ``) {
      this.game.innerNombre = this.nombre
    }
  }

}


