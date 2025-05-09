import { TestBed } from "@angular/core/testing";
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { StorageService } from "./storage.service";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Item = {};

describe("StorageService", () => {
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
            const value = "testValue";

            globalThis.Storage.prototype.getItem = jest
                .fn()
                .mockReturnValueOnce(`["${value}"]`);

            const result = service.getItems(key);
            expect(localStorage.getItem).toHaveBeenCalledWith(key);
            expect(result).toEqual([value]);
        });

        it("should get an [] when there are content in local storage", () => {
            globalThis.Storage.prototype.getItem = jest.fn().mockReturnValueOnce(null);
            const result = service.getItems(key);
            expect(result).toEqual([]);
        });
    });

      describe('setItem', () => {
        it('should set an item in local storage', () => {
          globalThis.Storage.prototype.setItem = jest.fn()
          const key = 'testKey';
          const value = ['testValue'];
        
          service.setItems(key, value);
          expect(localStorage.setItem).toHaveBeenCalledWith(
            `${key}`,
            JSON.stringify(value)
          );
        });
      });
});
