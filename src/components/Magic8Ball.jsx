import { useState } from "react";

const Magic8Ball = () => {
    //const [question, setQuestion] = useState('');
    //const [answer, setAnswer] = useState('8');

    const [userInput, setUserInput] = useState('');
    const [randomIndex, setRandomIndex] = useState('');
    const [error, setError] = useState('');
    const [isShaking, setIsShaking] = useState(false);

    const answers = ["Yes",
    "no",
    "Maybe",
    "Ask again later",
    "Definitely",
    "Absolutely",
    "It is certain",
    "Don't count on it",
    "Very doubtful",
    "Better not tell you now"];

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setUserInput(event.target.value);
    }
    

    const handleClick = () => {
        if (userInput) {
            setIsShaking(true);
            setTimeout(()=>{
                setIsShaking(false);
                setError('');
                setRandomIndex(Math.floor(Math.random() * answers.length));
                setUserInput('');
            }, 300);
        } else {
            setError('Enter a question to know the answer!');
        }
        console.log(randomIndex);
    }

    const answer = answers[randomIndex];

    return (
        <>
            <h1>The magic 8-ball.</h1>
            <h2>What is your question?</h2>
            <div className="container">
                <label>Type here</label>
                <input type="text" 
                value={userInput} 
                onChange={(e) => handleChange(e)} 
                placeholder="Ask a yes/no question"/>
                <button onClick={handleClick}>Submit</button>
            </div>
            <p className="error">{error}</p>
            <div className={isShaking ? 'black-ball animate' : ''} 
            style={{backgroundColor: 'black',
                    background: 'linear-gradient(to bottom right, black, white)',
                    width: '330px',
                    height: '330px',
                    borderRadius: '60%',
                    position: 'relative',
                    margin: 'auto',
                    top: '50px'
            }}>
                <div className="answer-div">
                    <p className="answer">{answer}</p>
                </div>
            </div>
        </>
    );
};

export default Magic8Ball;