import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ComplexPredict } from '../pages/ComplexPredict';
import { HeaderLayout } from '../pages/layout/HeaderLayout';
import { SimpleLearn } from '../pages/SimpleLearn';
import { SimplePredict } from '../pages/SimplePredict';
import { Top } from '../pages/Top';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout childlen={<Top />} />} />
      <Route path="/simple-predict" element={<HeaderLayout childlen={<SimplePredict />} />} />
      <Route path="/simple-learn" element={<HeaderLayout childlen={<SimpleLearn />} />} />
      <Route path="/complex-predict" element={<HeaderLayout childlen={<ComplexPredict />} />} />
      <Route path="*" element={<HeaderLayout childlen={<p>ページが見つかりません</p>} />} />
    </Routes>
  );
});
