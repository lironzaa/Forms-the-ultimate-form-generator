const PreviewField = ({ name, inputType, type, ...props }) => {
    return (
        <div>
            {name && (
                <label style={{ display: 'block' }}>
                    {name} <br />
                    {inputType === 'textarea' ? <textarea name={name}></textarea> : <input name={name} type='text' />}
                </label>
            )}
            {Object.keys(props).map((key, index) => <PreviewField key={index} {...props[key]} />)}
        </div>
    )
}

export default PreviewField;