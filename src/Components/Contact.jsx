import { FaEnvelope, FaPhone, FaLinkedin, FaUser } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ka3w28q",
            "template_2whkacb",
            e.target,
            "Ks6p7fD0MtIYJhoWs"
        ).then(
            (result) => {
                toast.success("Message sent successfully!");
            },
            (error) => {
                alert("Failed to send message. Please try again.");
            }
        );

        e.target.reset();
    };
    return (
        <section className="bg-base-100 mb-16 py-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Contact Information
            </h2>
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Contact Info */}
                <div className="space-y-4 text-lg">
                    <p className="flex items-center gap-3 text-2xl font-semibold ">
                        S.K. Nahid
                    </p>
                    <p className="flex items-center gap-3">
                        <CiLocationOn className="text-primary"/>Dhaka, Bangladesh
                    </p>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sknahid0111@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:underline"
                    >
                        <FaEnvelope className="text-primary" /> sknahid0111@gmail.com
                    </a>

                    <a
                        href="https://wa.me/88017327147"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:underline"
                    >
                        <BsWhatsapp className="text-primary"/> +88017327147
                    </a>


                    <p className="flex items-center gap-3">
                        <FaLinkedin className="text-primary" />
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            linkedin.com/in/yourprofile
                        </a>
                    </p>
                </div>

                {/* Right Side - Contact Form */}
                <form onSubmit={sendEmail} className="space-y-4">
                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                    <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full h-32" required></textarea>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
}
