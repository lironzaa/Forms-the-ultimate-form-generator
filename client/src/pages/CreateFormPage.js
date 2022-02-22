import { useState } from "react";
import CreateForm from "../components/CreateForm/CreateForm";
import axios from 'axios';

const defaultValue = [{ '': '' }]


const CreateFormPage = () => {
    const [state, setState] = useState(defaultValue);

    const form = [...state];
    const onChange = () => setState(form);

    const onSaveForm = () => {
        axios.post('/admin/save-form', { form })
            .then(doc => {
                alert('Form is saved!');
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            {form.map((inp, index) => <CreateForm onChange={onChange} index={index} form={form} key={index} />)}
            <br />
            <button onClick={onSaveForm}>Save</button>
        </>
    )
}

export default CreateFormPage;