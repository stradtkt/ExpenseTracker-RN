import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import Button from '../ui/Button';

const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel}) => {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });
   const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
   }
   const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };
        onSubmit(expenseData);
   }
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
            <Input label="Amount" style={styles.rowInput} textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: inputChangedHandler.bind(this, 'amount'),
                value: inputValues.amount
            }}/>
            <Input label="Date" style={styles.rowInput} textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                keyboardType: "decimal-pad",
                maxLength: 10,
                onChangeText: inputChangedHandler.bind(this, 'date'),
                value: inputValues.date
            }}/>
        </View>
        <Input label="Description" textInputConfig={{
            maxLength: 100,
            autoCapitalize: 'sentences',
            multiline: true,
            autoCorrect: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputValues.description
        }}/>
        <View style={styles.buttons}>
            <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    form: {
        marginTop: 60,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});

export default ExpenseForm;