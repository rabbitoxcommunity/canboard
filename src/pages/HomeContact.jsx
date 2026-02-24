import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Aos from 'aos';
import { Table, Accordion, Form } from 'react-bootstrap'

export default function HomeContact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    emailjs.init('U1aOWkKZmomqW8dVS');

    const onSubmit = (data) => {
        console.log(form.current);
        setLoading(true);

        emailjs
            .sendForm('service_x3xbbpd', 'template_desent7', form.current)
            .then(
                () => {
                    reset();
                    setSuccess(true);
                    setLoading(false);
                    // Reset success after 3 seconds
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS error:', error); // Log the error for more context
                    toast.error("Please check your form", { position: "bottom-right" });
                },
            );
    };

    useEffect(function () {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Form className="help-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="ex: john" name='name' {...register("name", { required: true })} />
                        {errors.name && <span>Please enter name</span>}
                    </Form.Group>
                </div>
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="john@gmail.com" name='email' {...register("email", { required: "Please enter email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number" name='phone' {...register("phone", { required: "Please enter phone number" })} />
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </Form.Group>
                </div>
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>You are a:</Form.Label>
                        {/* <Form.Select>
                            <option>ex: dealer</option>
                            <option>Architect</option>
                            <option>Interior Designer</option>
                            <option>Contractor</option>
                            <option>End User</option>
                        </Form.Select> */}
                        <Form.Control type="tel" placeholder="ex: dealer" name='you_are' {...register("you_are")} />
                        {/* {errors.phone && <span>{errors.phone.message}</span>} */}
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="tel" placeholder="Select location" name='state' {...register("state")} />
                    </Form.Group>
                </div>
                <div className="col-md-6 mb-4 form-group">
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="tel" placeholder="Select City" name='city' {...register("city")} />
                    </Form.Group>
                </div>
            </div>
            <div className="mb-4 form-group">
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your question here" name='message' {...register("message", { required: true })} />
                    {errors.message && <span>Please enter message</span>}
                </Form.Group>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 mt-5">
                <Form.Check
                    type="checkbox"
                    label="I consent to have this website store my submitted information so they can respond to my inquiry."
                    className="consent-check d-flex align-items-center w-100 w-60"
                    {...register("consent", { required: true })}
                />

                <button type="submit" className="btn-view submit-btn">Submit</button>
            </div>

            {errors.consent && <div className="form-group"><span className="d-block mt-1">Please agree to continue</span> </div>}

        </Form>
    )
}
