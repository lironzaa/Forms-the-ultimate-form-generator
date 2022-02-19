import { useState } from "react";


const CreateFormField = ({ index = 1, ...props }) => {
    const [state, setState] = useState({});

    const { name = '', inputType = '', type = '', isNested = false, nestedname = '' } = state;

    const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

    const onInputCreate = () => {
        const newState = { ...state };
        if (newState[name]) newState[name] = state;
        else if (props.onInputCreate) return props.onInputCreate(state);
        else newState[name] = state;
        setState(newState);
    }

    return (
        <div>
            <div>
                <input type="checkbox" checked={isNested} onChange={() => setState({ ...state, isNested: !isNested })} />
                {isNested && <input type='text' onChange={onChange} value={nestedname} name="nestedname" placeholder={`Nested Name ${index}`} />}
            </div>
            <br />
            <div>
                <input type="text" value={name} name="name" placeholder="Name" onChange={onChange} />
                <select value={inputType} name='inputType' onChange={onChange}>
                    <option value='input'>Input</option>
                    <option value='textarea'>TextArea</option>
                </select>
                {inputType === 'input' && (
                    <select name='type' value={type} onChange={onChange}>
                        <option value='text'>Text</option>
                        <option value="number">Number</option>
                    </select>
                )}
                <button>Save</button>
            </div>
            <br />
            <br />
            {isNested && (
                <div style={{ marginLeft: '20px' }}>
                    <CreateFormField index={index + 1} onInputCreate={onInputCreate} />
                    <br />
                    <button>Save Nested {index}</button>
                </div>
            )}
        </div>
    )
}

export default CreateFormField;