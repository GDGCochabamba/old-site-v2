import { DataType } from './data-type.model';

export interface Partner extends DataType {
  order: number;
  name: string;
  link: string;
  logoUrl: string;
}
