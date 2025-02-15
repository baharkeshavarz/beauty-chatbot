import { AxiosResponse } from 'axios';

export type Response<T = any> = Promise<AxiosResponse<T>>;

export interface Basic<T extends any = any> {
  data: T;
  error_code: number;
  message: string;
  success: boolean;
}

export interface List<T extends any = any> {
  result: T[];
  page_size: number;
  total_items: number;
  total_pages: number;
  page: number;
  has_previous_page: boolean;
  has_next_page: boolean;
  sort_field: string;
  search_text: string;
  sort_orientation: number;
}

export type ListParams = Partial<{
  page: number;
  page_size: number;
  sort_field: string;
  search_text: string;
  sort_orientation: number;
}>;
