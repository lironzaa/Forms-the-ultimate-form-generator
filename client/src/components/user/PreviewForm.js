const PreviewForm = ({ onChange, inp }) => {
    const name = Object.keys(inp)[0];
    const value = inp[name];
    const onInputChange = e => {
        inp[name] = e.target.value;
        onChange();
    }
    return (
        <div>
            {Array.isArray(value) ? (
                <>
                    {name}
                    <div style={{ marginLeft: '20px' }}>
                        {value.map((inp, index) => (
                            <PreviewForm
                                inp={inp}
                                key={index}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <label style={{ display: 'block' }}>
                    {name} <br/>
                    <input required={true} onChange={onInputChange} value={inp[name]} type='text' name={name}/>
                </label>

            )}
        </div>
    )
}

export default PreviewForm;