/** 创建任意可索引对象 */
export interface IterationOB {
  [key: string]: any
}

/**
 * 创建可索引的枚举对象
 */
export interface EnumOB {
  [key: number]: string
}