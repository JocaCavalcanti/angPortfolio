import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template:`<router-outlet></router-outlet>`,
})
export class AppComponent {
}
