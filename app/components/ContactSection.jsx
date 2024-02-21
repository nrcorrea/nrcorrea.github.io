"use client";
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    const [iconSize, setIconSize] = useState('2x'); // Default icon size

    function Submit(e) {
        const formElement = document.querySelector('form');
        e.preventDefault();
        console.log("submitted");
        const formData = new FormData(formElement);
        fetch("https://script.google.com/macros/s/AKfycbyP4vlIbgx8F2w62tFeRZhkUzRQGayHI6f7qV5Rb5sz-PyvS4zHMES7uLefiRicjYuyqA/exec", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if(response.ok) {
                formElement.reset();
                return response.text();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .then(data => {
            console.log(data);
            formElement.reset();
        })
        .catch(error => {
            console.error("Error:", error);
        });
        formElement.reset();
    }



    useEffect(() => {
        const handleResize = () => {
            // Update the state based on the condition you define for your screen size
            if (window.innerWidth >= 768) { // Example breakpoint at 768px
                setIconSize('4x');
            } else {
                setIconSize('2x');
            }
        };

        // Set the icon size initially
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
      <section id="contact" className=" py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-[#116466] font-extrabold text-4xl md:text-6xl mb-8">Contact Me</h2>
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {/* Update Link usage here */}
              <Link href="https://github.com/nrcorrea" className="text-[#116466] hover:text-[#57726b]">
                <FontAwesomeIcon icon={faGithub} className={`fa-${iconSize}`}></FontAwesomeIcon>
              </Link>
              <Link href="https://linkedin.com/in/nrcorrea" className="text-[#116466] hover:text-[#57726b]">
                <FontAwesomeIcon icon={faLinkedin} className={`fa-${iconSize}`}></FontAwesomeIcon>
              </Link>
            </div>
            <div>
            <a
                href="/documents/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 w-full text-lg sm:w-fit rounded-full bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531]"
                >
                Download Resume
                </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col" >
                <label htmlFor="Name" className="text-[#116466] mb-2">Your Email:</label>
                <input type="Name" id="Name" placeholder='Name' name="Name" required className="mb-4 p-2 border border-[#2C3531] rounded-md"/>
                <label htmlFor="Email" className="text-[#116466] mb-2">Your Email:</label>
                <input type="Email" id="Email" placeholder='Email' name="Email" required className="mb-4 p-2 border border-[#2C3531] rounded-md"/>
                <label htmlFor="Subject" className="text-[#116466] mb-2">Subject:</label>
                <input type="text" id="Subject" placeholder="Subject" name="Subject" required className="mb-4 p-2 border border-[#2C3531] rounded-md"/>
                <label htmlFor="Message" className="text-[#116466] mb-2">Message:</label>
                <textarea id="Message" name="Message" placeholder='Message'required className="mb-4 p-2 border border-[#2C3531] rounded-md"></textarea>
                <button type="submit" className="px-6 py-3 rounded-full bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531] font-bold" onClick={(e)=>Submit(e)}>Send</button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;