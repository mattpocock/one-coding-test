import TableCell from './TableCell';

export default interface TableAttributesArray {
  [index: number]: TableCell;
  map: (table: {}) => void;
}
