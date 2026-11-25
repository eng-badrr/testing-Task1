import { getUser } from "./userService";
import { afterEach } from "@jest/globals";

describe("getUser()", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should fetch and return user data successfully", async () => {
    const mockUser = {
      id: 1,
      name: "Badr",
      email: "badr@example.com",
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockUser),
    });

    const result = await getUser(1);

    expect(result).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1",
    );
  });

  test("should throw an error when API fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(getUser(1)).rejects.toThrow("Failed to fetch user");
  });

  test("should handle network errors", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    await expect(getUser(1)).rejects.toThrow("Network error");
  });
});
