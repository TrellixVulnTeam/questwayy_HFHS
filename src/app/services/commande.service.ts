import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor( private http: HttpClient , private endpoint: EndpointService ) { }

  url = this.endpoint.url + '/commande/';

    


  passer(cmd:any){

    return this.http.post( this.url  + 'addcommande', cmd );

  }

  getMyCommande(id:any){

    return this.http.get(this.url + 'getmycommande/' + id);

  }

}
