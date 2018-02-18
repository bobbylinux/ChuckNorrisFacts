import { Component, OnInit } from '@angular/core';
import { JokesService } from './../services/jokes.service';
import { CategoriesService } from './../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  categories: any[];
  jokes: any[];
  filters: string[];

  constructor(private jokesService: JokesService, 
              private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.categoriesService.getAll()
      .subscribe(categories => this.categories = categories.value);
  }

  filterJokes() {
    this.jokesService.getAll(this.filters)
      .subscribe(jokes => {
        this.jokes = jokes.value;
      });
  }

  randomJoke() {
    let route = "/joke/";
    this.jokesService.get("random")
    .subscribe(joke => {
      route += joke.value.id;
      this.router.navigateByUrl(route);
    });
  }


  onChange(value) {
    this.filters = [];
    for (let index = 0; index < value.options.length; index++) {
      var optionElement = value.options[index];
      if (optionElement.selected == true) { 
        this.filters.push(optionElement.value);
      }
    }
  }

}
