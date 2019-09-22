import { NgModule } from '@angular/core';
import { AutocompleteLibComponent } from './autocomplete-lib.component';
import { HighlightPipe } from './autocomplete/highlight.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    AutocompleteLibComponent,
    AutocompleteComponent,
    HighlightPipe,
  ],
  exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
})
export class AutocompleteLibModule {}
