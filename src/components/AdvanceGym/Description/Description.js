import React from 'react';
import './Description.scss';

const Description = ({ image, benefits }) => {
    return (
        <div className="description-container">
            <img style={{ height: '400px' }} src={image} alt="" className="img-fluid w-100"/>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat eum minima quo aliquam adipisci culpa optio ducimus odio pariatur iste labore ab amet dolor, maiores animi cum totam eius sapiente nihil quidem deleniti repellendus. Odit iste impedit nobis, voluptatum culpa doloribus. Sequi aut perferendis architecto itaque eligendi earum cumque facere, placeat tenetur reiciendis, officia dolorum pariatur magni consectetur asperiores aliquid minus ducimus perspiciatis saepe rerum et dolor, libero doloremque. Eos, quasi sunt eum quos mollitia deserunt. Commodi molestias tenetur eligendi accusantium ipsam reprehenderit distinctio, quisquam sequi voluptates tempora repellat dicta, vel, ad cum! Cupiditate voluptates velit quas officia eius.</p>
            <ul>
                {
                    benefits.map(item => <li className="mb-2" key={item}>
                        <img src="https://i.imgur.com/rC6gLu5.png" className="mr-2" alt=""/>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Description;