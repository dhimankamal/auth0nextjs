import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

export default function Services() {
  return (
    <>
      <Card className="my-2" color="primary" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="secondary" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="success" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="danger" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="warning" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="info" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="light">
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card className="my-2" color="dark" inverse>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
    </>
  );
}
