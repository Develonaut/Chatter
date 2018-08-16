import React from 'react';
import classnames from 'classnames';

import 'stylesheets/components/shared/IconButton.scss';

export default function IconButton({
  onClick = null,
  className = '',
}) {
  const icnButtonClass = classnames('i-button', className);
  return <button onClick={onClick} className={icnButtonClass}/>;
}