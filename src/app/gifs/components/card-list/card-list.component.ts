import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,  
  styleUrl: './card-list.component.css',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
@Input()
public gifs: Gif[] = [];

 }
