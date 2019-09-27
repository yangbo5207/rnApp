import request from 'src/utils/http/interface';

export interface Params {
  pageSize?: number,
  pageCount?: number,
  current?: number

  [key: string]: any
}

export interface Pagination {
  current: number,
  pageSize: number,
  lastPage: boolean,
  nextPage?: number,
}

export interface ListDataset<T> {
  list: T[],
  pagination: Pagination
}

export interface Page<T> {
  current: number,
  data: Array<T>,
  pageSize: number,
  lastPage: false,
  nextPage?: number
}

/**
 * response类型简写
 */
export type Resp<T> = request.ParseResult<T>;
/**
 * page response类型简写
 */
export type PageResp<T> = request.ParseResult<Page<T>>;
/**
 * promise包装的response类型简写
 */
export type PromiseResp<T> = Promise<Resp<T>>;
/**
 * promise包装的page response类型简写
 */
export type PromisePageResp<T> = Promise<PageResp<T>>;
