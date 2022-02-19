import PreviewInput from './PreviewInput';

const PreviewForm = ({ onDelete, form }) => {
    return (
        form.map((input, index) => (
            <div key={index}>
                <PreviewInput input={input} />
                <button onClick={() => onDelete(input)}>Delete</button>
            </div>
        ))
    )
}


export default PreviewForm;