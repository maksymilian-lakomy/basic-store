import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from '../../../models/StoreItem';

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['./store-item.component.sass']
})
export class StoreItemComponent implements OnInit {

    @Input() storeItem: StoreItem;

    constructor() { }

    ngOnInit() {
    }

}
