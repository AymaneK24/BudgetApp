import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-organismes-page',
  standalone: true,
  imports: [RouterModule,FooterComponent],
  templateUrl: './organismes-page.component.html',
  styleUrl: './organismes-page.component.css'
})
export class OrganismesPageComponent {

    organismes: any[] = []; // Tableau pour stocker les organismes
  
    constructor() {
      // Exemple : Initialisation avec quelques organismes
      this.organismes = [
        {nom: 'Tan-Tan' },
        { nom: 'Loutiya' },
        { nom: 'Organisme 3' }
      ];
    }
  
    ajouterOrganisme() {
      // Logique pour ajouter un nouvel organisme
      this.organismes.push({ nom: 'Nouvel Organisme' });
    }
  
    supprimerOrganisme(organisme: any) {
      // Logique pour supprimer un organisme
      this.organismes = this.organismes.filter(o => o !== organisme);
    }

}
