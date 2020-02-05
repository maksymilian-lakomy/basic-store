import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreItem } from '../models/StoreItem';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    storeDatabasePath: string = 'https://my-json-server.typicode.com/maksymilian-lakomy/demo/store/';

    constructor(private http: HttpClient) { }

    getStoreItems(): Observable<StoreItem[]> {
        const store = this.http.get<StoreItem[]>(this.storeDatabasePath);
        return store;
    }
}
