import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../../../models/StoreItem';
import { StoreService } from '../../../services/store.service';

@Component({
    selector: 'app-store-display',
    templateUrl: './store-display.component.html',
    styleUrls: ['./store-display.component.sass']
})
export class StoreDisplayComponent implements OnInit {
    storeItems: StoreItem[];

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.storeService.getStoreItems().subscribe((storeItems) => {
            this.storeItems = storeItems;
        });
    }

}
