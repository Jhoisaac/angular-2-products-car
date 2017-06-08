import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {ProductoService} from './services/app.service';

//Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/shared/productos/productos.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ProductoComponent } from './components/shared/producto/producto.component';
import { BuscarComponent } from './components/shared/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosComponent,
    HomeComponent,
    AboutComponent,
    ProductoComponent,
    BuscarComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
