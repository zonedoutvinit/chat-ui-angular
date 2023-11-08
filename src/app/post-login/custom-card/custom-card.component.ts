import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
})
export class CustomCardComponent implements OnInit {
  @Input() height = 1;
  @Input() onClose!: (args: any) => void;
  constructor() {}

  ngOnInit(): void {}

  closeCard = () => this.onClose && this.onClose(false);
}
