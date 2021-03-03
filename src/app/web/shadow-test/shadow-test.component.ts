import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-test',
  templateUrl: './shadow-test.component.html',
  styleUrls: ['./shadow-test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
