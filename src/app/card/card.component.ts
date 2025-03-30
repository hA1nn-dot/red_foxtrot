import { Component,Input } from "@angular/core";
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
@Component({
    selector:  'card-component',
    templateUrl: "./card.component.html",
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule],
    standalone: true,  // Importante para los componentes autónomos
})

export class CardComponent{
    @Input() imagenUrl: string = ''; // Definir el input para recibir la URL de la imagen

}