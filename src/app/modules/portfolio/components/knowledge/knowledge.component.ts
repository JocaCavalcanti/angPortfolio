import { Component, signal } from '@angular/core';

//interface
import { Iknowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento de nodejs',
    },
  ]);
}
