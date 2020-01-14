import React from 'react';
import styled from 'styled-components';
import { Typography as UITypography } from '@mycrypto/ui';
import { IS_MOBILE } from 'v2/utils';

const TRUNCATE_CHARACTERS = IS_MOBILE ? 28 : 18;

interface Props {
  as?: string;
  value?: any;
  children?: any;
  bold?: boolean;
  fontSize?: string;
  style?: any;
  truncate?: boolean;
}

type SProps = Props & { forwardedAs: string };

const STypography = styled(UITypography)`
  line-height: 1.5;
  vertical-align: middle;
  font-weight: ${(p: SProps) => (p.bold ? '600' : '400')};
  font-size: ${(p: SProps) => p.fontSize} !important;
  ${(p: SProps) =>
    p.truncate &&
    `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: ${TRUNCATE_CHARACTERS}ch;
  `}
`;

function Typography({
  as = 'span',
  value,
  fontSize = '1rem',
  bold,
  children,
  truncate,
  ...props
}: Props) {
  return (
    <STypography forwardedAs={as} bold={bold} fontSize={fontSize} truncate={truncate} {...props}>
      {children ? children : value}
    </STypography>
  );
}

export default Typography;
