import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // import it for routing 
import { FormsModule } from '@angular/forms'; // this is a module used for ofrms components
import UserService from './UserService';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { AboutComponent } from './MyComponent/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
