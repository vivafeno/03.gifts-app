import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})


export class GifsCardComponent implements OnInit {
  constructor(
    private gifsService: GifsService
  ) {}

  ngOnInit(): void {
      if ( !this.gif ) throw new Error('Gif is required');
      
  }

  @Input()
  public gif!: Gif;





}
