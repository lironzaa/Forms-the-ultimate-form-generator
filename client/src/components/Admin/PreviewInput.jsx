const PreviewInput = ({ input }) => {
    return (
        <div>
            {input.name} <br />
            {input.inputType === 'input' ? (
                <input name={input.name} type={input.type} />
            ) : (
                <textarea name={input.name}></textarea>
            )}
        </div>
    )
}

export default PreviewInput