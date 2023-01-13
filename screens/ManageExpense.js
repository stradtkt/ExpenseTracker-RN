import React, { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, far  } from '@fortawesome/free-regular-svg-icons';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

const ManageExpense = ({route, navigation}) => {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);
  
  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  
  const cancelHandler = () => {
    navigation.goBack();
  };
  
  const confirmHandler = (expenseData) => {
    if(isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };
  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId);
  return (
    <View style={styles.container}>
      <ExpenseForm 
        submitButtonLabel={isEditing ? 'Update' : 'Add'} 
        onCancel={cancelHandler} 
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
      <View style={styles.deleteContainer}>
        <IconButton icon={faTrashAlt} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
      </View>
      )
    }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderTopWidth: 2,
      borderTopColor: GlobalStyles.colors.primary200,
      alignItems: 'center'
    },
});
library.add(far, faTrashAlt);
export default ManageExpense;