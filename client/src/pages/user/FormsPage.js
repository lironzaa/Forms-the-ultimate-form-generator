import { useEffect, useState } from 'react';
import { apiService } from "../../api/api";
import FormItem from "../../components/user/FormItem/FormItem";
import { Container, Text } from "@chakra-ui/react";
import AppSpinner from "../../components/common/AppSpinner";

const FormsPage = () => {
  const [ forms, setForms ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  useEffect(() => {
    apiService.getForms()
      .then(res => {
        setForms(res.data);
        setIsLoading(false);
      })
      .catch(err => setError(err?.response?.data?.message || err.message))
  }, [])

  if (isLoading) return <AppSpinner />;
  if (error) return <h1 style={{ color: 'red' }}>{error}</h1>;

  return (
    <Container>
      <Text as={'b'} color={"#68D391"} fontSize={"2xl"}>Forms Page</Text>
      <div>
        {forms.map(form => <FormItem formId={form._id} key={form._id} />)}
      </div>
    </Container>
  )
}

export default FormsPage;