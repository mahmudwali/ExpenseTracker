import React from 'react';
import Layout from './../Layout/Layout';
import BtnPage from '../Components/BtnPage';

const ExpenseTransactions = () => {
    return (
      <Layout>
      <BtnPage/>
      <div className="mockup-browser border my-3 bg-base-300">
  <div className="mockup-browser-toolbar">
    <div className="input">www.Expense-Form.com</div>
  </div>


      <div className="FormArea w-50 p-9 bg-orange-50 ">
        <form className="py-5" action="">
        <label className="text-lg mx-2" htmlFor="income">
            Expense Description Here:
          </label>
          <br/>
          <textarea className="p-2 w-96 border rounded-lg" name="" id="" placeholder="Type your Interest..."></textarea>
          <br/>

          <label className="text-lg mx-2" htmlFor="income">
            Expense Amount
          </label>
          <br />
          <input
            className="p-2 w-96 text-lg border rounded-lg"
            type="text"
            id="Income"
            placeholder="Expense Amount"
          />
          <button className="btn btn-success ml-2 hover:bg-white">Add Expense</button>
          
        </form>
      </div>

</div>


    </Layout>
    );
};

export default ExpenseTransactions;