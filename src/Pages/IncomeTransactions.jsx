import React from "react";
import Layout from "./../Layout/Layout";
import BtnPage from "../Components/BtnPage";

const IncomeTransactions = () => {
  return (
    <Layout>
      <BtnPage/>
      <div className="mockup-browser border my-3 bg-base-300">
  <div className="mockup-browser-toolbar">
    <div className="input">www.Income-Form.com</div>
  </div>


      <div className="FormArea w-50 p-9 bg-green-50 ">
        <form className=" py-5" action="">

          <label className="text-lg mx-2" htmlFor="income">
            Income Description Here:
          </label>
          <br/>
          <textarea  className="p-2 w-96 border rounded-lg" name="" id="" placeholder="Type your Interest..."></textarea>
          <br/>
          <label className="text-lg mx-2" htmlFor="income">
            Income Amount
          </label>
          <br />
          <input
            className="p-2 w-96 text-lg border rounded-lg"
            type="text"
            id="Income"
            placeholder="Income Amount"
          />
          <button className="btn btn-success ml-2 hover:bg-white">Add Income</button>
          {/* Add your form fields here to enter expenses */}
        </form>
      </div>

</div>


    </Layout>
  );
};

export default IncomeTransactions;
