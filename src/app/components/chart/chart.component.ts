import { Component, OnDestroy, Input } from '@angular/core';
import { ChartData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnDestroy{

   // interval;

   @Input() results: ChartData[];

   // options
   showXAxis = true;
   showYAxis = true;
   gradient = true;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Votos';
   showYAxisLabel = true;
   yAxisLabel = 'Juego';

   colorScheme = 'nightLights';

   onSelect(event) {
     console.log(event);
   }

   constructor(){
     // this.interval = setInterval(() => {
     //   console.log('tic-tac');
     //
     //
     //   let newResults:any[] = [...this.results];
     //   for(let i in newResults){
     //     newResults[i].value = Math.round(Math.random() * 100)
     //   }
     //   this.results = [...newResults];
     // }, 1500);
   }

   ngOnDestroy(){
     // clearInterval(this.interval);
   }

}
