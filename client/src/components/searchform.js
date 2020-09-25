import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';



const SearchForm =()=>{

const [startDate, setStartDate]= useState('')
const [endDate, setEndDate]= useState('')

const Data = ()=>{
  console.log(`Start date ${startDate}`)
  console.log(`End date ${endDate}`)

}

    return(
      <Row> 
      <Col>
        <Form>
<Form.Group >
    <Form.Label>Start Date</Form.Label>
    <Form.Control  placeholder="Starting date for asteroid search YYYY-MM-DD" value={startDate} onChange={e => setStartDate(e.target.value) } />
  </Form.Group>
<Form.Group >
    <Form.Label>Start Date</Form.Label>
    <Form.Control  placeholder="Ending date for asteroid search YYYY-MM-DD" value={endDate} onChange={e => setEndDate(e.target.value) }/>
  </Form.Group>

  <Button variant="primary" onClick={Data}>
    Submit
  </Button>
        </Form>
      </Col>
      </Row>
    )
}

export default SearchForm