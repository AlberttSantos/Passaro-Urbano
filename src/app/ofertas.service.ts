import { Oferta } from './shared/ofertas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        //requisição HTTP
        return this.http.get<Oferta[]>(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta) => resposta)
    }

    public getOfertasPorCategria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta>(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta) => { return resposta[0] })
    }
}