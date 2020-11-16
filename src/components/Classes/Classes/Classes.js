import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';
import './Classes.scss';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Container from 'react-bootstrap/Container';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container className="px-0 classes">
                <div className="row">
                    {
                        classes.map(item => <Class key={item._id} gymClass={item}></Class>)
                    }
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Classes;