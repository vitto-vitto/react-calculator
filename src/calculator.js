import { useState } from 'react';
import './calculator.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import React from 'react';
import CalculatorService from './calculator.service';

function Calculator() {

  const [ calculate, concatNumber, SUM, SUB, MUL, DIV ] = CalculatorService();
  
  const [txtNumbers, setTxtNumbers] = useState('0');
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState(null);
  const [operation, setOp] = useState(null);
   
  
  function addNumber(number) {
    let result;
    if (operation === null) {
      result = concatNumber(num1, number);
      setNum1(result);
    } else {
      result = concatNumber(num2, number);
      setNum2(result);
    }
    setTxtNumbers(result);
  }

  function defineOperation(op) {
    // apenas define a operação caso ela não exista
    if (operation === null) {
      setOp(op);
      return;
    }
    // caso operação estiver definida e número 2 selecionado, realiza o cálculo da operação
    if (num2 !== null) {
      const result = calculate(parseFloat(num1), parseFloat(num2), operation);
      setOp(op);
      setNum1(result.toString());
      setNum2(null);
      setTxtNumbers(result.toString());
    }
  }

  function calculateAction(){
    if (num2 === null){
      return;
    }
    const result = calculate(parseFloat(num1), parseFloat(num2), operation)
    setTxtNumbers(result)
  }

  function clear(){
    setTxtNumbers('0');
    setNum1('0');
    setNum2(null);
    setOp(null);
  }

  return (
    <div style={{
      background: 'transparent !important',
      backgroundColor: '#7D52B3',
      padding: '10px',
      margin: '5px',
      width: '400px',
      borderRadius: '5px'
    }}>
      <Container>
        <Row>
          <Col xs='3'>
            <Button variant='danger'
              onClick={clear}>C</Button>
          </Col>
          <Col xs='9'>
            <Form.Control type='text'
              name='txtNumbers'
              className='text-right'
              readOnly='readonly'
              value={txtNumbers} 
            ></Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('7')}>7</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('8')}>8</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('9')}>9</Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => defineOperation('/')}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('4')}>4</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('5')}>5</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('6')}>6</Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => defineOperation('*')}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('1')}>1</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('2')}>2</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('3')}>3</Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => defineOperation('-')}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('0')}>0</Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => addNumber('.')}>.</Button>
          </Col>
          <Col>
            <Button variant='success'
              onClick={calculateAction}>=</Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => defineOperation('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;
