import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { SharedComponent } from './shared/shared.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ReverseNamePipe } from './shared/reverse-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentFormComponent,
    StudentListComponent,
    SharedComponent,
    StudentComponent,
    HighlightDirective,
    ReverseNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
