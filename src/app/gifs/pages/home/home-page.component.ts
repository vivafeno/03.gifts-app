import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'gifs-home-page', 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: false, 
})
export class HomePageComponent {

  constructor(
    private gifsService: GifsService,
  ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifsList;
  }

  


 }
