import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function Services({ header, title, text, id }) {
  return (
    <>
      <Card className="my-2" color="light">
        <CardHeader>{header}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{text}</CardText>
          <Button color="primary" href={`/dashboard/service/${id}`} tag="a">
            Apply Now
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
