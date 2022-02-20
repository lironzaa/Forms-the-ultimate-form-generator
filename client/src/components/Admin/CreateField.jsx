import PreviewField from "./PreviewField";

const CreateField = ({
    level = 0,
    onChange,
    state,
    index,
}) => {

    const newState = [...state];

    const data = newState[index];

    const { name = '', inputType = '', type = '', nestedname = '', isSaved = false } = data

    if(isSaved) return <PreviewField {...data} />

    const key = nestedname + index;

    const nestedData = data[key];

    const isNested = nestedData ? true : false;

    const onNestedChange = () => {
        if (isNested) delete data[key];
        else data[key] = [{}];
        onChange(newState);
    }

    const onInputChange = e => {
        data[e.target.name] = e.target.value;
        onChange(newState);
    }

    const onNestedNameChange = e => {
        const nestedname = e.target.value;
        const newData = [...data[key]];
        delete data[key];
        data[nestedname + index] = newData;
        data.nestedname = nestedname;
        onChange(newState);
    }

    const onNestedDataChange = (data) => {
        const newState = [...state];
        newState[index][key] = data;
        onChange(newState);
    }

    const onSave = () => {
        data.isSaved = true;
        newState.push({});
        onChange(newState);
    }



    return (
        <div>
            <h1>{index + 1}:{level}</h1>
            <div>
                <label><input type="checkbox" checked={isNested} onChange={onNestedChange} /> isNested</label>
                {isNested && <input type='text' autoFocus={true} onChange={onNestedNameChange} value={nestedname} name="nestedname" placeholder={`Nested Name ${index}`} />}
            </div>
            {nestedname !== "" && nestedData && nestedData.map((_, i) => (
                <div key={i} style={{ marginLeft: '20px' }}>
                    <CreateField
                        index={i}
                        onChange={onNestedDataChange}
                        level={level + 1}
                        state={nestedData}
                    />
                </div>
            ))}
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
                    {name !== "" && <button onClick={onSave}>Save</button>}
                </div>
            )}
        </div>
    )
}

export default CreateField;