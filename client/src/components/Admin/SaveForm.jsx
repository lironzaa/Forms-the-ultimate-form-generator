import axios from 'axios';
import { useState } from 'react';

const SaveForm = ({ onDelete, form, onSaved }) => {
    const [{ isLoading, isSubmitted, err }, setStatus] = useState({})
    const onFormSubmit = e => {
        e.preventDefault();
        setStatus({ isLoading: true })
        axios.post('/admin/save-form', { form })
            .then((doc) => {
                alert('Form is saved!');
                onSaved();
                setStatus({ isLoading: false });
            })
            .catch(err => setStatus({ err: err.response.data }));
    }
    return (
        <form onSubmit={onFormSubmit}>
            {form.length > 0 && (isLoading ? 'Loading...' : <button>Save Form</button>)}
            {err && <p style={{ color: 'red' }}>{err.message}</p>}
        </form>
    )
}

export default SaveForm;