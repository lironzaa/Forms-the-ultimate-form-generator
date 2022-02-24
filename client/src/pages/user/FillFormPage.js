import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewForm from '../../components/user/PreviewForm';

const FillFormPage = () => {
    const formId = useParams().formId;
    const [{ isLoading, form, err }, setStatus] = useState({ isLoading: true });

    useEffect(() => {
        axios.get(`/user/form/${formId}`)
            .then(res => setStatus({ form: [{ Email: '' }, ...res.data.form] }))
            .catch(err => setStatus({ err: err?.response?.data?.message || err.message }))
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (err) return <h1 style={{ color: 'red' }}>{err}</h1>
    const newForm = [...form];
    return <Main formId={formId} form={newForm} onChange={() => setStatus({ form: newForm })}/>
}

const Main = ({ form, onChange, formId }) => {
    const [{ isLoading, err }, setStatus] = useState({ isLoading: false });

    const onSubmit = e => {
        e.preventDefault();
        setStatus({ isLoading: true });
        const data = { form: form.slice(1), email: form[0].Email };
        axios.post(`/user/form/${formId}`, data)
            .then(res => {
                alert('Form is submitted');
                setStatus({});
            })
            .catch(err => setStatus({ err: err?.response?.data?.message || err.message }))
    }

    return (
        <div>
            <h1>Fill Form Page</h1>
            <form onSubmit={onSubmit}>
                {form.map((inp, index) => <PreviewForm onChange={onChange} key={index} inp={inp}/>)}
                <br/>
                {isLoading ? 'Submitting...' : <button>Save</button>}
                <h3 style={{ color: 'red' }}>{err}</h3>
            </form>
        </div>
    )
}

export default FillFormPage;