/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.header};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;

    width: 80%;
    padding: 0.6rem 1rem;
    margin-left: 1.5rem;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;

    &:hover,
    &:focus {
        opacity: .8;
    }

    &disabled {
        background-color: #413c98;
        cursor: not-allowed;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
