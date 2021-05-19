import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from 'src/app/movie-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  moviesList:any;
  roohi:any;
  mumbai:any;
  krack:any;
  uppena:any;
  isShow:boolean=false;
  isShow1:boolean=false;
  isShow2:boolean=false;
  isShow3:boolean=false;

  constructor(private movies: MovieDetailsService) { }

  ngOnInit(): void {
    this.moviesList = this.movies.getUser();
    this.roohi=Array.of(this.moviesList[0]);
    this.mumbai=Array.of(this.moviesList[1]);
    this.krack=Array.of(this.moviesList[2]);
    this.uppena=Array.of(this.moviesList[3]);
  }

  showDetails(){
    this.isShow=true;
    this.isShow1=this.isShow2=this.isShow3=false;
  }
  showDetails1(){
    this.isShow1=true;
  }
  showDetails2(){
    this.isShow2=true;
  }
  showDetails3(){
    this.isShow3=true;
  }
  addToCart(){
    Swal.fire("Added to cart","","success");
  }

}