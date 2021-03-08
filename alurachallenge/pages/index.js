import styled from 'styled-components'

import db from '../db.json';

export const BackgroundImage = styled.div`
  background-image:url(${db.bg});
  flex:1;
  background-size:auto;
  background-position:right;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width:23rem; 
  padding-top:4rem; 
  margin: auto 10%;

  @media screen and (max-width: 31,25rem) {
    margin:auto;
    padding:1rem;
  }
`;

export const Widget = styled.div`

  margin-top: 2rem;
  margin-bottom: 2.5rem;
  border: 1px solid #333;
  background-color: #555;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom:0;
  }

  p {
    font-size: 1rem;
    font-weight:400;
    line-height:1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    
  }


`;

Widget.Content = styled.div`
  padding: 1.5rem 2rem 2rem 2rem;
  & > *:first-child {
    margin-top:0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding:0;
}

`;

export default function Home() {
  return (
   <BackgroundImage>
     <QuizContainer>

      <Widget>
        <Widget.Content>
          <h1> Quiz, Filme, terror...</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</p>
        </Widget.Content>
      </Widget>
      
      <Widget>
        <Widget.Content>
          <h1> Quiz dos Amigos </h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</p>
        </Widget.Content>
      </Widget>


     </QuizContainer>
   </BackgroundImage>

  );
}
