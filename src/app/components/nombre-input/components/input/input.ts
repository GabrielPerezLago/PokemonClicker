import { Component } from '@angular/core'
import {FormsModule} from '@angular/forms'
import { Game } from '../../../../global/Game'
@Component({
  selector: 'input-app',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputApp {

  value: string = ``

  constructor(public game: Game){}

}
