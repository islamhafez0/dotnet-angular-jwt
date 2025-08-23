import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
