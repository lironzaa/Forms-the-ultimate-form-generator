import { useState } from "react";

const PrevewCreateFormField = ({ index }) => {
    const [state, setState] = useState({});
    const { name = '', inputType = '', type = '', isNested = false } = state;
    const onChange = e => ({ ...state, [e.target.name]: e.target.value });
    return (
        <>
            <div>
                <input type="checkbox" checked={isNested} onChange={() => setState({ ...state, isNested: !isNested })} />
                {isNested && <input type='text' onChange={onChange} value={name} name="name" placeholder={`Nested Name ${index}`} />}
            </div>

            {!isNested && (
                <div>
                    <br />
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
            )}
            <br />
            <br />
        </>
    )
}

export default PrevewCreateFormField;