import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from 'src/app/movie-details.service';

@Component({
  selector: 'app-movie-entry',
  templateUrl: './movie-entry.component.html',
  styleUrls: ['./movie-entry.component.css']
})
export class MovieEntryComponent implements OnInit {

  moviesList:any;
  roohi:any;
  mumbai:any;
  krack:any;
  uppena:any;

  constructor(private movies: MovieDetailsService) { }

  ngOnInit(): void {
    this.moviesList = this.movies.getUser();
    this.roohi=Array.of(this.moviesList[0]);
    this.mumbai=Array.of(this.moviesList[1]);
    this.krack=Array.of(this.moviesList[2]);
    this.uppena=Array.of(this.moviesList[3]);
  }

}
