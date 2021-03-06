import{ NgModule } from '@angular/core';
import{ MatButtonModule } from '@angular/material/button';
import{ MatCardModule } from '@angular/material/card';
import{ MatInputModule } from '@angular/material/input';
import{ MatFormFieldModule } from '@angular/material/form-field';
import{ MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
