import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Aos from 'aos';

export default function PContact() {
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
            .sendForm('service_x3xbbpd', 'template_a5q013o', form.current)
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
        <section className='panalex__contact'>
            <div className="container">
                <div className="col-md-9">
                    <h1 data-aos="fade-up">Tell us about your enquiry —
                        we’ll be in touch soon.</h1>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <ul>
                            <li>+91 97460 41799</li>
                            <li>panelex@primeply.in</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="forms">

                                <div className="form-group">
                                     <input type="hidden" name="website" value="Panelex" />
                                    <label htmlFor="">Name</label>
                                    <input type="text" className='form-control' name='name' {...register("name", { required: true })} />
                                    {errors.name && <span>Please enter name</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className='form-control' name='email' {...register("email", { required: "Please enter email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="number" className='form-control' name='phone' {...register("phone", { required: "Please enter phone number", pattern: { value: /^\+?(91)?([6-9]{1})([0-9]{9})$/, message: "Please enter a valid phone number" } })} />
                                    {errors.phone && <span>{errors.phone.message}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Message">Message</label>
                                    <textarea className="form-control" cols="30" name='message' rows="6" {...register("message", { required: true })}></textarea>
                                    {errors.message && <span>Please enter message</span>}
                                </div>
                                {
                                    success && <Alert key={'success'} variant={'success'} className='mb-3'>Thank you for getting in touch!</Alert>
                                }
                                <button type="submit" className="btn btn-dark d-flex align-items-center">Submit {loading && <Spinner style={{ height: '13px', width: '13px', marginLeft: '5px' }} animation="grow" />}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
