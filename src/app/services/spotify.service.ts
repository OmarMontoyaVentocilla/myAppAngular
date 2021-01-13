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
      'Authorization': 'Bearer BQDWytG01fWCCBav8hB0OH08FIIev6HbO5DQiiKLURUNHEeTHhx3h1nXM4PDaS0zN393GxbzTIKCcBIdukrkbFeNJi0hWsMvuLJ2KjKq_CUyYMP6ToxEw9O9tSv5s3XFzwq9H6LPvCzFFEXt00OBUt-Umhnxo4Ov_Q0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

 getArtista(termino:string){
    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQDWytG01fWCCBav8hB0OH08FIIev6HbO5DQiiKLURUNHEeTHhx3h1nXM4PDaS0zN393GxbzTIKCcBIdukrkbFeNJi0hWsMvuLJ2KjKq_CUyYMP6ToxEw9O9tSv5s3XFzwq9H6LPvCzFFEXt00OBUt-Umhnxo4Ov_Q0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers }); 
 }

}
