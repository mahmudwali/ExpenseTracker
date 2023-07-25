import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import IncomeTransactions from './Pages/IncomeTransactions';
import ExpenseTransactions from './Pages/ExpenseTransactions';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/income' element={<IncomeTransactions/>}/>
          <Route path='/expense' element={<ExpenseTransactions/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;