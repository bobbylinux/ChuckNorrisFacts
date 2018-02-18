import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: any;

  constructor(private route: ActivatedRoute, private service: JokesService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.service.get(params.get("id"))
          .subscribe(joke => {
            this.joke = joke.value;
          });
      });
  }
}
