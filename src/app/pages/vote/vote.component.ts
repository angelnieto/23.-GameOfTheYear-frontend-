import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EMPTY } from 'rxjs';
import { GameService } from '../../services/game.service';
import { Game , Response } from '../../interfaces/interfaces';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  games : Game[] = [];

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.service.getGames().subscribe( games => {
      this.games = games;

    },
    error => {
      Swal.fire({
        title: 'Lamentable',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  )}

  votar(idx:string){
    this.service.voteGame(idx).subscribe( (response:Response) => {

      if(response.ok){
        Swal.fire({
          title: 'Gracias',
          text: response.mensaje,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else {
        Swal.fire({
          title: 'Lamentable',
          text: response.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })

      }

    },
    (error: Response) => {
      Swal.fire({
        title: 'Lamentable',
        text: error.mensaje,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  );

  }

}
