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
                    <div className="col-md-5">
                        <ul>
                            <li>+91 9895 112 233</li>
                            <li>info@canboard.in</li>
                        </ul>
                    </div>
                    <div className="col-md-7">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="forms">
                                <input type="hidden" name="website" value="Panelex" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className='form-control' id="name" placeholder="ex: john" name='name' {...register("name", { required: true })} />
                                            {errors.name && <span>Please enter name</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" className='form-control' id="email" placeholder="john@gmail.com" name='email' {...register("email", { required: "Please enter email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} />
                                            {errors.email && <span>{errors.email.message}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" className='form-control' id="phone" placeholder="Enter your phone number" name='phone' {...register("phone", { required: "Please enter phone number" })} />
                                            {errors.phone && <span>{errors.phone.message}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                                            <label htmlFor="userType">You are a:</label>
                                            <input type="text" className='form-control' id="userType" placeholder="ex: dealer" name='userType' {...register("userType")} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                                            <label htmlFor="state">State</label>
                                            <input type="text" className='form-control' id="state" placeholder="Select location" name='state' {...register("state")} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                                            <label htmlFor="city">City</label>
                                            <input type="text" className='form-control' id="city" placeholder="Select city" name='city' {...register("city")} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" cols="30" placeholder="Enter your question here" name='message' rows="5" {...register("message", { required: true })}></textarea>
                                    {errors.message && <span>Please enter message</span>}
                                </div>

                                {success && <Alert key={'success'} variant={'success'} className='mb-3'>Thank you for getting in touch!</Alert>}

                                <div className="row align-items-center mt-5" data-aos="fade-up" data-aos-delay="700">
                                    <div className="col-md-8">
                                        <div className="consent-check d-flex align-items-center">
                                            <input type="checkbox" id="consent" {...register("consent", { required: true })} />
                                            <label htmlFor="consent" className="ms-3">I consent to have this website store my submitted information so they can respond to my inquiry.</label>
                                        </div>
                                        {errors.consent && <span className="d-block mt-1">Please agree to continue</span>}
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <button type="submit" className="submit-btn" disabled={loading}>
                                            Submit {loading && <Spinner size="sm" className="ms-2" animation="border" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
