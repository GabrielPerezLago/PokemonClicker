import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Juego } from './components/juego/juego';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'juego', component: Juego }
];


