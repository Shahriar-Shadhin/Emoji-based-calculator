import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComponent = () => {
    const [operandOne, setOperandOne] = useState('');
    const [operandTwo, setOperandTwo] = useState('');
    const [operator, setOperator] = useState('Choose An Emoji');
    const [result, setResult] = useState(0);
    const [emoji, setEmoji] = useState(false);

    // API route for request
    const api = `http://127.0.0.1:8000/api/calculate/${operator}/${operandOne}/${operandTwo}`;

    // On change handler functions
    const handleOperandOneChange = (event) => {
        setOperandOne(event.target.value)
    }
    const handleOperandTwoChange = (event) => {
        setOperandTwo(event.target.value)
    }
    const handleOperatorChange = (event) => {
        setOperator(event.target.value)
    }

    // Form submission handlar function
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(api)
        .then(
          response => response.json(),
          reject => console.log('Error: ', reject)
        )
        .then(data => {

          setResult(data.result);
          setEmoji(true)
        });
    }

  return (
    <div className='calculator'>
      <h2>Emoji Based Calculator</h2>
        <Form onSubmit={handleSubmit}>
          {/*Oprand One Input section*/}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="operand-one">Operand One</Form.Label>
            <Form.Control 
            type="number" 
            value={operandOne} 
            id='operand-one' 
            placeholder="Enter A Number" 
            onChange={handleOperandOneChange}
            required 
            />
          </Form.Group>

          {/*Oprand Two Input section*/}
          <Form.Group className="mb-3">
            <Form.Label htmlFor='operand-two'>Operand Two</Form.Label>
            <Form.Control 
            type="number" 
            value={operandTwo} 
            id='operand-two' 
            placeholder="Enter A Number" 
            onChange={handleOperandTwoChange}
            required
            />
          </Form.Group>

          {/*Operator select section*/}
          <Form.Group className="mb-3">
            <Form.Label>Operator</Form.Label>
            <Form.Select className='mb-3' value={operator} onChange={handleOperatorChange} required>
              <option disabled defaultValue >Choose An Emoji</option>
              <option value="addition">&#x1F47D; Addition</option>
              <option value="subtraction">&#x1F480; Subtraction</option>
              <option value="multiplication">&#x1F47B; Multiplication</option>
              <option value="division">&#x1F631; Division</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">Calculate</Button>
        </Form>
        {/*Result section*/}
        <div className='result'>
          <h3> 
            <span className={emoji === false ? "hidden" : ""}>&#128512;</span>
            {result === 0 ? " " :  "Result Is: " + result} 
          </h3>
        </div>
    </div>
  )
}

export default FormComponent