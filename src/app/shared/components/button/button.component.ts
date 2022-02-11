import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() iconName!: IconProp;
  @Output() notify = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.notify.emit(`button was clicked`);
  }
}
