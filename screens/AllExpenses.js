import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
  return (
    <ExpensesOutput expensesPeriodName="Total" />
  );
}

const styles = StyleSheet.create({
    
});

export default AllExpenses;