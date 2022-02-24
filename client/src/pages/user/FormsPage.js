import { useEffect, useState } from 'react';
import { apiService } from "../../api/api";
import FormItem from "../../components/user/FormItem/FormItem";

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

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1 style={{ color: 'red' }}>{error}</h1>

    return (
        <div>
            <h1>Forms Page</h1>
            {forms.map(form => <FormItem formId={form._id} key={form._id}/>)}
        </div>
    )
}

export default FormsPage;