import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("spotify service listo");
  }

  getQuery(query:string){
   
    const url=`https://api.spotify.com/v1/${query}`;

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQB5y48I7vrph1_ESzMVX7tPPrM9eF1Nsm0oGo4_7odQyKEIMbYbHfnLqBmkavfWMSkfBmyT8H18RgRz9UJCCXo2mfLfEtVX-IyVvlAZGAwSoALh1w4mJRU51bR7aApoIrIJKbMImtrLx8vzuoG_ScKc3-qbdGIjhW4'
    });

    return this.http.get(url,{headers});
  }

  getNewRelease(){
    return this.getQuery('browse/new-releases').pipe(
      map(data => {
        return data['albums'].items
      })
    );
  }

 getArtistas(termino:string){
   return this.getQuery(`search?q=${termino}&type=artist`).pipe(
    map(data => {
      return data['artists'].items  
    })
  );                    
 }

 getArtista(id:string){
  return this.getQuery(`artists/${id}`).pipe(
   map(data => {
     return data;  
   })
 );                    
}

getTopTracks(id:string){
  return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
    map(data => {
      return data['tracks'];  
    })
  );  
}

}
