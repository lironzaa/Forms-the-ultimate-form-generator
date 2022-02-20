import { useState } from "react";
import CreateField from "./CreateField";


const CreateForm = ({ index = 1, ...props }) => {
    const [state, setState] = useState([{}]);

    const onChange = (newState) => setState(newState);



    return state.map((_, index) => (
        <CreateField key={index}
            index={index}
            state={state}
            onChange={onChange}
            // onSubmit={onSubmit}
        />
    ))
}

export default CreateForm;