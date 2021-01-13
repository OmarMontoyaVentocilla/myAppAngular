import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  artistas: any[]=[]; 
  
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.spotify.getArtista(termino).subscribe((data:any) => {
    this.artistas=data.artists.items;
    })
  }

}
