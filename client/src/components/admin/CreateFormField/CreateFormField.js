import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";

const CreateFormField = ({ onChange, index, form }) => {
  const field = form[index];
  const fieldValue = Object.keys(field)[0];

  const onToggleNested = e => {
    const checked = e.target.checked;
    field[fieldValue] = checked ? [ { '': '' } ] : '';
    onChange();
  }

  const value = field[fieldValue];
  const isNested = Array.isArray(value);

  const onPropertyNameChange = e => {
    form[index] = { [e.target.value]: '' };
    onChange();
  }

  const onDelete = () => {
    form.splice(index, 1);
    onChange();
  }

  const onAddNewField = () => {
    form.push({ '': '' })
    onChange();
  }

  return (
    <Box>
      <Flex mb={5} alignItems={"center"}>
        <Checkbox type='checkbox' isChecked={isNested} onChange={onToggleNested} />
        <Text ml={3} fontSize={"md"}>is Nested</Text>
        {isNested &&
          <Input disabled={true} className="ml-20" type='text' value={fieldValue} onChange={onPropertyNameChange}
                 placeholder='Nested Property Name' />}
      </Flex>
      <Box ml={10}>
        {isNested ? value.map((field, index) => (
          <CreateFormField form={value} index={index} key={index}
                           field={field} onChange={onChange} />)) : (
          <Box>
            <Input mb={5} required={true} onChange={onPropertyNameChange} value={fieldValue}
                   type='text' name={fieldValue} placeholder="Field Name" />
            {form.length > 1 && <Button colorScheme='teal' mr={5} onClick={onDelete}>Delete</Button>}
            {form.length === index + 1 && <Button colorScheme='teal' onClick={onAddNewField}>Add More Field</Button>}
          </Box>
        )}
      </Box>
      <br />
    </Box>
  )
}

export default CreateFormField;