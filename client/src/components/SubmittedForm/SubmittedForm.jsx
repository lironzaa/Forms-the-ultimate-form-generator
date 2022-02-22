const SubmittedForm = ({inp}) => {
    const propName = Object.keys(inp)[0];
    const value = inp[propName];
    return (
        <div>
            {propName}
            {Array.isArray(value) ? value.map((inp, index) => (
                <div style={{marginLeft: '20px'}} key={index}>
                    <SubmittedForm inp={inp} />
                </div>
            )) : `: ${value}`}
        </div>
    )
}

export default SubmittedForm;