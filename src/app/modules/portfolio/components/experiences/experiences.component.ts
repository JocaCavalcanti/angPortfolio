import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interfade';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Porto Digital - Recife',
        p: '2019-2021',
      },
      text: '<p>Fiz colégio técnico em análise e desenvolvimento de sistemas no Porto Digital, onde aprendi vários conceitos de programação e design.</p>'
    },
    {
      summary: {
        strong: 'Convergir',
        p: 'Janeiro de 2022',
      },
      text: '<p>Tive uma experiência em uma empresa de contabilidade, sendo assistente administrativo.</p>'
    },
    {
      summary: {
        strong: 'Unicap - Sistemas para internet',
        p: '2022 - 2024',
      },
      text: '<p>Consegui uma bolsa de 100% no curso de Sistemas para Internet da UNICAP, onde me encontro no 4º período, tendo passado por várias experiências e projetos.</p>'
    },
    {
      summary: {
        strong: 'Demo Day',
        p: 'Final de 2022',
      },
      text: '<p>Eu e minha equipe desenvolvemos um escopo de um app gamificado, cujo objetivo é ajudar as pessoas a praticarem atividades físicas de forma divertida e gamificada. Ficamos em 4º lugar dentre mais de 50 equipes participantes, provenientes de diversas faculdades da região.</p>'
    }
  ]);
}
