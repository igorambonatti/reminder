export interface Breakpoints {
  xxs: string
  xs: string
  sm: string
  m: string
  l: string
  xl: string
}

const size = {
  xxs: '320px',
  xs: '375px',
  sm: '425px',
  m: '768px',
  l: '1024px',
  xl: '1440px',
}

export default {
  xxs: `(min-width: ${size.xxs})`,
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  m: `(min-width: ${size.m})`,
  l: `(min-width: ${size.l})`,
  xl: `(min-width: ${size.xl})`,
} as Breakpoints
