import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PreviewForm from '../components/user/PreviewForm';


const FormPage = () => {
    const formID = useParams().formID;
    const [{isLoading, form, err}, setStatus] = useState({isLoading: true});


    useEffect(() => {
        axios.get(`/user/form/${formID}`)
            .then(res => setStatus({form: [{Email: ''}, ...res.data.form]}))
            .catch(err => setStatus({err: err?.response?.data?.message || err.message}))
    }, [])


    if (isLoading) return <h1>Loading...</h1>
    if (err) return <h1 style={{color: 'red'}}>{err}</h1>
    const newForm = [...form];
    return <Main formID={formID} form={newForm} onChange={() => setStatus({form: newForm})}/>
}

const Main = ({form, onChange, formID}) => {
    const [{isLoading, err}, setStatus] = useState({isLoading: false});

    const onSubmit = e => {
        e.preventDefault();
        setStatus({isLoading: true});
        const data = {form: form.slice(1), email: form[0].Email};
        axios.post(`/user/form/${formID}`, data)
            .then(res => {
                alert('Form is submitted');
                setStatus({});
            })
            .catch(err => setStatus({err: err?.response?.data?.message || err.message}))
    }

    return (
        <form onSubmit={onSubmit}>
            {form.map((inp, index) => <PreviewForm onChange={onChange} key={index} inp={inp}/>)}
            <br/>
            {isLoading ? 'Submitting...' : <button>Save</button>}
            <h3 style={{color: 'red'}}>{err}</h3>
        </form>
    )
}

export default FormPage;