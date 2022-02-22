const CreateForm = ({ onChange, index, form }) => {
    const inp = form[index];
    const name = Object.keys(inp)[0];

    const onToggleNested = e => {
        const checked = e.target.checked;
        inp[name] = checked ? [{ '': '' }] : '';
        onChange();
    }

    const value = inp[name];
    const isNested = Array.isArray(value);

    const onPropertyNameChange = e => {
        const name = e.target.value;
        form[index] = { [name]: '' };
        onChange();
    }

    const onDelete = () => {
        form.splice(index, 1);
        onChange();
    }

    const onAddNewField = () => {
        form.push({'': ''})
        onChange();
    }
    
    return (
        <div>

            <div>
                <label>
                    <input type='checkbox' checked={isNested} onChange={onToggleNested} />
                    is Nested
                </label>
                {isNested && <input type='text' value={name} onChange={onPropertyNameChange} style={{ marginLeft: '20px' }} placeholder='Nested Property Name' />}
            </div>

            <br />

            <div style={{ marginLeft: '20px' }}>
                {isNested ? value.map((inp, index) => <CreateForm form={value} index={index} key={index} inp={inp} onChange={onChange} />) : (
                    <div>
                        <input type='text' value={name} placeholder="Name" onChange={onPropertyNameChange} name={name} />
                        {form.length > 1 && <button onClick={onDelete}>Delete</button>}
                        {form.length === index + 1 && <button onClick={onAddNewField}>Add More Field</button>}
                    </div>
                )}
            </div>
            <br />
        </div>
    )
}

export default CreateForm;