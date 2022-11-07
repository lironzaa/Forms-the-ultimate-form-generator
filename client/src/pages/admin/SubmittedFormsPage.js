import { useState, useEffect } from 'react';
import SubmittedFormField from '../../components/admin/SubmittedFormField/SubmittedFormField';
import { Link } from "react-router-dom";
import { apiService } from "../../api/api";
import { Box, Button, Container, Divider, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import AppSpinner from "../../components/common/AppSpinner";

const SubmittedFormsPage = () => {
    const [ forms, setForms ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    useEffect(() => {
        apiService.adminForms()
            .then(res => {
                setForms(res.data);
                setIsLoading(false);
            })
            .catch(err => setError(err?.response?.data?.message || err.message))
    }, [])

    if (isLoading) return <AppSpinner />;
    if (error) return <h1 style={{ color: 'red' }}>{error}</h1>

    return (
        <Container>
          <Text as={'b'} color={"#68D391"} fontSize={"2xl"}>Submitted Forms Page</Text>
            <hr/>
              <Link to="/admin/form">
                <Button my={5} type="submit" width={"100%"} colorScheme='blue'>Create Form</Button>
              </Link>
            <hr/>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'>
            {forms.map(({ email, form }, index) =>
              (
                <Box key={index}>
                  <Text as={'b'} fontSize={"2xl"}>{email}</Text>
                  {form.map((field, index) => <SubmittedFormField key={index} field={field}/>)}
                  {/*<Divider color={"#68D391"} />*/}
                </Box>
              ))}
          </VStack>
        </Container>
    )
}

export default SubmittedFormsPage;