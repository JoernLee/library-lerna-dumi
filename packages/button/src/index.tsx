import React, { ReactNode } from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button/button';

export interface Props {
  /**
   * @description Button类型
   */
  type: ButtonType;
  children: ReactNode;
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <AntdButton type={props.type}>
      测试Button2-
      {props.children}
    </AntdButton>
  );
};

export default Button;
