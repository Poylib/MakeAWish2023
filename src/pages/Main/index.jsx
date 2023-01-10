import React, { useState } from 'react';
import styled from 'styled-components';
import LimitModal from '../../components/LimitModal';

const Main = () => {
  const [isLimitModal, setIsLimitModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsLimitModal(true);
        }}
      >
        제한 창
      </button>
      {isLimitModal && <LimitModal isLimitModal={isLimitModal} setIsLimitModal={setIsLimitModal} />}
    </div>
  );
};

export default Main;
