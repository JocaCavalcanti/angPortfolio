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
        strong: 'Front-End',
        p: 'ZUP - Set 2020 - Present',
      },
      text: '<p>Desde 2019 venho estudaod e aprimorado minhas experiencias com programação</p>'
    },
    {
      summary: {
        strong: 'Front-End',
        p: 'ZUP - Set 2020 - Present',
      },
      text: '<p>Desde 2019 venho estudaod e aprimorado minhas experiencias com programação</p>'
    },
    {
      summary: {
        strong: 'Front-End',
        p: 'ZUP - Set 2020 - Present',
      },
      text: '<p>Desde 2019 venho estudaod e aprimorado minhas experiencias com programação</p>'
    },
    {
      summary: {
        strong: 'Front-End',
        p: 'ZUP - Set 2020 - Present',
      },
      text: '<p>Desde 2019 venho estudaod e aprimorado minhas experiencias com programação</p>'
    }
  ]);
}
