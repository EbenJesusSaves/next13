export interface ApiFetcherOptions {
  url: string;
  query: string;
  variables?: Variables;
}

export type Variables = { [key: string]: string };
export interface ApiFetcherResults<T> {
  data: T;
}

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}
