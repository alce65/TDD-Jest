import { TestBed } from "@angular/core/testing";
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { StorageService } from "./storage.service";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Item = {};

describe("StorageService for Data Array", () => {
    let service: StorageService<Item[]>;
    const key = "testKey";

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: StorageService,
                    useClass: StorageService<Item[]>,
                    //useValue: new StorageService<Item>(),
                },
            ],
        });
        service = TestBed.inject(StorageService);
        // service = new StorageService();
    });

    it("should be created", () => {
        expect(service).toBeInstanceOf(StorageService);
    });

    describe("getItems", () => {
        it("should get an item from local storage when there are content in local storage", () => {
            const value = "testValue";

            jest.spyOn(
                globalThis.Storage.prototype,
                "getItem"
            ).mockReturnValueOnce(`["${value}"]`);

            const result = service.getItems(key);
            expect(localStorage.getItem).toHaveBeenCalledWith(key);
            expect(result).toEqual([value]);
        });

        it("should get an [] when there are NOT content in local storage", () => {
            jest.spyOn(
                globalThis.Storage.prototype,
                "getItem"
            ).mockReturnValueOnce(null);
            const result = service.getItems(key);
            expect(result).toEqual([]);
        });
    });

    describe("setItems", () => {
        it("should set an item[] in local storage", () => {
            jest.spyOn(globalThis.Storage.prototype, "setItem");
            const key = "testKey";
            const value = [{} as Item[]];
            service.setItems(key, value);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});


describe("StorageService for data Object", () => {
    let service: StorageService<Item>;
    const key = "testKey";

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: StorageService,
                    useClass: StorageService<Item>,
                    //useValue: new StorageService<Item>(),
                },
            ],
        });
        service = TestBed.inject(StorageService);
        // service = new StorageService();
    });

    it("should be created", () => {
        expect(service).toBeInstanceOf(StorageService);
    });

    describe("getItem", () => {
        it("should get an item from local storage when there are content in local storage", () => {
            const value = {
                value: "testValue",
            };

            jest.spyOn(
                globalThis.Storage.prototype,
                "getItem"
            ).mockReturnValueOnce(JSON.stringify(value));

            const result = service.getItem(key);
            expect(localStorage.getItem).toHaveBeenCalledWith(key);
            expect(result).toEqual(value);
        });

        it("should get an {} when there are NOT content in local storage", () => {
            jest.spyOn(
                globalThis.Storage.prototype,
                "getItem"
            ).mockReturnValueOnce(null);
            const result = service.getItem(key);
            expect(result).toEqual({});
        });
    });

    describe("setItem", () => {
        it("should set an item in local storage", () => {
            jest.spyOn(globalThis.Storage.prototype, "setItem");
            const key = "testKey";
            const value = {
                value: "testValue",
            };
            service.setItem(key, value);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});

