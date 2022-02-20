import { useState } from "react";
import CreateField from "./CreateField";
import axios from 'axios';


const CreateForm = () => {
    const [state, setState] = useState([{}]);


    const onChange = (newState) => setState(newState);

    const transformData = state => {
        state.splice(-1);
        for(let inp of state) {
            delete inp.isSaved;
            const name = inp.name;
            if(Array.isArray(inp[name])) {
                delete inp.name;
                transformData(inp[name]);
            }
        }
    }

    const onSaveForm = () => {
        const form = [...state];
        transformData(form);

        axios.post('/admin/save-form', { form })
            .then(doc => {
                console.log(doc)
                alert('Form is saved!');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            {state.map((inp, index) => (
                <CreateField key={index}
                    index={index}
                    state={state}
                    onChange={onChange}
                    onSave={onChange}
                // onSubmit={onSubmit}
                />
            ))}
            <br />
            <br />
            <button onClick={onSaveForm}>Save Form</button>
        </>
    )
}

export default CreateForm;