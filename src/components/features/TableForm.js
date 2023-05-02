import { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTablesById, editTables } from '../../redux/tablesRedux';
import { getStatusList } from '../../redux/tableStatusRedux';


const TableForm = () => {

  const { id } = useParams();
  const tableData = useSelector((state) => getTablesById(state, id));
  const tableStatus = useSelector(getStatusList)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const handleSubmit = () => {
    dispatch(editTables({ id, status, peopleAmount, maxPeopleAmount, bill}));
    navigate("/");
  };

  return (
    <Container>
      <h3>Table {id}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formStatus">
          <Form.Label>Status:</Form.Label>
          <Form.Control as="select">
            {tableStatus.map((status) => {
              return (
                <option key={status} value={status}>{status}</option>
              )
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TableForm;
