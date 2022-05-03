import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    // Since accounts in the service is an array, it is a reference type.
    // And we will get here the exact same array as is in the service file.
    this.accounts = this.accountsService.accounts;
  }
}
