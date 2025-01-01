import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Onclick } from '../../../gifs/interfaces/gifs.intefaces';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  constructor() {}

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url is required');
  }

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  onLoad() {    
      this.hasLoaded = true;  
  }
}
