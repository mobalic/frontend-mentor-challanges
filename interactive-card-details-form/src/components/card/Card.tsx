import styles from './card.module.css';
import { FormData } from '@/models/types';

interface CardFormProps {
  formData: FormData;
}

export default function Card({ formData }: CardFormProps) {
  const { cardholderName, cardNumber, expirationMonth, expirationYear, cvc } =
    formData;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.front}>
        <div className={styles.logo}>
          <svg
            width="84"
            height="47"
            viewBox="0 0 84 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_11)">
              <path
                d="M23.478 47C36.4445 47 46.956 36.4787 46.956 23.5C46.956 10.5213 36.4445 0 23.478 0C10.5115 0 0 10.5213 0 23.5C0 36.4787 10.5115 47 23.478 47Z"
                fill="white"
              />
              <path
                d="M83.5 23.5C83.5 29.065 78.993 33.5751 73.435 33.5751C67.876 33.5751 63.37 29.065 63.37 23.5C63.37 17.935 67.876 13.425 73.435 13.425C78.993 13.425 83.5 17.935 83.5 23.5Z"
                stroke="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_11">
                <rect width="84" height="47" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.cardNumber}>
            {cardNumber || '0000 0000 0000 0000'}
          </p>
          <div className={styles.details}>
            <div className={styles.cardholderName}>
              {cardholderName || 'JANE APPLESEED'}
            </div>

            <div>
              <span className={styles.mm}>{expirationMonth || '09'}</span>/
              <span className={styles.yy}>{expirationYear || '00'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.cvc}>{cvc || '000'}</div>
      </div>
    </div>
  );
}
