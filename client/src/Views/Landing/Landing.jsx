import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h2>PI Dogs</h2>
            <Link to='/dogs'>
                Iniciar
            </Link>
        </div>
    )
}

export default Landing;