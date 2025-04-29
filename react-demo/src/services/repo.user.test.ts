import { URL } from "../config";
import { RepoUsers } from "./repo.user";
import axios from "axios";
import { HttpError } from "../types/http.error";
import { User, UserDTO } from "../types/user";

const url = URL;

// Mock del módulo axios
jest.mock("axios");

const mockData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

const mockJson = jest.fn().mockResolvedValue(mockData);

globalThis.fetch = jest.fn().mockResolvedValue({
    json: mockJson,
    ok: true,
} as unknown as Response);

describe("instance of class Repo", () => {
    const repo = new RepoUsers();
    describe("getWithAxios", () => {
        test("should fetch users from API", async () => {
            // Arrange
            (axios.get as jest.Mock).mockResolvedValueOnce({
                data: mockData,
            });
            const users = await repo.getWithAxios();
            expect(axios.get).toHaveBeenCalledWith(url);
            expect(users).toEqual(mockData);
        });
    });
    describe("getUsers", () => {
        test("should fetch users from API", async () => {
            // Arrange
            // Act
            const result = await repo.getUsers();
            // Assert
            expect(fetch).toHaveBeenCalledWith(url);
            expect(mockJson).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockData);
        });
        test("should throw an error when fetch return an invalid code", async () => {
            const httpError = new HttpError(
                "Network response was not ok " + "Internal Server Error",
                500,
                "Internal Server Error"
            );

            // Arrange
            (globalThis.fetch as jest.Mock).mockResolvedValue({
                ok: false,
                status: 500,
                statusText: "Internal Server Error",
            } as unknown as Response);
            // Act
            const result = repo.getUsers();
            expect(result).rejects.toThrow(httpError);
        });
        test("should throw an error when fetch falls", async () => {
            // Arrange

            const httpError = new HttpError(
                "Network response was not ok " + "Network error",
                0,
                "Network error"
            );

            (globalThis.fetch as jest.Mock).mockRejectedValueOnce(
                new Error("Network error")
            );
            // Act
            const result = repo.getUsers();
            expect(result).rejects.toThrow(httpError);
        });
    });

    describe("createUse", () => {
        const userData = { name: "John Smith" } as unknown as UserDTO;
        test("should create a user", async () => {
            // Arrange
            const newUser = { id: 3, ...userData } as unknown as User;

            (fetch as jest.Mock).mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValueOnce(newUser),
            } as unknown as Response);

            // Act
            const result = await repo.createUser(userData);
            // Assert

            expect(fetch).toHaveBeenCalledWith(url, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            expect(result).toEqual(newUser);
        });
        test("should throw an error when fetch return an invalid code", async () => {
            const httpError = new HttpError(
                "Network response was not ok " + "Internal Server Error",
                500,
                "Internal Server Error"
            );

            // Arrange
            (globalThis.fetch as jest.Mock).mockResolvedValue({
                ok: false,
                status: 500,
                statusText: "Internal Server Error",
            } as unknown as Response);
            // Act
            const result = repo.createUser(userData);
            expect(result).rejects.toThrow(httpError);
        });
        test("should throw an error when fetch falls", async () => {
            // Arrange

            const httpError = new HttpError(
                "Network response was not ok " + "Network error",
                0,
                "Network error"
            );

            (globalThis.fetch as jest.Mock).mockRejectedValueOnce(
                new Error("Network error")
            );
            // Act
            const result = repo.createUser(userData);
            expect(result).rejects.toThrow(httpError);
        });
    });
});
