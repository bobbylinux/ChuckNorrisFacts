import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CategoriesService } from './services/categories.service';

import { JokesComponent } from './jokes/jokes.component';
import { JokesService } from './services/jokes.service';
import { JokeComponent } from './joke/joke.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'jokes', component: HomeComponent
      },
      {
        path: 'joke/:id', component: JokeComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CategoriesService,
    JokesService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
