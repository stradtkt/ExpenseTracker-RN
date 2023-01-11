import React from 'react';
import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [];


const ExpensesOutput = ({expenses, expensesPeriodName}) => {
  return (
     <View>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriodName}/>
        <ExpensesList/>
     </View>
  );
}

export default ExpensesOutput;