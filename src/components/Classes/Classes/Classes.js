import React, { useEffect } from 'react';
import Class from '../Class/Class';
import './Classes.scss';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Container from 'react-bootstrap/Container';
import { fetchGymClasses } from '../../../redux/actions/gymClassesActions';
import { connect } from 'react-redux';

const Classes = ({ gymClasses, fetchGymClasses }) => {
    useEffect(() => {
        fetchGymClasses();
    }, []);

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container className="px-0 classes">
                <div className="row">
                    {
                        gymClasses.map(item => <Class key={item._id} gymClass={item}></Class>)
                    }
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        gymClasses: state.classes.gymClasses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchGymClasses: () => dispatch(fetchGymClasses()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);