import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';


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
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;