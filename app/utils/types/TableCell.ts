import { ReactNode } from 'react';

export default interface TableAttribute {
  header?: ReactNode;
  renderCell: (rowObject: any) => ReactNode;
  width?: number;
  orderColumnObject?: {
    value: any;
  };
}
