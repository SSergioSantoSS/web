import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']

})
export class TareaComponent implements OnInit {


  fazer : string [] = ['Fazer a Comida', 'Lavar os Pratos', 'Lavar o Carro']
  progresso : string [] = [];
  finalizada: string [] = [];


  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex)
      }

    }
  }
