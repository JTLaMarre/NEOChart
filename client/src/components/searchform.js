import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const axios = require('axios');


const SearchForm =()=>{

const [startDate, setStartDate]= useState('');
const [endDate, setEndDate]= useState('');
const [data,setData]=useState('')

const handleRequest = ()=>{

  // Make a request for a user with a given ID
  axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=gqS8iiSxwjYYj5iPfuaEM2hx0mlwK6TVmxNOdtvu`)
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(`Data is ${data}`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(`request sent`)
  });
}





const Data = ()=>{
  console.log(`Start date ${startDate}`)
  console.log(`End date ${endDate}`)
  handleRequest()

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
    <Form.Label>End Date limit of 7 day date range</Form.Label>
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