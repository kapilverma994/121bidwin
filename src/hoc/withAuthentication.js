import { Redirect } from "react-router-dom";

const withAuthentication = (WrappedComponent) => (props) => {
    const isUserLogIn = sessionStorage.getItem('token');
    if (isUserLogIn != null) {
        return (
            <WrappedComponent
                {...props}
                user_id={sessionStorage.getItem('token')}
            />
        );
    } else {
        return <Redirect to='/login' />
    }
}

export default withAuthentication;
