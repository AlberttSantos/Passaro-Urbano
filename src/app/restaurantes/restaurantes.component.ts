import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[]

  ngOnInit() {
    this.ofertasService.getOfertasPorCategria('restaurante')
      .then((ofertasRecebida: Oferta[]) => {
        this.ofertas = ofertasRecebida
      })
  }

}
