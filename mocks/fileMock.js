import React from 'react';

export const AnimatePresence = ({ children }) => children;
export const TransitionEffect = ({ children }) => children;

export const motion = {
  div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
  img: (props) => <img {...props} />,
  span: ({ children, ...rest }) => <span {...rest}>{children}</span>
};

export default ''