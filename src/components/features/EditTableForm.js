import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTablesById } from '../../redux/tablesRedux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TableForm from './TableForm';
import { editTables } from '../../redux/tablesRedux';

const EditTableForm = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTablesById(state, id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (table) => {
    dispatch(editTables({ ...table, id }));
    navigate('/');
  };

  if (!table) return <Navigate to="/" />;
  else return <TableForm 
    action={handleSubmit} 
    status={table.status} 
    peopleAmount={table.peopleAmount} 
    maxPeopleAmount={table.maxPeopleAmount} 
    bill={table.bill}>
    </TableForm>;
};

export default EditTableForm
