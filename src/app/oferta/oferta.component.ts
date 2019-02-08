import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' //Rota ativa
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/ofertas.model'
import { interval } from 'rxjs';
// import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  public oferta: Oferta

  ngOnInit() {
    // Snapshot
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])  //Captura o parametro id da rota ativa no momento
      .then((ofertaRecebida: Oferta) => { this.oferta = ofertaRecebida })

    // Subscriber
    // this.route.params.subscribe(
    //   (parametro: any) => { console.log(parametro.id) },
    //   (erro: any) => { console.log(erro) },
    //   () => { console.log("Sucesso") }
    // )

    let tempo = interval(2000)
    
    tempo.subscribe((intervalo: number) => console.log(intervalo))

  }

}
