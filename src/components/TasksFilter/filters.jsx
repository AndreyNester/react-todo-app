import { onFilterActive, onFilterAll, onFilterCompleted } from '../store/actions/actions';

const filtersList = [
  {
    title: 'All',
    onFilter: onFilterAll,
    id: 0,
  },
  {
    title: 'Active',
    onFilter: onFilterActive,
    id: 1,
  },
  {
    title: 'Completed',
    onFilter: onFilterCompleted,
    id: 2,
  },
];

export default filtersList;
