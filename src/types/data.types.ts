import { ReactElement } from 'react';

export type Category = {
  id: number;
  name: string;
  color: string;
  icon: ReactElement;
};

export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
  type: string;
};
