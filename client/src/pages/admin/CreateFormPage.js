import { useState } from "react";
import CreateFormField from "../../components/admin/CreateFormField/CreateFormField";
import { apiService } from "../../api/api";
import { Box, Button, Container, Text } from "@chakra-ui/react";

const defaultValue = [ { '': '' } ]

const CreateFormPage = () => {
  const [ form, setForm ] = useState(defaultValue);
  const onChange = () => setForm([ ...form ]);

  const onSaveForm = () => {
    apiService.createForm(form)
      .then(doc => {
        alert('Form is saved!');
        setForm(defaultValue);
      })
      .catch(err => console.log(err));
  }
  return (
    <Container maxW={"container.lg"}>
      <Text as={'b'} color={"#68D391"} fontSize={"2xl"}>Create Form Page</Text>
      <Box my={5}>
        {form.map((field, index) => <CreateFormField onChange={onChange} index={index} form={form} key={index} />)}
      </Box>
      <br />
      <Button width={"100%"} colorScheme="blue" onClick={onSaveForm}>Save</Button>
    </Container>
  )
}

export default CreateFormPage;