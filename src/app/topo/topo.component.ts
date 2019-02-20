import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Observable<Oferta[]>

  ngOnInit() {
  }
 
  public pesquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa)    

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas),
    (erro: any) => console.log("Erro Ocorrido" + erro),
    () => console.log("Fluxo de enventos completo")    
    )}
}
