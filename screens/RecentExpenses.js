import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';


const RecentExpenses = () => {
  return (
     <ExpensesOutput expensesPeriodName="Last 7 Days" />
  );
}

const styles = StyleSheet.create({
    
});

export default RecentExpenses;