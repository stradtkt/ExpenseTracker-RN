import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDayMinusDays } from '../util/date';


const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDayMinusDays(today, 7);
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
  return (
     <ExpensesOutput expenses={recentExpenses} expensesPeriodName="Last 7 Days" fallbackText="No expenses registered for the last 7 days." />
  );
}

const styles = StyleSheet.create({
    
});

export default RecentExpenses;