import React from 'react';
import Notiflix from 'notiflix';

let renderCount = 0;

export default React.memo(
  function IsFive({ value }) {
    Notiflix.Notify.warning(`🔴 isFive render: ${++renderCount}`);

    const getResult = React.useMemo(() => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? '✅ This is five :D' : '❌ Not five :(';
    },[value])

    return <h3>{getResult}</h3>;
  },
  (prevProps, nextPropx) => {
    if (nextPropx.value === 5) {
      return false;
    } else {
      return true;
    }
  },
);