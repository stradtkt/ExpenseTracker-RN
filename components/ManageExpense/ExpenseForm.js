import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import Button from '../ui/Button';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '', 
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });
   const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            };
        });
   }
   const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;
        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert("Invalid Input", "Please check your input values and try again.");
            setInputs((currentInputs) => {
                return {
                    amount: {value: currentInputs.amount.value, isValid: amountIsValid},
                    date: {value: currentInputs.date.value, isValid: dateIsValid},
                    description: {value: currentInputs.description.value, isValid: descriptionIsValid},
                };
            });
            return;
        }
        onSubmit(expenseData);
   }
   const formIsInvalid = 
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
            <Input label="Amount" style={styles.rowInput} invalid={!inputs.amount.isValid} textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: inputChangedHandler.bind(this, 'amount'),
                value: inputs.amount.value
            }}/>
            <Input label="Date" style={styles.rowInput} invalid={!inputs.date.isValid} textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                keyboardType: "decimal-pad",
                maxLength: 10,
                onChangeText: inputChangedHandler.bind(this, 'date'),
                value: inputs.date.value
            }}/>
        </View>
        <Input label="Description" invalid={!inputs.description.isValid} textInputConfig={{
            maxLength: 100,
            autoCapitalize: 'sentences',
            multiline: true,
            autoCorrect: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputs.description.value
        }}/>
        {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: '#777',
        textShadowOffset: {width: 0, height: 0.5},
        textShadowRadius: 1,
        marginTop: 10,
        marginBottom: 10
    }
});

export default ExpenseForm;