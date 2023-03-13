import './style.css';
const adviceRef = document.querySelector('#advice-ref');
const mainAdvice = document.querySelector('#main-advice');
const generateBtn = document.querySelector('#generate-btn');

const url = 'https://api.adviceslip.com/advice';

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data.slip);
    handleAdvice(data.slip);
  } catch (error) {
    console.error(`Could not get advices: ${error}`);
  }
}

function handleAdvice(adviceObj) {
  adviceRef.innerText = adviceObj.id;
  mainAdvice.innerText = adviceObj.advice;
}

fetchData();

generateBtn.addEventListener('click', fetchData);
