import { Oferta } from './shared/ofertas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        //requisição HTTP
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta) =>  resposta )            
    }
}