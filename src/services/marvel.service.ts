import axios from "axios";
import md5 from "js-md5";
import { IBanner } from "../data/interfaces/banner";
import { ICharacter } from "../data/interfaces/characters";
import { IComics } from "../data/interfaces/comics";

const URL_BASE = "https://gateway.marvel.com/v1/public";
const PUBLIC_KEY = "61715c508ab27b234fafd1ba649a100e";
const PRIVATE_KEY = "7803ed8cd46dc704afde83c94b555448d62669fd";

const api = axios.create({
  baseURL: URL_BASE,
});

function getHashUrl(): string {
  const md5Hash = md5.create();
  const timestamp = Number(new Date());

  md5Hash.update(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

  return `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash.hex()}`;
}

export async function listComics(limit: number): Promise<IComics[]> {
  const hashUrl = getHashUrl();

  return await api
    .get(`comics?format=magazine&formatType=comic&limit=${limit}&${hashUrl}`)
    .then((response) => {
      return response.data.data.results;
    });
}

export async function getBannerSaga(): Promise<IBanner[]> {
  const hashUrl = getHashUrl();

  return await api.get(`events?limit=1&${hashUrl}`).then((response) => {
    return response.data.data.results;
  });
}

export async function listCharacters(limit: number): Promise<ICharacter[]> {
  const hashUrl = getHashUrl();

  return await api
    .get(`characters?limit=${limit}&${hashUrl}`)
    .then((response) => {
      return response.data.data.results;
    });
}

export async function findByName(name: string): Promise<any> {
  const hashUrl = getHashUrl();

  if (!name.length) {
    listCharacters(6);
  }
  try {
    return await api
      .get(`characters?name=${name}&${hashUrl}`)
      .then((response) => {
        return response.data.data.results;
      });
  } catch (error) {
    listCharacters(6);
  }
}
