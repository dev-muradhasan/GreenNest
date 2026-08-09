

const MyContainer = ({children, className}) => {
    return (
        <div className={`${className} max-w-screen-2xl w-full mx-auto px-4 md:px-6 lg:px-10`}>
            {children}
        </div>
    );
};

export default MyContainer;