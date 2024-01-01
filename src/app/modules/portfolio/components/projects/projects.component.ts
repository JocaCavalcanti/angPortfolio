import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';

//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/AtvM2.png',
      alt: '',
      title: 'Clinica AtivaMente',
      width: '100px',
      height: '51px',
      description: '<p>Site desenvolvido para um psicólgo, para melhor administração de clientes e consultas</p>',
      links: [
        {
          name: 'Conheça a clinica',
          href: 'https://clinica-ativamente.vercel.app',
        },
      ],
    },
    
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
