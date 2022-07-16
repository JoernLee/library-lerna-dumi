import React from 'react';
import { Tag as AntdTag } from 'antd';

export interface Props {
  title: string;
}

const Tag = (props: Props) => {
  return <AntdTag title={props.title}>Tag2</AntdTag>;
};

export default Tag;
