import { Component,Input } from "@angular/core";
import { CommonModule } from '@angular/common';
@Component({
    selector:  'card-component',
    templateUrl: "./card.component.html",
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule],
    standalone: true,
})

export class CardComponent{
    @Input() imagenUrl: string = '';

}