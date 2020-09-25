import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const SearchForm =()=>{

    return(
        <Form>
<Form.Group >
    <Form.Label>Start Date</Form.Label>
    <Form.Control  placeholder="Starting date for asteroid search YYYY-MM-DD" />
  </Form.Group>
<Form.Group >
    <Form.Label>Start Date</Form.Label>
    <Form.Control  placeholder="Ending date for asteroid search YYYY-MM-DD" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
        </Form>
    )
}

export default SearchForm