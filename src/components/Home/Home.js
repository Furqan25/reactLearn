import {PropTypes} from 'prop-types';

export default function Home (props){
    const {time} = props;

    return (
        <div>
            <h1>HOME</h1>
            <p>The time now is {new Date(time).toLocaleTimeString()}</p>
        </div>
    );
}

Home.defaultProps = {
    time: Date.now()
}

Home.propTypes = {

}