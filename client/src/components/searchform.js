import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



const SearchForm =()=>{

const [startDate, setStartDate]= useState('')
const [endDate, setEndDate]= useState('')

const Data = ()=>{
  console.log(`Start date ${startDate}`)
  console.log(`End date ${endDate}`)

}

    return(
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
    )
}

export default SearchForm