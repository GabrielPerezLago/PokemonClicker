import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Juego } from './components/juego/juego';
import { NombreInput } from './components/nombre-input/nombre-input';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'nombre', component: NombreInput },
    { path: 'juego', component: Juego }
];


