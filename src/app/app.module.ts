import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ExpandedViewComponent } from './expanded-view/expanded-view.component';
import { WatchedMovieComponent } from './watched-movie/watched-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterComponent,
    GridViewComponent,
    ExpandedViewComponent,
    WatchedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
