import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Gustavo';

  categorias = [
    {id:"1", nome:"categoria 1"},
    {id:"2", nome:"categoria 2"},
    {id:"3", nome:"categoria 3"},
    {id:"4", nome:"categoria 4"},
    {id:"5", nome:"categoria 5"},
    {id:"6", nome:"categoria 6"},
    {id:"7", nome:"categoria 7"},
    {id:"8", nome:"categoria 8"},
    {id:"9", nome:"categoria 9"},
    {id:"10", nome:"categoria 10"}
  ];
}
