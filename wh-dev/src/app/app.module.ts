import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
