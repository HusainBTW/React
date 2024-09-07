import { useLocation } from 'react-router-dom';

function Error() {
    const location = useLocation();
    const message = location.state?.message || "Unknown error occurred.";

    return (
        <div>
            <h1>Error</h1>
            <p>{message}</p>
        </div>
    );
}

export default Error;
