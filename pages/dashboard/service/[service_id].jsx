import React from 'react';
import { useRouter } from 'next/router';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

export default function ServiceForm() {
  const router = useRouter();
  const { service_id } = router.query;

  return (
    <>
      <div>ServiceForm - {service_id}</div>
      <div className="p-3">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input id="exampleEmail" name="fullname" placeholder="with a placeholder" type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Phoner Number</Label>
                <Input id="examplePassword" name="number" placeholder="password placeholder" type="number" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input id="exampleAddress" name="address" placeholder="1234 Main St" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input id="exampleAddress2" name="address2" placeholder="Apartment, studio, or floor" />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input id="exampleCity" name="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input id="exampleState" name="state" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input id="exampleZip" name="zip" />
              </FormGroup>
            </Col>
          </Row>
          <Button className='mt-3'>Submit Form</Button>
        </Form>
      </div>
    </>
  );
}
