import React from "react";

const Loader = () => {
  return (
    <div style={{minHeight:'100vh'}} class="ui segment">
      <div class="ui active dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loader;
