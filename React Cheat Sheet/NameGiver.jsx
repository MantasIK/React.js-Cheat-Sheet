import React from "react";

// This is a functional component, does the same thing thing, but smaller and no state

// To get access to the props we can just use ES6 and deconstruct the drilled PROP NAME i.e. propName={whatever the parent gave}
var NameGiver = ({ propName }) => (
  <div>
    {/* onChange and other special props fire off an 'event' when they activate, we just capture it in the main app */}
    <input type="text" onChange={propName} />
  </div>
);

export default NameGiver;
