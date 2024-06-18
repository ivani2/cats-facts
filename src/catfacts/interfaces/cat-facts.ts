export interface CatFactsResponse {
  current_page: number;
  data: CatFact[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface CatFact {
  fact: string;
  length: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
