import React, { useState } from "react";

const Animal = () => {
  const [user, setUser] = useState(true);

  const userUpdate = () => {
    setUser(!user);
  };

  return (
    <div>
      {user ? <h1> BHOOBHOOO</h1> : <h1>MIAAUUU</h1>}
      <button onClick={userUpdate}>{user ? <>Cat</> : <>Dog</>}</button>
    </div>
  );
};

export default Animal;
