import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <html lang="eng">
      <body>
        <div class="main">
          <div class="gradient"></div>
        </div>
        <main class="app">
          <!-- <NavBar /> -->
          <router-outlet />
        </main>
      </body>
    </html>
  `, 
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
