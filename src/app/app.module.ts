import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExibitionFormComponent } from './exibitions/exibition-form/exibition-form.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { NgbdOffcanvasComponent } from './exibitions/off-canvas/off-canvas.component';
import { NgbdOffcanvasContent } from './exibitions/canvas-content/canvas-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    ExibitionsComponent,
    ExibitionFormComponent,
    ExibitionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbdOffcanvasComponent,
    NgbdOffcanvasContent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
