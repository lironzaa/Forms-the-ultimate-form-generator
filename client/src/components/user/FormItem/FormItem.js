import { Link } from "react-router-dom";

const FormItem = ({ formId }) => {
    return (
        <div>
            <Link style={{ display: 'block', marginBottom: '10px' }} to={`/form/${formId}`}>
                {formId}
            </Link>
        </div>
    )
}

export default FormItem;