import RequestForm from './RequestForm';
import LinesGraphic from '../LinesGraphic';

export const PackageForm = () => {

    // Changes location of the current window.
    function changeLocation(url) {
        window.location.replace(url);
    }

    function validationCheckRequest(formData) {

        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // Getting the data individually.
        var email = formData.get('email');
        var phoneNumber = formData.get('phone');
        var platform = formData.get('platform');
        var page_url = formData.get('page_url');
        var contact_method = formData.get('contact_method');
        var note = formData.get('note');

        if (email.value.match(mailFormat))
            ;
    }

    function handleSubmit(e) {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        console.log(formData);


        formData.get('email');
        const errors = {};

        const url = './api/contacts.php';

        // Axios code:
        // if (errors == null){
        //     axios.post(url, formData).then(response=> window.setTimeout(changeLocation("/"), 5000)).catch(error=> alert(error));
        // }
        // else{
        // }
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
            </div>
        </div>
    );
};
