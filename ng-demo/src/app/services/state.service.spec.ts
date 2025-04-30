import { TestBed } from "@angular/core/testing";
import { StateService } from "./state.service";
import { Observable } from "rxjs";
import { State } from "../types/state";
import { StorageService } from "./storage.service";

describe("StateService", () => {
    let service: StateService;
    let storageService: StorageService<State>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StateService);
        storageService = TestBed.inject(StorageService);

    });

    it("should be created", () => {
        expect(service).toBeInstanceOf(StateService);
    });

    describe("getState", () => {
        let state: Observable<State>;
        const TOKEN = "token_value";

        it("should return the initial state as Observable", () => {
            // Act
            state = service.getState();
            expect(state).toBeInstanceOf(Observable);
        });
        it("should return an object with a token property with null value", (done) => {
            // Arrange
            jest.spyOn(storageService, "getItem").mockReturnValue({
                token: null,
            } as State);
            // Act
            state = service.getState();
            state.subscribe((value) => {
                expect(value).toHaveProperty("token");
                expect(value.token).toBeNull();
                done();
            });
        });

        it("should return an object with a token property with the value provides by Storage Service", (done) => {
            // Arrange
            jest.spyOn(storageService, "getItem").mockReturnValue({
                token: TOKEN,
            } as State);
            // Act
            state = service.getState();
            expect(storageService.getItem).toHaveBeenCalled();
            state.subscribe((value) => {
                expect(value).toHaveProperty("token");
                expect(value.token).toBe(TOKEN);
                done();
            });
        });
    });
});
