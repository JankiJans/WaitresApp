import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const TableForm = ({ action, ...props }) => {

  const [status, setStatus] = useState(props.status || '');
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || '');
  const [bill, setBill] = useState(props.bill || '');


  const handleSubmit = e => {
    e.preventDefault();
        action({ status, peopleAmount, maxPeopleAmount, bill });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formStatus">
        <Form.Label>Status:</Form.Label>
        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.status)}>
          <option value="Busy">Busy</option>
          <option value="Free">Free</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Reserved">Reserved</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPeopleAmount">
        <Form.Label>Number of People:</Form.Label>
        <Form.Control type="number" min="0" value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.peopleAmount)}/>
      </Form.Group>

      <Form.Group controlId="formMaxPeopleAmount">
        <Form.Label>Maximum Number of People:</Form.Label>
        <Form.Control type="number" min="0" value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(e.target.maxPeopleAmount)} />
      </Form.Group>

      <Form.Group controlId="formBill">
        <Form.Label>Bill:</Form.Label>
        <Form.Control type="number" min="0" value={bill} onChange={(e) => setBill(e.target.bill)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TableForm;
