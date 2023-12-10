import { useContext } from 'react';

import { dataContext } from '../../App';
import { onEdit } from '../store/actions/actions';

function EditingInput(props) {
  const { dispatchData } = useContext(dataContext);
  const { editingValue, setEditing, setEditingValue, id } = props;
  return (
    <input
      type="text"
      className="edit"
      value={editingValue}
      onKeyUp={(e) =>
        (e.code === 'Escape' && setEditing((prevState) => !prevState)) ||
        (e.code === 'Enter' && dispatchData(onEdit({ title: editingValue, id })))
      }
      onChange={(e) => setEditingValue(e.target.value)}
    />
  );
}

export default EditingInput;
