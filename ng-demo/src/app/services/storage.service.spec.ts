import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";

globalThis.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
} as unknown as Storage;

describe("StorageService", () => {
    let service: StorageService;
    const key = "testKey";

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StorageService],
        });
        service = TestBed.inject(StorageService);
        // service = new StorageService();
    });

    it("should be created", () => {
        expect(service).toBeInstanceOf(StorageService);
    });

    describe("getItem", () => {
        it("should get an item from local storage", () => {
            const value = "testValue";
            // globalThis.localStorage.getItem = jest.fn(() => {
            //     return `["${value}"]`;
            // });

            globalThis.Storage.prototype.getItem = jest
                .fn()
                .mockReturnValueOnce(`["${value}"]`);

            const result = service.getItems(key);
            expect(localStorage.getItem).toHaveBeenCalledWith(key);
            expect(result).toEqual([value]);
        });

        // it('should return null if the item does not exist', () => {
        //   const key = 'nonExistentKey';
        //   expect(service.getItem(key)).toBeNull();
        // });
    });

    //   describe('setItem', () => {
    //     it('should set an item in local storage', () => {
    //       const key = 'testKey';
    //       const value = 'testValue';
    //       service.setItem(key, value);
    //       expect(localStorage.getItem(key)).toBe(value);
    //     });
    //   });
});
