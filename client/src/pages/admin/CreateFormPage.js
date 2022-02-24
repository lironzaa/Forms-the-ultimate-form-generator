import { useState } from "react";
import CreateFormField from "../../components/admin/CreateFormField/CreateFormField";
import { apiService } from "../../api/api";

const defaultValue = [ { '': '' } ]

const CreateFormPage = () => {
    const [ form, setForm ] = useState(defaultValue);
    const onChange = () => setForm([ ...form ]);

    const onSaveForm = () => {
        apiService.createForm(form)
            .then(doc => {
                alert('Form is saved!');
                setForm(defaultValue);
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Create Form Page</h1>
            {form.map((field, index) => <CreateFormField onChange={onChange} index={index} form={form} key={index}/>)}
            <br/>
            <button onClick={onSaveForm}>Save</button>
        </div>
    )
}

export default CreateFormPage;