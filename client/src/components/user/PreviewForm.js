const PreviewForm = ({ name, ...props }) => {
    const propName = Object.keys(props)[0];
    return (
        <div>
            {name ? (
                <label style={{ display: 'block' }}>
                    {name} <br />
                    <input required={true} type='text' name={name} />
                </label>
            ) : (
                <>
                    {propName} <br />
                    <div style={{ marginLeft: '20px' }}>
                        {props[propName].map((inp, index) => <PreviewForm {...inp} key={index} />)}
                    </div>
                </>
            )}
        </div>
    )
}

export default PreviewForm;