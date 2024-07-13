import { Component } from '@angular/core';
import { GbdoforgPageComponent } from "../gbdoforg-page/gbdoforg-page.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-gbdoforgend-page',
  standalone: true,
  imports: [GbdoforgPageComponent, FooterComponent],
  templateUrl: './gbdoforgend-page.component.html',
  styleUrl: './gbdoforgend-page.component.css'
})
export class GbdoforgendPageComponent {

}
