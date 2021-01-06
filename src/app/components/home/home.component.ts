import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

   
  nuevasCanciones:any[]=[];

  constructor(private spotify: SpotifyService) { 
    this.spotify.getNewRelease().subscribe((data:any) => {
        console.log(data);
        this.nuevasCanciones=data.albums.items;
    });
  }

  ngOnInit(): void {
  }

}
