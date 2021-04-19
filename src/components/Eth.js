import React from "react";

const Eth = ({ value }) => {
  return (
    <ul class="navbar-nav ml-lg-auto">
      <li class="nav-item mr-lg-0 mt-3 mt-lg-0">
        <button class="btn custom-btn-primary text-white" disabled>
          Eth Price: {value}
        </button>
      </li>
    </ul>
  );
};

export default Eth;
