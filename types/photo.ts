export interface Photo {
  id: string;
  id_base?: number;
  earth_date: Date | string;
  sol: number;
  camera: string;
  src: string;
}
