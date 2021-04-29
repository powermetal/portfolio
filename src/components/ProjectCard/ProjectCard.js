import React from 'react';
import './ProjectCard.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Button from '../Button/Button';
import ImageSlider from '../ImageSlider/ImageSlider';
import Keywords from '../Keywords/Keywords';

const ProjectCard = ({ title, text, images, demo, git, flip, keywords }) => {

    const renderContent = () => {
        if (!flip) {
            return (
                <div className="card">
                    <div className="card-main">
                        <div className="card-info">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <Keywords keywords={keywords} />
                        </div>
                        <div className="card-links">
                            <Button icon={<LinkIcon />} label="Try it!" url={demo} />
                            <Button icon={<GitHubIcon />} label="View on GitHub" url={git} />
                        </div>
                    </div>
                    <ImageSlider images={images} />
                </div>
            )
        }
        else
            return (
                <div className="card">
                    <ImageSlider images={images} />
                    <div className="card-main">
                        <div className="card-info">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <Keywords keywords={keywords} />
                        </div>
                        <div className="card-links">
                            <Button icon={<LinkIcon />} label="Try it!" url={demo} />
                            <Button icon={<GitHubIcon />} label="View on GitHub" url={git} />
                        </div>
                    </div>
                </div>
            )
    }

    return (
        renderContent()
    )
}

export default ProjectCard
