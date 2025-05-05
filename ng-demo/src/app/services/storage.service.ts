import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StorageService<T> {
    getItems(key: string): T[] {
        const value = localStorage.getItem(key);
        if (value === null) {
            return [];
        }
        return JSON.parse(value!);
    }

    setItems(key: string, value: T[]): void {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }

    getItem(key: string): T {
        const value = localStorage.getItem(key);
        if (value === null) {
            return {} as T;
        }
        return JSON.parse(value);
    }

    setItem(key: string, value: T): void {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }
}
