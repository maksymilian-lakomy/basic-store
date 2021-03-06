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
    selectedStoreItem: StoreItem | null;

    settings: string[];

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        this.storeService.getStoreItems().subscribe((storeItems) => {
            this.storeItems = storeItems;
        });
        this.storeService.getSettings().subscribe((setting) => {

        });
    }

    onMouseEnter(storeItem: StoreItem): void {
        this.selectedStoreItem = storeItem;
    }

    onMouseLeave(): void {
        this.selectedStoreItem = null;
    }

}
