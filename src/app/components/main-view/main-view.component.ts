import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { BoardComponent } from '../board/board.component';



@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [NavbarComponent, BoardComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {}
