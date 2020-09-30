import React, { useEffect, useContext, useReducer } from 'react';
import { CustomStore } from 'app/customStore';
const Component: React.FC = (props) => {
  const { user, mutate } = useContext(CustomStore);
  return (
    <>
      <h1>{user.name}</h1>
      <input
        onBlur={(e) =>
          mutate({ type: 'UPDATE_USER_NAME', name: e.target.value })
        }
        type="text"
      />
      <button
        onClick={() => mutate({ type: 'UPDATE_USER_NAME', name: 'summer' })}
      >
        summer
      </button>
      <button
        onClick={() =>
          mutate({
            type: 'UPDATE_USER_NAME',
            name: 'sunny',
          })
        }
      >
        sunny
      </button>
    </>
  );
};

export default Component;
