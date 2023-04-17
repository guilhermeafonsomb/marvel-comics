import { create } from "zustand";

import { IBanner } from "@/data/interfaces/banner";
import { ICharacter } from "@/data/interfaces/characters";
import { IComics } from "@/data/interfaces/comics";
import {
  findByName,
  getBannerSaga,
  listCharacters,
  listComics,
} from "@/services/index.service";

type ComicsState = {
  comics: IComics[];
  bannerSaga: IBanner[];
  limit: number;
  characters: ICharacter[];
  infoToModalData: IComics & ICharacter & IBanner;
  setComics: (limit: number) => Promise<void>;
  getBannerSaga: () => Promise<void>;
  listCharacters: (limit: number) => Promise<void>;
  infoToModal: (data: IComics & ICharacter & IBanner) => Promise<void>;
  findByName: (name: string) => Promise<void>;
};

export const useComicsStore = create<ComicsState>((set) => ({
  comics: [],
  bannerSaga: [],
  characters: [],
  limit: 6,
  infoToModalData: {} as IComics & ICharacter & IBanner,

  setComics: async (limit) => {
    const reponse = await listComics(limit);
    set((state) => ({
      ...state,
      comics: reponse,
    }));
  },

  getBannerSaga: async () => {
    const reponse = await getBannerSaga();
    set((state) => ({
      ...state,
      bannerSaga: reponse,
    }));
  },

  listCharacters: async (limit) => {
    const reponse = await listCharacters(limit);
    set((state) => ({
      ...state,
      characters: reponse,
    }));
  },

  infoToModal: async (data) => {
    set((state) => ({
      ...state,
      infoToModalData: data,
    }));
  },

  findByName: async (name) => {
    const reponse = await findByName(name);
    set((state) => ({
      ...state,
      characters: reponse,
    }));
  },
}));
