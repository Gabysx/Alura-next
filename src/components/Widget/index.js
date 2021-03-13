import styled from 'styled-components';

const Widget = styled.div`

  margin-top: 2rem;
  margin-bottom: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom:0;

    h1 {
      color: ${({ theme }) => theme.colors.contrastText}
    }
    
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
  background-color: ${({ theme }) => theme.colors.header};
 
  *{
    margin:0;
  }
`;

Widget.Content = styled.div`
  padding: 1.5rem 2rem 2rem 2rem;
  align-items: center;

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
export default Widget;
