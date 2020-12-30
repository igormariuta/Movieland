import React from 'react';
import Header from '../Header';

import cn from 'classnames';
import s from './Layout.module.scss';

const LayoutMain: React.FC = ({children}) => (

  <div className='mb-4'>
    <main className={cn('container pt-4', s.main)}>
      {children}
    </main>
  </div>

);

export default LayoutMain;