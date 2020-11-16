import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.scss';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    const history = useHistory();
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        history.push('/classes');
    }

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="banner-heading">The best fitness studio in town</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, porro delectus. Aperiam, sapiente quod inventore laudantium delectus quaerat voluptates eaque eius fuga aut molestias dolorum magnam voluptatibus magni non unde.</p>
                        <button className="main-btn" onClick={handleClick}>JOIN US</button>
                    </div>
                    <div className="col-md-7">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        <button className="banner-btn" onClick={() => setOpen(true)}>
                            <FontAwesomeIcon  icon={faPlayCircle} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;