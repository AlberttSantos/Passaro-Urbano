import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //Injeção de serviço
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas2()

      .then((ofertasPromise: Oferta[]) => {         
         this.ofertas = ofertasPromise //tratamento do resolve
      })

      .catch((parametros: any) => {
        console.log(parametros.mensagemErro)  //tratamento do reject
      })      
    }
}

