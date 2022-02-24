const CreateFormField = ({ onChange, index, form }) => {
    const field = form[index];
    const fieldValue = Object.keys(field)[0];

    const onToggleNested = e => {
        const checked = e.target.checked;
        field[fieldValue] = checked ? [ { '': '' } ] : '';
        onChange();
    }

    const value = field[fieldValue];
    const isNested = Array.isArray(value);

    const onPropertyNameChange = e => {
        form[index] = { [e.target.value]: '' };
        onChange();
    }

    const onDelete = () => {
        form.splice(index, 1);
        onChange();
    }

    const onAddNewField = () => {
        form.push({ '': '' })
        onChange();
    }

    return (
        <div>
            <div>
                <label>
                    <input type='checkbox' checked={isNested} onChange={onToggleNested}/>
                    is Nested
                </label>
                {isNested &&
                    <input type='text' value={fieldValue} onChange={onPropertyNameChange} style={{ marginLeft: '20px' }}
                           placeholder='Nested Property Name'/>}
            </div>
            <br/>
            <div style={{ marginLeft: '20px' }}>
                {isNested ? value.map((field, index) => <CreateFormField form={value} index={index} key={index}
                                                                         field={field}
                                                                         onChange={onChange}/>) : (
                    <div>
                        <input type='text' value={fieldValue} placeholder="Name" onChange={onPropertyNameChange}
                               name={fieldValue}/>
                        {form.length > 1 && <button onClick={onDelete}>Delete</button>}
                        {form.length === index + 1 && <button onClick={onAddNewField}>Add More Field</button>}
                    </div>
                )}
            </div>
            <br/>
        </div>
    )
}

export default CreateFormField;