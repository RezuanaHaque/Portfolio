import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
const SERVICE_ID = "service_0eavlxc";
const TEMPLATE_ID = "template_vpjohgd";
const USER_ID = "user_Hdm9wAS1IVctl7u3WXbAV";

const ContactForm = () => {
    const [Data, setData] = useState({})
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...Data }
        newData[field] = value
        setData(newData)
        console.log(Data)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, Data, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                })
            });
            // console.log(e.target.value);
        e.target.reset()
    };
    return (

            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="from_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
        />
                <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Name"
                name="from_name"
                placeholder="Name…"
                required
                icon="user circle"
                iconPosition="left"
        />
                <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                name="message"
                placeholder="Message…"
                required
        />
                <Button type="submit" color="green">Submit</Button>
        </Form>
  );
};

export default ContactForm;