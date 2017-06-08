import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/app.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
  }

}
