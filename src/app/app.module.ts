import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';

@NgModule({
  declarations: [


    AppComponent,
    TareaComponent

  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
