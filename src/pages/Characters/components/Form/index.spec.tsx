import { customRender } from "@/test/customRender";
import { fireEvent } from "@testing-library/react";
import { Form } from ".";

let findByNameMock = jest.fn();
let listCharactersMock = jest.fn();

jest.mock("@/store/Comics", () => {
  return {
    useComicsStore: jest.fn(() => ({
      findByName: (name: string) => {
        findByNameMock(name);
      },
      listCharacters: () => listCharactersMock(),
    })),
  };
});

describe("Form", () => {
  it("should component render", () => {
    const { getByPlaceholderText } = customRender(<Form />);

    expect(getByPlaceholderText("Thor")).toBeTruthy();
  });

  describe("Search component", () => {
    it("should call findByName when a name is entered", async () => {
      const { getByPlaceholderText } = customRender(<Form />);

      const input = getByPlaceholderText("Thor");
      const handleSearch = jest.fn();

      fireEvent.change(input, { target: { value: "Thor" } });
      await handleSearch("Thor");

      expect(findByNameMock).toHaveBeenCalledWith("Thor");
      expect(listCharactersMock).not.toHaveBeenCalled();
    });
  });
});
