import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewForm from '../components/user/PreviewForm';

const FormPage = () => {
    const formID = useParams().formID;
    const [{ isLoading, data, err }, setStatus] = useState({ isLoading: true });
    const [form, setForm] = useState({});
    
    useEffect(() => {
        axios.get(`/user/form/${formID}`)
            .then(res => setStatus({ data: res.data }))
            .catch(err => setStatus({ err: err }));
    }, [])


    if (isLoading) return <h1>Loading...</h1>
    if (err) return <h1 style={{ color: 'red' }}>{err.message}</h1>

    const onSubmit = e => {
        e.preventDefaul();
    }

    return (
        <form onSubmit={onSubmit}>
            <label style={{ display: 'block' }}>
                Email <br />
                <input type='email' name='email' required={true} />
            </label>
            {data.form.map((inp, index) => <PreviewForm key={index} {...inp} />)}
            <br />
            <button>Save</button>
        </form>
    )
}

export default FormPage;