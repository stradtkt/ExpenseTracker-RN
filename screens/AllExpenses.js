import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriodName="Total" fallbackText="No expenses registered."/>
  );
}

const styles = StyleSheet.create({
    
});

export default AllExpenses;