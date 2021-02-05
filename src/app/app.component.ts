import { Component } from '@angular/core';
import * as fa from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankroll-app';
  faCoffee = fa.faCoffee;
  faBalance = fa.faBalanceScale
  faWallet = fa.faWallet
  faCommentsDollar = fa.faCommentsDollar
  faHandUSD = fa.faHandHoldingUsd
  faPiggy = fa.faPiggyBank
}
