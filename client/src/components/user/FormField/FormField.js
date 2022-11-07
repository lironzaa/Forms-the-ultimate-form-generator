import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormField = ({ onChange, field }) => {
    const fieldName = Object.keys(field)[0];
    const fieldValue = field[fieldName];

    const onInputChange = e => {
        field[fieldName] = e.target.value;
        onChange();
    }

    return (
        <div>
            {Array.isArray(fieldValue) ? (
                <div>
                    <FormLabel fontSize={"3xl"}>{fieldName} section :</FormLabel>
                    <div style={{ marginLeft: '20px' }}>
                        {fieldValue.map((field, index) => (
                            <FormField
                                field={field}
                                key={index}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <FormControl>
                <FormLabel>{fieldName}</FormLabel>
                <Input required={true} onChange={onInputChange} value={field[fieldName]}
                type='text' name={fieldName} />
                </FormControl>
            )}
        </div>
    )
}

export default FormField;