import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
