import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  public comoUsar: string

  ngOnInit() {
    this.ofertasService.getComoUsarOfertasPorId(this.route.parent.snapshot.params['id']) // Snapshot id da rota pai
      .then((descricao: string) =>
        this.comoUsar = descricao
      )
  }

}
