import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() tittle: string = "Pokemon Clicker"
  @Input() color: string = "red"
}
