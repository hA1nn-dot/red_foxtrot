import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Importante para los componentes autónomos
  imports: [RouterOutlet,CardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'red_foxtrot::Haim';
  imagenUrl: string = '/assets/foxes.jpg'; // URL de la imagen
}
