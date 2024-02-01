import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  template: `
    <nav class="flex-between w-[70rem] mb-16 pt-3">
      <img
        src="/assets/images/logo-robot.svg"
        alt="Prompy Logo"
        width="45"
        height="45"
        class="object-contain"
      />
      <div class="sm:flex hidden">
        <button type="button" class="blue_btn">Sign In</button>
      </div>
    </nav>
  `,
  styleUrl: './nav-bar.component.scss',

})
export class NavBarComponent {}
