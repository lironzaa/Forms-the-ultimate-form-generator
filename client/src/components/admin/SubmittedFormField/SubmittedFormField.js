import { Text } from "@chakra-ui/react";

const SubmittedFormField = ({ field }) => {
    const fieldName = Object.keys(field)[0];
    const fieldValue = field[fieldName];
    return (
        <div>
            <Text as={'b'} fontSize={"lg"}>{fieldName}</Text>
            {}
            {Array.isArray(fieldValue) ? fieldValue.map((field, index) => (
                <div style={{ marginLeft: '20px' }} key={index}>
                    <SubmittedFormField field={field}/>
                </div>
            )) : `: ${fieldValue}`}
        </div>
    )
}

export default SubmittedFormField;