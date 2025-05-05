import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { State } from "../types/state";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: "root",
})
export class StateService {
    private storage = inject(StorageService<State>);
    private _state = new BehaviorSubject<State>({
        token: null,
    });

    //constructor(public s: StorageService<string>) { }

    getState(): Observable<State> {
        const state = this.storage.getItem("state") as State;
        this._state.next(state);
        return this._state.asObservable();
    }
}
