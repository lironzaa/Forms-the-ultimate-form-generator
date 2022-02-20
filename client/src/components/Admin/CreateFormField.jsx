import { useState } from "react";
import PreviewFormField from "./PreviewFormField";


const CreateFormField = ({ index = 1, ...props }) => {
    const [state, setState] = useState([{}]);

    const onChange = (newState) => setState(newState);

    // const onSubmit = () => setState(state);

    console.log(state);


    return state.map((_, index) => (
        <PreviewFormField key={index}
            index={index}
            state={state}
            onChange={onChange}
            // onSubmit={onSubmit}
        />
    ))
}

export default CreateFormField;