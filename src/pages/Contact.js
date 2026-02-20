import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InnerBanner from '../components/InnerBanner/InnerBanner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)


    const onSubmit = (data) => {
        console.log(form.current)
        setLoading(true);

        emailjs
            .sendForm('service_x3xbbpd', 'template_a5q013o', form.current, {
                publicKey: 'U1aOWkKZmomqW8dVS',
            })
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
                    toast.error("Please check your form", { position: "bottom-right" });
                },
            );


    };

    return (
        <div className='innerpage primeply__contact'>

            <InnerBanner image={'assets/img/contact.jpg'} title='Contact' />
            <section className='pb-0'>
                <div className="container">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Want to know more? </h2>
                    <div className="row justify-content-between">
                        <div className="col-md-5 col-tab-6">
                            <h4 data-aos="fade-up" data-aos-duration="1500">We’re always happy to hear from customers, partners, and distributors.</h4>
                        </div>
                        <div className="col-md-6">
                            <form ref={form} onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" data-aos-duration="3000">
                                <div className="form-group">
                                <input type="hidden" name="website" value="Primeply" />
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name='name' {...register("name", { required: true })} />
                                    {errors.name && <span>Please enter name</span>}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" className="form-control" name='email' {...register("email", { required: "Please enter email",pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Please enter a valid email"}})} />
                                   {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="text" className="form-control" name='phone' {...register("phone", { required: "Please enter phone number",pattern: {value: /^\+?(91)?([6-9]{1})([0-9]{9})$/ ,message: "Please enter a valid phone number"}})} />
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
                                <button type="submit" className="btn btn-primary d-flex align-items-center">Submit {loading && <Spinner style={{ height: '13px', width: '13px', marginLeft: '5px' }} animation="grow" />}</button>


                            </form>
                        </div>
                    </div>
                </div>

                <div className="whatsapp">
                    <div className="container">
                        <h3><a data-aos="fade-up" data-aos-duration="1500" href="https://wa.me/+917478883333" target='_blank'><span>Whatsapp :</span> +91 7478 883 333</a> <br /> <a target='_blank' data-aos="fade-up" data-aos-duration="2000" href="mailto:Info@primeply.in"><span>Email :</span > Info@primeply.in</a></h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact