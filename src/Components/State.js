import React, { useState } from "react";

const State = () => {
  const [user, setUser] = useState(true);

  const userUpdate = () => {
    setUser(!user);
  };

  return (
    <div>
      {user ? (
        <h1>
          Hello, Utkarsh<br></br> Age:-23<br></br> Phone:-8384883830<br></br>
          Email:- Utkarshgupta0706@gmail.com
        </h1>
      ) : (
        <h1>User does not exit</h1>
      )}
      <button onClick={userUpdate}>{user ? <>Logout</> : <>login</>}</button>
    </div>
  );
};

export default State;
