import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormFields from "../../components/user/FormFields/FormFields";
import { apiService } from "../../api/api";

const FillFormPage = () => {
    const formId = useParams().formId;
    const [ formFields, setFormFields ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    useEffect(() => {
        apiService.getForm(formId)
            .then(res => {
                setFormFields([ { Email: '' }, ...res.data.form ]);
                setIsLoading(false);
            })
            .catch(err => setError(err?.response?.data?.message || err.message))
    }, [])

    const onSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);
        const data = { form: formFields.slice(1), email: formFields[0].Email };
        apiService.saveForm(formId, data)
            .then(res => {
                alert('Form is submitted');
                setFormFields([]);
            })
            .catch(err => setError(err?.response?.data?.message || err.message))
    }

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1 style={{ color: 'red' }}>{error}</h1>
    return (
        <div>
            <h1>Fill Form Page</h1>
            <FormFields formId={formId} fields={formFields} onSubmit={onSubmit} isSubmitting={isSubmitting}
                        error={error}
                        onChange={() => setFormFields([ ...formFields ])}/>
        </div>
    )
}

export default FillFormPage;