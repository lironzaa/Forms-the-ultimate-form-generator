import { useState } from 'react';
import CreateInput from '../components/Admin/CreateInput';
import PreviewForm from '../components/Admin/PreviewForm';
// import SaveForm from '../components/Admin/SaveForm';

const AdminPage = () => {
    const [form, setForm] = useState([]);
    const onSubmit = (input) => {
        const oldInput = form.find(inp => inp.name === input.name);
        if (oldInput) alert('Input with this name already exists!');
        else setForm([...form, input]);
    }
    const onDelete = input => {
        const newForm = form.filter(inp => inp.name !== input.name);
        setForm(newForm);
    }


    return (
        <div>
            <h1>Admin Page</h1>
            <CreateInput onSubmit={onSubmit} />
            <PreviewForm form={form} onDelete={onDelete} />
        </div>
    )
}

export default AdminPage;