import React from 'react';
import Layout from './../Layout/Layout';
import BtnPage from '../Components/BtnPage';



const HomePage = () => {
    return (
        <Layout>
            <BtnPage/>
            <div className="container mx auto text-center p-9">
                <div className="..">
                    <h1>Welcome to Expense tracker App.</h1>
                    <span className="loading loading-ring loading-lg"></span>

                </div>
            </div>
        </Layout>
    );
};

export default HomePage;