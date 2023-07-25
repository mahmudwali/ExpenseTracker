import React from 'react';
import { NavLink } from 'react-router-dom';

const BtnPage = () => {
    return (
        <div>
            <div className="container mx auto p-9 text-center   ">
                <button className='btn btn-success mr-2 hover:bg-white '> <NavLink to={"/income"} >Go to Income Page</NavLink> </button>
                <button className='btn btn-warning hover:bg-white'><NavLink to={"/expense"}>Go to Expense Page</NavLink></button>
            </div>





            
        </div>
    );
};

export default BtnPage;