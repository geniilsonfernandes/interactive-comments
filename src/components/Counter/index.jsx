import React from "react";
import propTypes from "prop-types";

import * as S from "./styles";

const Counter = ({ counter = 0, onIncrement, onDrecrement }) => {
  const handleClickIncrement = () => onIncrement();
  const handleClickDrecrement = () => onDrecrement();
  return (
    <S.Wrapper>
      <S.CounterButton onClick={() => handleClickIncrement()}>
        +
      </S.CounterButton>
      <S.Counter>{counter}</S.Counter>
      <S.CounterButton onClick={() => handleClickDrecrement()}>
        -
      </S.CounterButton>
    </S.Wrapper>
  );
};

Counter.propTypes = {
  counter: propTypes.number,
  onIncrement: propTypes.func,
  onDrecrement: propTypes.func
};

export default Counter;
