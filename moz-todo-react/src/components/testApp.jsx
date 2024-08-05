import Form from "./testForm";
import React, { useState } from "react";

export default function App(props) {
    const [FormData, setFormData] = useState("");

    const updateFormData = (data) => {
        setFormData(data);
    }

    return (
        <>
           <Form updateFData={updateFormData} />
           <div>This is the form data: {FormData}</div>
        </>
    )
}