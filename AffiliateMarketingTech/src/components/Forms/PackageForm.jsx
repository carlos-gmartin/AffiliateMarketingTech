import { useState } from 'react'
import RequestForm from './RequestForm';
import LinesGraphic from '../LinesGraphic';

import axios from "axios";

const PackageForm = () => {
    const [error, setError] = useState(null);

    // Changes location of the current window.
    function changeLocation(url) {
        window.location.replace(url)
    }

    function validationCheckRequest(formData) {

        // Formats
        const fullNameFormat = /^[a-zA-Z0-9_. -]{0,40}$/
        const buisnessFormat = /^[a-zA-Z0-9_. -]{0,30}$/
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneFormat = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
        const platformFormat = /^[a-zA-Z0-9_. -]{0,30}$/;
        const urlFormat = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/ig
        const contactFormat = /^[a-zA-Z0-9_. -]{0,30}$/
        const noteFormat = /^[a-zA-Z0-9_. -]{0,100}$/;

        var formats = [fullNameFormat, buisnessFormat, mailFormat, phoneFormat, platformFormat, urlFormat, contactFormat, noteFormat];

        // Getting the data individually.
        var data = [formData.get('name'), formData.get('business_name'), formData.get('email'), formData.get('phone'), formData.get('platform'), formData.get('page_url'), formData.get('contact_method'), formData.get('note')];
        // Store errors detected from the validation
        var errors = [];

        // Validate all fields and store values in an errors array.
        for (var i = 0; i < data.length - 1; i++) {
            if (!data[i].match(formats[i])) {
                errors.push(data[i]);
            }
            else if (data[i].length >= 300) {
                errors.push("This " + x + "has too many characters!");
            }
        }
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        var errors = []
        errors = validationCheckRequest(formData);
        // console.log(errors);

        const url = './api/contacts.php';
        // Axios code:
        if (errors == undefined || errors.length == 0) {
            axios.post(url, formData).then(response=> alert(response.data)).catch(error=> alert(error));
        }
        else {
            setError("Please fix these inputs: " + errors);
        }
    }
    return (
        <div>
            <LinesGraphic></LinesGraphic>
            <div className="container my-10 mx-auto md:px-6">
                <section className="mb-32">
                </section>
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6x">Apply for a solution now!</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We will get in contact with you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <RequestForm></RequestForm>
                </form>
                <div className="flex flex-col justify-center">
                    <p className="mb-5 text-lg mt-5 font-normal text-gray-900 md:text-3xl lg:text-6x">{error}</p>
                </div>
            </div>
        </div>
    )
}

export default PackageForm;