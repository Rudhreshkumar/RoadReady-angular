import { Component } from '@angular/core';
import { TitlenavabarComponent } from "../titlenavabar/titlenavabar.component";
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-selectlocation',
  standalone: true,
  imports: [TitlenavabarComponent, NgIf, NgFor, SellersidebarComponent,NgClass,DialogModule,ButtonModule,InputTextModule,BrowserAnimationsModule],
  templateUrl: './selectlocation.component.html',
  styleUrl: './selectlocation.component.css'
})
export class SelectlocationComponent {
 
  showHomeAddress = false;
  showWorkAddress = false;
  showOtherAddress = false;

  toggleAddressBox(type: string) {
    switch (type) {
      case 'home':
        this.showHomeAddress = !this.showHomeAddress;
        this.showWorkAddress = false;
        this.showOtherAddress = false;
        break;
      case 'work':
        this.showWorkAddress = !this.showWorkAddress;
        this.showHomeAddress = false;
        this.showOtherAddress = false;
        break;
      case 'other':
        this.showOtherAddress = !this.showOtherAddress;
        this.showHomeAddress = false;
        this.showWorkAddress = false;
        break;
    }
  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
