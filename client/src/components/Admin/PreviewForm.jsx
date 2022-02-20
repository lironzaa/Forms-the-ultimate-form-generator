const PreviewForm = ({ name, ...props }) => {
    return (
        <div>
            {name && (
                <label style={{ display: 'block' }}>
                    {name} <br />
                    <input name={name} type='text' />
                </label>
            )}
            <div style={{ marginLeft: '20px' }}>
                {Object.keys(props).map((key, index) => <PreviewForm key={index} {...props[key]} />)}
            </div>
        </div>
    )
}

export default PreviewForm;