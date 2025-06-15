/*
================================================================================
|                          src/sections/Contact.tsx                           |
================================================================================
| Description: The contact section with a form handled by Formspree and links  |
|              to social profiles.                                             |
================================================================================
*/
import Section from '../components/Section';
import Button from '../components/ui/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-dark-200/50">
            <h2 className="text-3xl font-bold text-center mb-12">
                Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="max-w-xl mx-auto glass p-8 md:p-12 rounded-xl">
                <form action="[https://formspree.io/f/YOUR_UNIQUE_ID](https://formspree.io/f/YOUR_UNIQUE_ID)" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input type="text" name="name" id="name" required className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input type="email" name="email" id="email" required className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea name="message" id="message" rows={4} required className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    </div>
                    <div>
                        <Button className="w-full">Send Message</Button>
                    </div>
                </form>
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">Or reach out via my socials:</p>
                <div className="flex justify-center gap-6">
                    <a href="[https://github.com/your-username](https://github.com/your-username)" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Github size={28} /></a>
                    <a href="[https://linkedin.com/in/your-username](https://linkedin.com/in/your-username)" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={28} /></a>
                    <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-accent transition-colors"><Mail size={28} /></a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;