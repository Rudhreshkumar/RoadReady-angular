import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sellerintent',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule],
  templateUrl: './sellerintent.component.html',
  styleUrl: './sellerintent.component.css'
})
export class SellerintentComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
