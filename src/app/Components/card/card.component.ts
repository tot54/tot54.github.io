import { Component, Input } from '@angular/core';
import { Card } from '../../Models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card?: Card;
  @Input() isSelectable?: boolean;
  // カードを表示するpresenterです。
  constructor() { }
  
}
