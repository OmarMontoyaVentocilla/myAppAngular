import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("spotify service listo");
  }

  getNewRelease(){
   

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQCPmT2TihZdMgzMTDRZT8wfJCR2bdsUjVmPfEYrPBwditUZkb4XgBsxqV6xDeWGPOVDQbtCdMsxmjt40BA'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
 }

 getArtista(termino:string){
    
 }

}
