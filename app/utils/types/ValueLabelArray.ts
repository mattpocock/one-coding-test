import ValueLabel from './ValueLabel';

export default interface ValueLabelArray {
  [index: number]: ValueLabel;
  map: (table: {}) => void;
}
