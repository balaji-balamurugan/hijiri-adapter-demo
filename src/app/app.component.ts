import { HijiriDataPickerComponent } from './hijiri-data-picker/hijiri-data-picker.component';
import { NormalDatePickerComponent } from './normal-date-picker/normal-date-picker.component';
import { Component } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  DateLocaleKeys,
  MOMENT_HIJRI_DATE_FORMATS,
  NgxAngularMaterialHijriAdapterModule,
  NgxAngularMaterialHijriAdapterService,
} from 'ngx-angular-material-hijri-adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NormalDatePickerComponent, HijiriDataPickerComponent],
})
export class AppComponent {}
