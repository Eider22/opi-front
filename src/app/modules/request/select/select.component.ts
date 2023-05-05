import { Component, EventEmitter, Output , Input} from "@angular/core";
import { optionsSelectModel } from "src/app/models/models";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent {
  constructor() {}
  selectedValue: number = 4;
  @Output() selectionChange = new EventEmitter<number>();
  @Input() options: optionsSelectModel[] = [];

  selectionHandle(value: number) {
    this.selectedValue = value;
    this.selectionChange.emit(value);
  }
}
