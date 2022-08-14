import React from "react";
import { Formik, Form, Field } from "formik";
import { createSchema, createInitialValues } from "../../utils/utils";
import { Button, Row, Col, Collapse } from "reactstrap";
const { Panel } = Collapse;

const parseObject = (list) => {
  const result = [];

  if (!Array.isArray(list)) {
    for (let key in list) {
      result.concat(list[key]);
    }
  }
  return list;
};

const FormContainer = (props) => {
  const {
    fields,
    initialValues,
    onSubmit,
    renderCustomSubmit,
    maxWidth,
    isValueChange,
    formRef,
    options,
    onclick,
    className = "m-b-3",
    handleButtonDisable,
    switchFields,
    formClass
  } = props;

  const schema = createSchema(parseObject(fields));
  const renderField = (props) => {
    return (
    <Col key={props.name} lg={props.width||12} sm={24} xs={24} className={className}>
      <Field key={props.name} {...props} texi_options={options} handleButtonDisable={handleButtonDisable} switchFields={switchFields}/>
    </Col>
  )};

  const renderForm = (props) => {
    if (isValueChange) isValueChange(props.dirty);
    const { handleSubmit } = props;
    return (
      <Form onSubmit={handleSubmit} className={formClass && formClass}>
        <>
          {!Array.isArray(fields) ? (
            <Row>
              {" "}
              {Object.keys(fields).map((key, idx) => {
                return (
                  <Col key={idx} lg={fields[key][0].width||12} sm={24} xs={24}>
                    <Collapse accordion>
                      <Panel header={key}>
                        <Row gutter={16}> {fields[key].map(renderField)}</Row>
                      </Panel>
                    </Collapse>
                  </Col>
                );
              })}{" "}
            </Row>
          ) : (
            <>
              <Row gutter={16}>
                {fields.map(renderField)}
              </Row>
            </>
          )}

          {renderCustomSubmit || (
            <Button variant="contained" type="submit">
              Signin
            </Button>
          )}
        </>
      </Form>
    );
  };

  return (
    <div style={{ maxWidth: maxWidth || "auto" }}>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
        enableReinitialize
      >
        {renderForm}
      </Formik>
    </div>
  );
};

export default FormContainer;