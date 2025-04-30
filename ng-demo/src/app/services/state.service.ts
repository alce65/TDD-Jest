import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { State } from "../types/state";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: "root",
})
export class StateService {
    private storage = inject(StorageService<string>);
    private _state = new BehaviorSubject<State>({
        token: null,
    });

    //constructor(public s: StorageService<string>) { }

    getState(): Observable<State> {
        const storageValue = this.storage.getItem("token") || null;

        const state: State = {
            token: storageValue.token,
        };
        this._state.next(state);
        return this._state.asObservable();
    }
}
