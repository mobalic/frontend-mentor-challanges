'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Card from '@/components/card/Card';
import styles from './page.module.css';
import CardForm from '@/components/cardForm/CardForm';
import { Errors, FormData } from '@/models/types';
import Success from '@/components/success/Success';

export default function Home() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cardholderName: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
  });

  const [errors, setErrors] = useState<Errors>({
    cardholderName: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateInput(name, value);

    if (name === 'cardNumber') {
      let formatValue = value.replace(/\s/g, ''); // Remove existing spaces
      formatValue = formatValue.replace(/(.{4})/g, '$1 ');

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: formatValue.trimEnd(),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const validateInput = (name: string, value: string) => {
    let errorMessage = '';

    switch (name) {
      case 'cardNumber':
        errorMessage =
          value.trim() === ''
            ? "Can't be blank"
            : !/^\d+$/.test(value.replace(/\s/g, ''))
            ? 'Wrong format, numbers only'
            : value.replace(/\s/g, '').length !== 16
            ? 'Sixteen digits required'
            : '';
        break;

      case 'cardholderName':
        errorMessage = value.trim() === '' ? "Can't be blank" : '';
        break;

      case 'expirationMonth':
        errorMessage =
          value.trim() === ''
            ? "Can't be blank"
            : !/^\d{2}$/.test(value) ||
              parseInt(value, 10) < 1 ||
              parseInt(value, 10) > 12
            ? 'Wrong format'
            : '';
        break;
      case 'expirationYear':
        errorMessage =
          value.trim() === ''
            ? "Can't be blank"
            : !/^\d{2}$/.test(value) || parseInt(value, 10) < 0
            ? 'Wrong format'
            : '';
        break;

      case 'cvc':
        errorMessage =
          value.trim() === ''
            ? "Can't be blank"
            : !/^\d{3}$/.test(value)
            ? 'Three digits required'
            : '';
        break;

      default:
        break;
    }

    if (name === 'expirationMonth') {
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      const inputYear = parseInt(formData.expirationYear, 10);
      const inputMonth = parseInt(value, 10);

      if (
        inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)
      ) {
        errorMessage = 'Card has expired';
      }
    }

    if (name === 'expirationYear') {
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      const inputYear = parseInt(value, 10);
      const inputMonth = parseInt(formData.expirationMonth, 10);

      if (
        inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)
      ) {
        errorMessage = 'Card has expired';
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate each field
    for (const fieldName in formData) {
      validateInput(fieldName, formData[fieldName]);
    }

    // Check if there are any empty required fields
    const hasEmptyFields = Object.values(formData).some(
      (value) => value.trim() === ''
    );
    if (hasEmptyFields) {
      return;
    }
    // Check if there are no errors

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }

    setIsSubmit(true);

    //
  };
  return (
    <main className={styles.main}>
      <Card formData={formData} />

      {!isSubmit ? (
        <CardForm
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Success />
      )}
    </main>
  );
}
