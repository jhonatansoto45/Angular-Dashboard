export interface MenuItem {
  name: string;
  route: string;
  icon: string;
}

export interface DragScrollItem {
  image: string;
  text: string;
  value: string;
}

export interface CardItemProfile {
  image: string;
  text: string;
  value: number;
}

export enum TypeChart {
  line = 'line',
  pie = 'pie',
  bar = 'bar',
  radar = 'radar',
}
export interface IProjectInfo {
  id: number;
  name: string;
  members: number;
  creationDate: string;
  description: string;
}
