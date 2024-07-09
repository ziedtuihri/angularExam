import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-errors',
  template: `
    <div *ngIf="control && control.touched && control.invalid" class="text-danger">
      <small *ngIf="control.errors?.['required']">This field is required.</small>
      <small *ngIf="control.errors?.['minlength']">Minimum length is {{control.errors?.['minlength'].requiredLength}} characters.</small>
      <small *ngIf="control.errors?.['pattern']">Invalid format.</small>
    </div>
  `,
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  @Input() control!: AbstractControl;
}
