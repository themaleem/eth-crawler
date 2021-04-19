import React from "react";

const Eth = ({ value }) => {
  return (
    <li class="nav-item mr-lg-0 mt-3 mt-lg-0">
      <button class="btn custom-btn-primary text-white">
        Eth Price: {value}
      </button>
    </li>
  );
};

export default Eth;
