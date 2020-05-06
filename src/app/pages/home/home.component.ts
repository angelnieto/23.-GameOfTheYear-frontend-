import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ChartData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: ChartData[] = [];

  constructor(private service:GameService) { }

  ngOnInit(): void {
    this.service.getVotes().subscribe( (games:ChartData[]) => {
      this.games = games;
    })
  }

}
