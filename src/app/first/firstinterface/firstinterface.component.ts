import { Component, OnInit } from '@angular/core';
import Area from '../_useCase'
@Component({
  selector: 'app-firstinterface',
  templateUrl: './firstinterface.component.html',
  styleUrls: ['./firstinterface.component.scss']
})
export class FirstinterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(new Area('a'));
  }

}
