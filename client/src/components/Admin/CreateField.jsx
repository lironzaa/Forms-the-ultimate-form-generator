import PreviewField from "./PreviewField";

const CreateField = ({
    level = 0,
    onChange,
    state,
    index,
    onSave,
    isNested = false
}) => {

    const newState = isNested ? state : [...state];

    const data = newState[index];

    const { name = '', inputType = 'input', type = '', isSaved = false } = data

    if (isSaved) return <PreviewField {...data} />

    const key = name + index;

    const nestedData = data[key];

    const isNestedData = nestedData ? true : false;

    const onNestedChange = () => {
        if (isNestedData) delete data[key];
        else data[key] = [{}];
        onChange(newState);
    }

    const onInputChange = e => {
        data[e.target.name] = e.target.value;
        onChange(newState);
    }

    const onNestedNameChange = e => {
        const name = e.target.value;
        const newData = [...data[key]];
        delete data[key];
        data[name + index] = newData;
        data.name = name;
        onChange(newState);
    }

    const onNestedDataChange = (data) => {
        const newState = [...state];
        newState[index][key] = data;
        onChange(newState);
    }

    const onInputSave = (newData = true) => {
        if(typeof newData === 'boolean') {
            data.isSaved = true;
            newState.push({});
        }
        onSave(newState);
    }



    return (
        <div>
            <h1>{index + 1}:{level}</h1>
            <div>
                <label><input type="checkbox" checked={isNestedData} onChange={onNestedChange} /> isNested</label>
                {isNestedData && <input type='text' autoFocus={true} onChange={onNestedNameChange} value={name} name="name" placeholder={`Nested Name ${index}`} />}
            </div>
            {name !== "" && nestedData && (
                <>
                    {nestedData.map((_, i) => (
                        <div key={i} style={{ marginLeft: '20px' }}>
                            <CreateField
                                index={i}
                                onChange={onNestedDataChange}
                                level={level + 1}
                                state={nestedData}
                                onSave={onInputSave}
                                isNested={true}
                            />
                        </div>
                    ))}
                    {nestedData[0].isSaved && (
                        <>
                            <br />
                            <button onClick={() => onInputSave(true)}>Save {index + 1}:{level}</button>
                        </>
                    )}
                </>
            )}
            {!nestedData && (
                <div>
                    <input type="text" value={name} name="name" placeholder="Name" onChange={onInputChange} />
                    <select value={inputType} name='inputType' onChange={onInputChange}>
                        <option value='input'>Input</option>
                        <option value='textarea'>TextArea</option>
                    </select>
                    {inputType === 'input' && (
                        <select name='type' value={type} onChange={onInputChange}>
                            <option value='text'>Text</option>
                            <option value="number">Number</option>
                        </select>
                    )}
                    {name !== "" && <button onClick={() => onInputSave(true)}>Save</button>}
                </div>
            )}
        </div>
    )
}

export default CreateField;