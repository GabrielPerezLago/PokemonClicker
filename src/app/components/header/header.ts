import { Component } from '@angular/core';

@Component({
  selector: 'default-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly tittle = "Pokemon Clicker"
}
