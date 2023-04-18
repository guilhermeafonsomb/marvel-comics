import { BannerCard } from "@/components/BannerCard";
import { CardList } from "@/components/CardList";
import { IBanner } from "@/data/interfaces/banner";
import { ICharacter } from "@/data/interfaces/characters";
import { IComics } from "@/data/interfaces/comics";
import { customRender } from "@/test/customRender";
import { bannerSagaMock, mockComics } from "./index.mock";

let setComicsMock = jest.fn();
let getBannerSagaMock = jest.fn();

jest.mock("@/store/Comics", () => {
  return {
    useComicsStore: jest.fn(() => ({
      setComics: (limit: number) => setComicsMock(limit),
      comics: mockComics,
      getBannerSaga: () => getBannerSagaMock(),
      bannerSaga: bannerSagaMock,
    })),
  };
});

describe("Home", () => {
  it("should render card list component in the home", async () => {
    const { getByText } = customRender(
      <CardList
        title="Top rate comics"
        data={mockComics as IComics[] & ICharacter[] & IBanner[]}
      />
    );

    expect(getByText("Top rate comics")).toBeTruthy();
  });

  it("should render banner saga component in the home", async () => {
    const { getByText } = customRender(<BannerCard />);

    expect(getByText("Acts of Vengeance!")).toBeTruthy();
  });
});
