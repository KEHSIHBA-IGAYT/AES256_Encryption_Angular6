import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EncryptService } from './encrypt.service';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncryptComponent } from './components/encrypt/encrypt.component';


const routes: Routes = [
  { path: 'encrypt', component: EncryptComponent },
  { path: '', redirectTo: '/encrypt', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
    ],
  exports:[RouterModule],
  providers: [EncryptService],
  bootstrap: [AppComponent]
})

export class AppModule { }
