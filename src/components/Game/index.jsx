import React, {useState} from 'react';
import styles from "./index.module.css";
import Prize from "./Prize";
import Question from "./Question";
import Finish from "../Finish";


const Game = ({data}) => {

    const [isActiveBurger, setActiveBurger] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(true);

    const [score, setScore] = useState('$0')

    const handleAnswerClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        if (isCorrect) {
            setScore(data[currentQuestion].money);
        }
        if (nextQuestion < data.length && isCorrect) {

            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(false);
        }
    }

    let prizeElements = data.map((item, idx) =>
        <Prize
            key={idx}
            currentMoney={data[currentQuestion].money}
            isAnswered={idx < currentQuestion}
            money={item.money}
        />).reverse();

    let answerElements = data[currentQuestion].answerOptions.map((item, idx) =>
        <button
           key={idx}
           className={styles.answer}
           onClick={() => handleAnswerClick(item.isCorrect)}>
            <span>{item.letter}</span>
            {item.answerText}
        </button>)

    return (
        <div>
            {showScore ? (
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.container}>
                            <Question question={data[currentQuestion].questionText}/>
                            <div className={styles.answers}>
                                {answerElements}
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => setActiveBurger(!isActiveBurger)}
                        className={isActiveBurger ? `${styles.burger} ${styles.active}` : styles.burger}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={isActiveBurger ? `${styles.item} ${styles.active}` : styles.item}>
                        <div className={styles.container}>
                            {prizeElements}
                        </div>
                    </div>
                </div>
            ) : (<Finish score={score}/>)}
        </div>
    )
}

export default Game;
