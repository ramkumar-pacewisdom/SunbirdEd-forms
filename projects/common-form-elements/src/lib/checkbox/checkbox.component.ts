import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: any;
  @Input() code: any;
  @Input() value?: any;
  @Input() formControlRef?: FormControl;
  @Input() labelHtml?: any;
  @Output() clickedLink = new EventEmitter<{ event: MouseEvent, data: { url: string } }>();

  constructor() { }

  ngOnInit() {
    console.log('label', this.label);
    console.log('labelHtml', this.labelHtml);
  }

  handleLinkClick(event: MouseEvent) {
    if (event.target && event.target['hasAttribute'] && (event.target as HTMLAnchorElement).hasAttribute('href')) {
      const eventData = {
        event,
        data: { url: (event.target as HTMLAnchorElement).getAttribute('href') }
      };
      this.clickedLink.emit(eventData);
    }
  }

}