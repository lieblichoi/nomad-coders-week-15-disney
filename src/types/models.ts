export interface GetResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: Env;
}

export interface CharactersListModel extends CharacterDetailModel {
  id: number;
  imageUrl?: string;
  name: string;
}

export interface CharacterDetailModel {
  sourceUrl?: string;
  films?: string[];
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers2;
  baseURL: string;
  method: string;
  url: string;
}

export interface Headers2 {
  Accept: string;
}

export interface Env {}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Headers {
  'content-type': string;
}
