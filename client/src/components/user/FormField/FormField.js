const FormField = ({ onChange, field }) => {
    const fieldName = Object.keys(field)[0];
    const fieldValue = field[fieldName];

    const onInputChange = e => {
        field[fieldName] = e.target.value;
        onChange();
    }

    return (
        <div>
            {Array.isArray(fieldValue) ? (
                <div>
                    {fieldName}
                    <div style={{ marginLeft: '20px' }}>
                        {fieldValue.map((field, index) => (
                            <FormField
                                field={field}
                                key={index}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <label style={{ display: 'block' }}>
                    {fieldName} <br/>
                    <input required={true} onChange={onInputChange} value={field[fieldName]} type='text'
                           name={fieldName}/>
                </label>
            )}
        </div>
    )
}

export default FormField;