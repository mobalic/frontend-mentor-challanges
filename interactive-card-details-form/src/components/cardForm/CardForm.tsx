import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './cardForm.module.css';
import { Errors, FormData } from '@/models/types';
import Button from '../button/Button';

interface CardFormProps {
  formData: FormData;
  errors: Errors;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
export default function CardForm({
  formData,
  errors,
  handleInputChange,
  handleSubmit,
}: CardFormProps) {
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formControl}>
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            required
            type="text"
            name="cardholderName"
            id="cardholderName"
            // autoComplete="cc-name"
            autoComplete="off"
            placeholder="e.g. Jane Appleseed"
            onChange={handleInputChange}
            maxLength={28}
            autoFocus={true}
            className={errors.cardholderName && `${styles.error}`}
          />
          {errors.cardholderName && (
            <span className={styles.errorMessage}>{errors.cardholderName}</span>
          )}
        </div>

        <div className={styles.formControl}>
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            required
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            inputMode="numeric"
            autoComplete="cc-number"
            // pattern="[0-9]+"
            value={formData.cardNumber}
            onChange={handleInputChange}
            maxLength={19}
            className={errors.cardNumber && `${styles.error}`}
          />
          {errors.cardNumber && (
            <span className={styles.errorMessage}>{errors.cardNumber}</span>
          )}
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.formControl}>
            <label htmlFor="expiry-month-year">EXP. DATE (MM/YY)</label>
            <div className={styles.expContainer}>
              <input
                required
                type="text"
                id="expirationMonth"
                name="expirationMonth"
                placeholder="MM"
                autoComplete="cc-exp"
                aria-label="Expiration Month"
                maxLength={2}
                onChange={handleInputChange}
                className={errors.expirationMonth && `${styles.error}`}
              />
              <input
                required
                type="text"
                id="expirationYear"
                name="expirationYear"
                autoComplete="cc-exp"
                placeholder="YY"
                maxLength={2}
                aria-label="Expiration Year"
                onChange={handleInputChange}
                className={errors.expirationYear && `${styles.error}`}
              />
            </div>
            {errors.expirationMonth || errors.expirationYear ? (
              <span className={styles.errorMessage}>
                {errors.expirationMonth || errors.expirationYear}
              </span>
            ) : null}
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">CVC</label>
            <input
              required
              type="text"
              id="cvc"
              name="cvc"
              inputMode="numeric"
              placeholder="e.g. 123"
              maxLength={3}
              onChange={handleInputChange}
              className={errors.cvc && `${styles.error}`}
            />
            {errors.cvc && (
              <span className={styles.errorMessage}>{errors.cvc}</span>
            )}
          </div>
        </div>

        <Button type="submit" className="custom-button">
          Confirm
        </Button>
      </form>
    </div>
  );
}
