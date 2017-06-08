/**
 * Created by jh0n4 on 8/6/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductoComponent } from './components/shared/producto/producto.component';
import { ProductosComponent } from './components/shared/productos/productos.component';
import { AboutComponent } from './components/shared/about/about.component';
import { BuscarComponent } from './components/shared/buscar/buscar.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '***', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
