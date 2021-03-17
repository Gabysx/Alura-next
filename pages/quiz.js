import React from 'react';

import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

import db from '../db.json';
import QuizBackgroundAsk from '../src/components/QuizBackground/QuizBackgroundAsk';

export default function QuizPage() {
  return (

    <QuizBackgroundAsk backgroundImage={db.bgQuiz}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>

            <h3>
              Pergunta
              1
              de
              {` ${db.questions.length}`}
            </h3>

          </Widget.Header>

          <img
            alt="Descrição"
            style={{
              width: '90%',
              height: '9rem',
              objectFit: 'cover',
            }}
            src="https://placeholder.it/400x400"
          />
          <Widget.Content>
            <h2>
              Titulo
            </h2>
            <p>
              Descrição
            </p>
            <Button>
              Confirmar
            </Button>

          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackgroundAsk>
  );
}
