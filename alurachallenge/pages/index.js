import styled from 'styled-components'
import Widget from '../src/components/Widget';

import db from '../db.json';

export const BackgroundImage = styled.div`
  background-image:url(${db.bg});
  flex:1;
  background-size:cover;
  background-position:right;
`;

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
   <BackgroundImage>
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


     </QuizContainer>
   </BackgroundImage>

  );
}
