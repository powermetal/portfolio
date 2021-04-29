import React from 'react';
import './Footer.css';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <a><MailIcon /> frank.lopez804@gmail.com</a>
            <a href="https://www.linkedin.com/in/francisco-l%C3%B3pez-892bb2210/" target="_blank"><LinkedInIcon /> My LinkedIn</a>
            <a href="https://github.com/powermetal" target="_blank"><GitHubIcon /> My GitHub</a>
        </div>
    )
}

export default Footer
