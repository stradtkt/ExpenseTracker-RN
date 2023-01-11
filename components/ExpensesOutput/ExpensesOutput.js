import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 129.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'An apple watch',
        amount: 429.99,
        date: new Date('2022-12-31')
    },
    {
        id: 'e3',
        description: 'Gas',
        amount: 32.12,
        date: new Date('2023-01-01')
    },
    {
        id: 'e4',
        description: 'A new grill',
        amount: 199.99,
        date: new Date('2021-01-09')
    },
    {
        id: 'e5',
        description: 'Gas',
        amount: 32.12,
        date: new Date('2023-01-01')
    },
    {
        id: 'e6',
        description: 'Food',
        amount: 22.62,
        date: new Date('2023-01-08')
    },
];


const ExpensesOutput = ({expenses, expensesPeriodName}) => {
  return (
     <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriodName}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;