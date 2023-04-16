export interface IBanner {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start: string;
  end: string;
  thumbnail: Thumbnail;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  series: Series;
  next: Next;
  previous: Previous;
}

export interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Item2 {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

export interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

export interface Item4 {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item5[];
  returned: number;
}

export interface Item5 {
  resourceURI: string;
  name: string;
}

export interface Next {
  resourceURI: string;
  name: string;
}

export interface Previous {
  resourceURI: string;
  name: string;
}
