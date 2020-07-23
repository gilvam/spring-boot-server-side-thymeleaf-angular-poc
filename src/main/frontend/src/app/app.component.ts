import { Component, OnInit } from '@angular/core';
import { BackService } from './back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular';

  constructor(private backService: BackService) {
  }

  ngOnInit(): void {
    this.backService.getJow().subscribe(response => {
      console.log(`response`, response);
    })

    this.backService.getJow2().subscribe(response => {
      console.log(`response`, response);
    })
  }

}
