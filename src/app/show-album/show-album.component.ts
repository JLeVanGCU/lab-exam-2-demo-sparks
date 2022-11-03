import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit
{

  images = [
    {
      "link": "https://images.unsplash.com/photo-1666616859445-7b2a7496bdfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe impedit, rerum voluptates id facilis dolores velit odit culpa excepturi reiciendis, inventore soluta vero enim laudantium. Iste voluptatibus ex nesciunt quos illum dolor officiis culpa voluptatem recusandae, ipsam sequi laborum suscipit dolores eos perferendis eaque neque incidunt enim soluta sint."
    },
    {
      "link": "https://images.unsplash.com/photo-1666627389585-e526833bea8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "text": "Quasi saepe impedit, rerum voluptates id facilis dolores velit odit culpa excepturi reiciendis, inventore soluta vero enim laudantium. Iste voluptatibus ex nesciunt quos illum dolor officiis culpa voluptatem recusandae, ipsam sequi laborum suscipit dolores eos perferendis eaque neque incidunt enim soluta sint."
    },
    {
      "link": "https://images.unsplash.com/photo-1666340826979-03f7b9c4e3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "text": "Rerum voluptates id facilis dolores velit odit culpa excepturi reiciendis, inventore soluta vero enim laudantium. Iste voluptatibus ex nesciunt quos illum dolor officiis culpa voluptatem recusandae, ipsam sequi laborum suscipit dolores eos perferendis eaque neque incidunt enim soluta sint."
    },
    {
      "link": "https://images.unsplash.com/photo-1666543257223-095dcc9a12fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "text": "Inventore soluta vero enim laudantium. Iste voluptatibus ex nesciunt quos illum dolor officiis culpa voluptatem recusandae, ipsam sequi laborum suscipit dolores eos perferendis eaque neque incidunt enim soluta sint."
    },
    {
      "link": "https://images.unsplash.com/photo-1666577837021-6ee2caf26fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "text": "Iste voluptatibus ex nesciunt quos illum dolor officiis culpa voluptatem recusandae, ipsam sequi laborum suscipit dolores eos perferendis eaque neque incidunt enim soluta sint."
    },


  ]
  constructor(private dataService: DataService) { }

  ngOnInit(): void
  {
    this.dataService.getMovies((films: any[]) =>
    {
      console.log(films);
      this.images = films.map(film =>
      {
        return {
          "link": `${film.image}`,
          "text": `${film.description}`
        }
      })
    });
  }
}
