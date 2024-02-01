import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <html lang="eng">
      <body>
        <div class="main">
          <div class="gradient"></div>
        </div>
        <main class="app">
          <app-nav-bar />
          <router-outlet />
        </main>
      </body>
    </html>
  `, 
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
