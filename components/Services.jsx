import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

export default function Services({ header, title, text }) {
  return (
    <>
      <Card className="my-2" color="primary" inverse>
        <CardHeader>{header}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </>
  );
}
