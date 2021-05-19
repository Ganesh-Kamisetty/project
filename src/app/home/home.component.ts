import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexDataLabels
} from "ng-apexcharts";
import { MovieDetailsService } from '../movie-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  hin = 0;
  tel = 0;

  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  chart: ApexChart;
  dataLabels:ApexDataLabels;

  constructor(private movies: MovieDetailsService) { }

  ngOnInit(): void {
    this.users = this.movies.getUser();
    console.log(this.users);

    this.users.forEach(element => {
      if (element.language == 'Hindi')
        this.hin += 1;
      else if (element.language == 'Telugu')
        this.tel += 1;
    });

    this.chartInit();
  }
  chartInit() {
    this.title = {
      text: 'Bar Chart'
    };

    this.series = [{
      data: [this.hin, this.tel]
    }];

    this.chart = {
      type: 'bar',
      width: 450
    }
    this.dataLabels={
      enabled:false
    }
  }

}
