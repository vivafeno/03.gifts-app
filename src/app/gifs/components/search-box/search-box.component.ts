import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    standalone: false,
    template: `
    <h5>Buscar:</h5>
    <input type="text"
        placeholder="Buscar GIFs..."
        class="form-control"
        (keyup.enter)="searchTag()"
        #txtTagInput
        >
    `
})

export class SearchBoxComponent  {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;


    constructor(
        private gifsService: GifsService,
    ) { }

    searchTag() {
        // Obtiene el valor del input
        const newTag = this.tagInput.nativeElement.value;
        // Llama al método del servicio
        this.gifsService.searchTag(newTag);
        // Limpiar el input
        this.tagInput.nativeElement.value = '';        
    }

   
}