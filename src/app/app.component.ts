;
  import { Component, OnInit} from '@angular/core';
  import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']

})
export class TareaComponent Implemnts OnInit {
  todo: string [] = ['Fazer a Comoda','Lavar os Pratos','Lavar o Carro'];
  progress: string[] = [];
  done: string[] = [];

  tarea = '';

  constructor( ){

  }
  ngOnInit() : void {

  }
  drop(event:CdkDragDrop<string[]>) {
    if (event.previousContainer===event.container) {
      moveItemInArray(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
    }
  }
  agregarTarea() {

    if(this.tarea=== '  ') {
      return;

    }
    this.todo.push(this.tarea);
    this.tarea ='';


  }

}
