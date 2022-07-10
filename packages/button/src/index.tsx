import React, { ReactNode } from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button/button';

export interface Props {
  type: ButtonType;
  children: ReactNode;
}

const Button = (props: Props) => {
  return (
    <AntdButton type={props.type}>
      测试Button-
      {props.children}
    </AntdButton>
  );
};

export default Button;
