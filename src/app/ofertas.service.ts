import { Oferta } from './shared/ofertas.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        //requisição HTTP
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta) => resposta)
    }

    public getOfertasPorCategria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta) => { return resposta[0] })
    }

    public getComoUsarOfertasPorId(id: number): Promise<string> {
        return this.http.get<string>(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0].descricao)
    }

    public getOndeFicaOfertasPorId(id: number) {
        return this.http.get<string>(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0].descricao)
    }

    public pesquisaOfertas(termoBuscado: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termoBuscado}`)
            .pipe(map((resposta: any) => resposta), retry(10))
    }
}