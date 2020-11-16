import React, { useContext, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './Banner.scss';
import {GymContext} from '../../../App';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    const history = useHistory();
    const { path } = useRouteMatch();
    const { gymDetails, setGymDetails } = useContext(GymContext);
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        history.push('/classes');
    }

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    {
                        path === '/classes' ? <h1 className="main-heading">Our Classes</h1>
                            : path === '/advanceGym' ? <h1 className="main-heading">{gymDetails.name}</h1>
                            : path === '/pricing' ? <h1 className="main-heading">Pricing Plan</h1>
                            : path === '/membership' ? <h1 className="main-heading">Your Gym Membership</h1>
                            : path === '*' ? <h1 className="main-heading">404 Not Found</h1>
                            : <>
                                <div className="col-md-5">
                                    <h1 className="banner-heading">The best fitness studio in town</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, porro delectus. Aperiam, sapiente quod inventore laudantium delectus quaerat voluptates eaque eius fuga aut molestias dolorum magnam voluptatibus magni non unde.</p>
                                    <button className="main-btn" onClick={handleClick}>JOIN US</button>
                                </div>
                                <div className="col-md-7">
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                    <button className="banner-btn" onClick={() => setOpen(true)}>
                                        <FontAwesomeIcon icon={faPlayCircle} />
                                    </button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Banner;