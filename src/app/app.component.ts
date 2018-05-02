import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  
  items$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.items$ = this.db.collection("items", ref => ref.orderBy("name")).valueChanges();
  }

}
