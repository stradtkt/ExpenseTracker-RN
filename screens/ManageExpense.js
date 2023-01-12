import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, far  } from '@fortawesome/free-regular-svg-icons';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';

const ManageExpense = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);
  
  const deleteExpenseHandler = () => {
    navigation.goBack();
  };
  
  const cancelHandler = () => {
    navigation.goBack();
  };
  
  const confirmHandler = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      minWidth: 120,
      marginHorizontal: 8
    }
});
library.add(far, faTrashAlt);
export default ManageExpense;