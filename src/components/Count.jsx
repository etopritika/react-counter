import React from 'react';
import Notiflix from 'notiflix';

const render = {
  count1: 0,
  count2: 0,
};

export default React.memo(function Count({ id, value }) {
  Notiflix.Notify.warning(`🔴 Count${id} render: ${++render[`count${id}`] }`);

  return (
    <div>
      <h1 className="cyan">{value}</h1>
    </div>
  );
});