import {PropTypes} from 'prop-types';

export default function Home (props){
    const {name,active, time} = props;

    return (
        <div>
            <h1>WELCOEM HOME {name}</h1>
            <p>The time now is {new Date(time).toLocaleTimeString()}</p>
            <p>The component is {active ? "active" :"NOT active"} </p>
            {props.children}
        </div>
    );
}

Home.defaultProps = {
    time: Date.now()
}

Home.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    time: PropTypes.number,
    active: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}