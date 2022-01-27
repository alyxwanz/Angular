import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './components/validator/email-validator.directive';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, EmailValidatorDirective, DurationPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
