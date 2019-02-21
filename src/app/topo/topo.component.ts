import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model'
import { Observable, Subject, of } from 'rxjs'
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()
  public ofertas2: Oferta[]

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000), //Executa a requisição apos 1 segundo
        distinctUntilChanged(), //Se o termo for diferente do anterior executa outra requisição
        switchMap((termoBuscado: string) => {
          console.log("Requisição http")

          if (termoBuscado.trim() === '') {
            return of<Oferta[]>([])
          }

          return this.ofertasService.pesquisaOfertas(termoBuscado)
        }))
    catchError((erro) => {
      console.log(erro)
      return of<Oferta[]>([])
    })

    this.ofertas.subscribe((oferta: Oferta[]) => this.ofertas2 = oferta)
  }

  public pesquisa(termoDaPesquisa: string): void {
    console.log("keyup", termoDaPesquisa)
    this.subjectPesquisa.next(termoDaPesquisa)
  }
}
