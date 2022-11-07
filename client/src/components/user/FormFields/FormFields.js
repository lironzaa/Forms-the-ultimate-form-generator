import FormField from "../FormField/FormField";
import { Button } from "@chakra-ui/react";

const FormFields = ({ fields, onChange, onSubmit, isSubmitting }) => {

    return (
        <div>
            <form onSubmit={onSubmit}>
                {fields.map((field, index) => <FormField onChange={onChange} field={field} key={index}/>)}
                <br/>
                {isSubmitting ? 'Submitting...' : <Button type="submit" width={"100%"} colorScheme='blue'>Button</Button>}
            </form>
        </div>
    )
}

export default FormFields;