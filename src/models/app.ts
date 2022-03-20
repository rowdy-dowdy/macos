export interface AppInfo {
  id?: number,
  show?: boolean,
  display?: boolean,
  title?: string,
  name?: string,
  image?: string,
  type?: 'divine' | null
}

export interface AppDetails {
  full: boolean;
  x: number | null;
  y: number | null;
  w: number | null;
  h: number | null;
  z_index: number | null;
}