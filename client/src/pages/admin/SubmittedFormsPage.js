import { useState, useEffect } from 'react';
import SubmittedFormField from '../../components/admin/SubmittedFormField/SubmittedFormField';
import { Link } from "react-router-dom";
import { apiService } from "../../api/api";

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

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1 style={{ color: 'red' }}>{error}</h1>

    return (
        <div>
            <h1>Submitted Forms Page</h1>
            <hr/>
            <Link to="/admin/form">Create Form</Link>
            <hr/>
            {forms.map(({ email, form }, index) =>
                (
                    <div key={index}>
                        <h5>{email}</h5>
                        {form.map((field, index) => <SubmittedFormField key={index} field={field}/>)}
                        <hr/>
                    </div>
                ))}
        </div>
    )
}

export default SubmittedFormsPage;