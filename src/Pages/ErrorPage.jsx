import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);  

    return (
        <div>
            <h1>Oops! An error occurred</h1>
            {error && error.data ? (
                <p>{error.data}</p>
            ) : (
                <p>Something went wrong. Please try again later.</p>
            )}
            <NavLink to="/">
                <button>Back To Home Page</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;
