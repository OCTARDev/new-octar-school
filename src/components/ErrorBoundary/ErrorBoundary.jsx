import React from 'react';
import Spinner from '../Spinner';

/**
 * ErrorBoundary component to handle loading, error, and success states.
 * 
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to render when in success state.
 * @param {boolean} props.isLoading - Flag to indicate if the data is loading.
 * @param {boolean} props.isError - Flag to indicate if there is an error.
 * @param {Object} [props.error] - Error object containing error details.
 * @param {boolean} props.isSuccess - Flag to indicate if the data is successfully loaded.
 * @returns {React.ReactElement} Rendered component based on the state.
 */

const ErrorBoundary = React.memo(({children,isLoading,isError,error ,isSuccess}) => {
    if(isLoading){
        return ( 
        <Spinner />
        )}
    if(isError){
        return <div className='text-center my-10 font-bold capitalize'>{error?.response?.data?.message}</div>
    }

    if(isSuccess){
    return <>{children}</>;
    }

})
ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;