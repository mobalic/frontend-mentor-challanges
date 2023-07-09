import { useRouter } from 'next/router';
import Button from '../button/Button';
import styles from './success.module.css';
export default function Success() {
  return (
    <div className={styles.successContainer}>
      <svg
        width="80"
        height="81"
        viewBox="0 0 80 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_8)">
          <path
            d="M40 80.5C62.0914 80.5 80 62.5914 80 40.5C80 18.4086 62.0914 0.5 40 0.5C17.9086 0.5 0 18.4086 0 40.5C0 62.5914 17.9086 80.5 40 80.5Z"
            fill="url(#paint0_linear_1_8)"
          />
          <path
            d="M28 40.42L36.08 48.5L52.08 32.5"
            stroke="white"
            strokeWidth="3"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_8"
            x1="-23.014"
            y1="12.007"
            x2="-7.77902e-07"
            y2="92.007"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
          <clipPath id="clip0_1_8">
            <rect
              width="80"
              height="80"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>

      <header>
        <h3>THANK YOU!</h3>
        <p> We&apos;ve added your card details</p>
      </header>
      <Button className="custom-button">Continue</Button>
    </div>
  );
}
