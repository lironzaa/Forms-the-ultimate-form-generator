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

    const { name = '', isSaved = false } = data

    if (isSaved) return <PreviewField {...data} />

    const key = name;

    const nestedData = data[key];

    const isNestedData = nestedData ? true : false;

    const onNestedChange = (e) => {
        const checked = e.target.checked;
        if (checked) data[key] = [{}];
        else delete data[key];
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
        data[name] = newData;
        data.name = name;
        onChange(newState);
    }

    const onNestedDataChange = () => onChange(newState);

    const onInputSave = (newData = true) => {
        if (typeof newData === 'boolean') {
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
                    {name !== "" && <button onClick={() => onInputSave(true)}>Save</button>}
                </div>
            )}
        </div>
    )
}

export default CreateField;