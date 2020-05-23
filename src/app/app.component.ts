import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TicTacToe PWA Game';

  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'keywords', content: 'HTML, CSS, JavaScript, Angular, TicTacToe, PWA' });
  }

}
