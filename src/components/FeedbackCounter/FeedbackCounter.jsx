import s from './FeedbackCounter.module.css';
import { useState } from 'react';

export default function FeedbackCounter() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodIncrement = () => {
        setGood(prevState => prevState + 1);
    }

    const handleNeutralIncrement = () => {
        setNeutral(prevState => prevState + 1);
    }

    const handleBadIncrement = () => {
        setBad(prevState => prevState + 1);
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }


    return (
        <>
            <h1>Please leave feedback</h1>
            <div>
                <button type="button" onClick={handleGoodIncrement}></button>
                <button type="button" onClick={handleNeutralIncrement}>neutral</button>
                <button type="button" onClick={handleBadIncrement}>bad</button>
            </div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total : {countTotalFeedback()}</li>
                <li>Positive feedback: </li>
            </ul>
        </>
    )
}