import { useState, useEffect } from 'react';
import axios from 'axios';
import SubmittedForm from '../components/SubmittedForm/SubmittedForm';

const SubmittedFormsPage = () => {
    const [{ isLoading, data, err }, setStatus] = useState({ isLoading: true });
    useEffect(() => {
        axios.get('/admin/submitted-forms')
            .then(res => setStatus({ data: res.data }))
            .catch(err => setStatus({ err: err?.response?.data?.message || err.message }))
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (err) return <h1 style={{ color: 'red' }}>{err}</h1>
    return data.map(({email, form}, index) => (
        <div key={index}>
            <h5>{email}</h5>
            {form.map((inp, index) => <SubmittedForm key={index} inp={inp} />)}
            <hr />
        </div>
    ))
}

export default SubmittedFormsPage;