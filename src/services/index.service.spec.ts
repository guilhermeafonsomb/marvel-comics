import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { findByName, getBannerSaga, listComics } from "./index.service";
import {
  findByNameMock,
  getBannerSagaMock,
  listComicsMock,
} from "./index.service.mock";

const preURL = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "61715c508ab27b234fafd1ba649a100e";

describe("Marvel Service", () => {
  describe("listComics", () => {
    it("should return a list of comics with the specified limit", async () => {
      const limit = 1;
      const mockApi = new MockAdapter(axios);
      const api = `${preURL}comics?format=magazine&formatType=comic&limit=${limit}&ts=123456&apikey=${apiKey}`;

      mockApi.onGet(api).reply(200, {
        data: {
          results: listComicsMock,
        },
      });

      const result = await listComics(limit);

      expect(result).toEqual(listComicsMock);
    });
  });

  describe("getBannerSaga", () => {
    it("should return a get banner saga", async () => {
      const limit = 1;
      const mockApi = new MockAdapter(axios);
      const api = `${preURL}events?limit=${limit}&apikey=${apiKey}`;

      mockApi.onGet(api).reply(200, {
        data: {
          results: getBannerSagaMock,
        },
      });

      const result = await getBannerSaga();

      expect(result).toEqual(getBannerSagaMock);
    });
  });

  describe("findByName", () => {
    it("should return a find by name with the specified limit", async () => {
      const name = "Adam Warlock";
      const mockApi = new MockAdapter(axios);
      const api = `${preURL}nameStartsWith?name=${name}&apikey=${apiKey}`;

      mockApi.onGet(api).reply(200, {
        data: {
          results: findByNameMock,
        },
      });

      const result = await findByName(name);

      expect(result).toEqual(findByNameMock);
    });
  });
});
