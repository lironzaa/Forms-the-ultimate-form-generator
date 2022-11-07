import { Link as ReactRouter } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";
import React from "react";

const FormItem = ({ formId }) => {
  return (
    <div>
      <Text as={'b'} fontSize={"md"}>Form Name :</Text>
      <Link display={"block"} mb={"10px"} as={ReactRouter} color={"#2B6CB0"} to={`/form/${formId}`}>{formId}</Link>
    </div>
  )
}

export default FormItem;