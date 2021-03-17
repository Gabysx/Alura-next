import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width:21rem; 
  padding-top: 2rem; 
  margin: auto 15%;
  align-items: center;

  @media screen and (max-width: 31.25rem) {
    margin:auto;
    padding:1rem;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState'.name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - Imersão</title>
        head
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> Quiz, Filme, terror...</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
              // router manda para próxima pagina
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                  console.log(infosDoEvento.target.value);
                }}
                placeholder="Qual seu nome?"
                value={name}
              />
              <Button type="submit" disabled={setName.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Gabysx" position="left" />
    </QuizBackground>

  );
}
