/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Injectable } from '@angular/core';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type item = {}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    getItems(key: string): item[] {

        const value = localStorage.getItem(key);
        if (value === null) {
            return []
        }
        return JSON.parse(value) ;
    }

}
