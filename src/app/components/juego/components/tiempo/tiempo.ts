import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'tiempo',
  imports: [],
  templateUrl: './tiempo.html',
  styleUrl: './tiempo.css',
})
export class Tiempo {
  @Output() fin = new EventEmitter<void>()
  private segundos = signal(10) 
  tiempo = signal(`00:10`)

  ngOnInit() {
    this.initTiempo()
  }

  initTiempo() {
    const interval = setInterval(() => {
      this.segundos.update(sec => sec -1)
      this.tiempo.set(this.formatTime(this.segundos()))

      if (this.segundos() <= 0) {
        clearInterval(interval)

        this.fin.emit()
      }
    }, 1000)
  }


  private formatTime(segundos: any): string {
    const minutos = Math.floor(segundos / 60)
    const seg = segundos % 60

    const min = minutos.toString().padStart(2, `0`)
    const sec = seg.toString().padStart(2, `0`)

    return `${min}:${sec}`
  }
}
