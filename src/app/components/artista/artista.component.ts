import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles:[`
  .rojito {
    color:red;
  }
  `]
  //styleUrls: ['./artista.component.sass']
})
export class ArtistaComponent implements OnInit {

  artista: any= {};
  topTracks: any = [];
  loading: boolean;

  constructor(private router:ActivatedRoute,
              private spotify: SpotifyService          
    ) {
    this.loading=true;
    this.router.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id)
    })
   }

   getArtista(id: string){
     this.spotify.getArtista(id).subscribe(response => {
      this.artista=response;
      this.loading=false; 
      console.log(response);
     })
   }

   getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe(response => {
    this.topTracks=response;
    //  this.loading=false; 
     console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
