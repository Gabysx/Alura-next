import React from 'react';

import db from '../db.json';
import QuizBackgroundAsk from '../src/components/QuizBackground/QuizBackgroundAsk';

export default function QuizPage() {
  return (

    <QuizBackgroundAsk backgroundImage={db.bgQuiz}>
      <>
      </>

    </QuizBackgroundAsk>
  );
}
