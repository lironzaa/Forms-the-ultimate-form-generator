const SubmittedFormField = ({ field }) => {
    const fieldName = Object.keys(field)[0];
    const fieldValue = field[fieldName];
    return (
        <div>
            {fieldName}
            {Array.isArray(fieldValue) ? fieldValue.map((field, index) => (
                <div style={{ marginLeft: '20px' }} key={index}>
                    <SubmittedFormField field={field}/>
                </div>
            )) : `: ${fieldValue}`}
        </div>
    )
}

export default SubmittedFormField;