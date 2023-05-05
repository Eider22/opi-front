import { Component} from "@angular/core";

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
  selectedValue = "pizza-1";

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  onSelect() {
    console.log("Selected value: ", this.selectedValue);
  }  
}
