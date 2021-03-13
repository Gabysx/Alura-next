import styled from 'styled-components'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head'


import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width:21rem; 
  padding-top: 4rem; 
  margin: auto 15%;
  align-items: center;

  @media screen and (max-width: 31.25rem) {
    margin:auto;
    padding:1rem;
  }
`;



export default function Home() {
  return (
   <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - Imersão</title>  
head        
      </Head>

     <QuizContainer>

      <Widget>

        <Widget.Header>
            <h1> Quiz, Filme, terror...</h1>
        </Widget.Header>

        <Widget.Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</p>
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
