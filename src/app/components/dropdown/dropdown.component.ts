import {
  Component,
  Input,
  HostListener,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() dataEvent = new EventEmitter<string>();
  public selectedOption = 'All';
  public isOpen = false;
  constructor(private elementRef: ElementRef) {}
  onSelect(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.selectedToParent();
  }
  onToggle() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.isOpen = false;
    }
  }
  selectedToParent(): void {
    this.dataEvent.emit(this.selectedOption);
  }
}
