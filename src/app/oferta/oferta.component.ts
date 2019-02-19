import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router' //Rota ativa
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/ofertas.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  public oferta: Oferta

  ngOnInit() {
    // Snapshot
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])  //Captura o parametro id da rota ativa no momento
      .then((ofertaRecebida: Oferta) => { this.oferta = ofertaRecebida })
  }

  ngOnDestroy() {    
  }

}
