import { useState } from "react";
import "./App.css";
import { careerPaths } from "./assets/data";
import { APP_CONFIG, UI_TEXT } from "./constants/appConstants";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    APP_CONFIG.DEFAULT_QUESTION
  );
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswer = (option: {
    text: string;
    career?: string;
    nextQuestion?: string;
  }) => {
    const newPath = [...selectedPath, option.text];
    setSelectedPath(newPath);

    if (option.career) {
      setShowResult(true);
    } else if (option.nextQuestion) {
      setCurrentQuestion(option.nextQuestion);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(APP_CONFIG.DEFAULT_QUESTION);
    setSelectedPath([]);
    setShowResult(false);
  };

  const currentQ = careerPaths[currentQuestion];

  if (showResult) {
    const lastAnswer = selectedPath[selectedPath.length - 1];
    const result = currentQ.options.find((opt) => opt.text === lastAnswer);

    return (
      <div className="app">
        <div className="container">
          <h1>{UI_TEXT.RESULT_TITLE}</h1>
          <div className="result-card">
            <h2>Recommended Career: {result?.career}</h2>
            <h3>Suggested Degree: {result?.degree}</h3>

            {result?.contact && (
              <div className="contact-info">
                <h4>{UI_TEXT.CONTACT_TITLE}</h4>
                <div className="contact-details">
                  <p>
                    <strong>Name:</strong> {result.contact.name}
                  </p>
                  <p>
                    <strong>Title:</strong> {result.contact.title}
                  </p>
                  <p>
                    <strong>Organization:</strong> {result.contact.organization}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${result.contact.email}`}>
                      {result.contact.email}
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href={`tel:${result.contact.phone}`}>
                      {result.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="path-summary">
              <h4>{UI_TEXT.JOURNEY_TITLE}</h4>
              <ul>
                {selectedPath.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <button onClick={resetQuiz} className="restart-btn">
              {UI_TEXT.RESTART_BUTTON}
            </button>
            <div className="love-text">
              <p>{UI_TEXT.LOVE_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <h1>{UI_TEXT.MAIN_TITLE}</h1>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${
                (selectedPath.length / APP_CONFIG.MAX_QUESTIONS) * 100
              }%`,
            }}
          ></div>
        </div>

        <div className="question-card">
          <h2>{currentQ.text}</h2>
          <div className="options">
            {currentQ.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option)}
                className="option-btn"
              >
                {option.id}) {option.text}
              </button>
            ))}
          </div>
        </div>

        {selectedPath.length > 0 && (
          <div className="path-display">
            <h4>{UI_TEXT.PATH_TITLE}</h4>
            <div className="path-steps">
              {selectedPath.map((step, index) => (
                <span key={index} className="path-step">
                  {step}
                  {index < selectedPath.length - 1 && " → "}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="love-text">
          <p>{UI_TEXT.LOVE_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
