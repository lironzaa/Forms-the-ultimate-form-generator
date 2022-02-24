import FormField from "../FormField/FormField";

const FormFields = ({ fields, onChange, onSubmit, isSubmitting }) => {

    return (
        <div>
            <form onSubmit={onSubmit}>
                {fields.map((field, index) => <FormField onChange={onChange} field={field} key={index}/>)}
                <br/>
                {isSubmitting ? 'Submitting...' : <button>Save</button>}
            </form>
        </div>
    )
}

export default FormFields;