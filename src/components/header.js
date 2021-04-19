import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Eth from "./Eth";
import { getEthValue } from "../actions/api";

const Header = ({}) => {
  const [ethValue, setEthValue] = useState(null);

  const fetchEthValue = async () => {
    const { data } = await getEthValue();
    setEthValue(data.price);
  };

  useEffect(() => {
    fetchEthValue();
  }, []);

  return (
    <header class="header fixed-top">
      <div class="branding">
        <div class="container position-relative">
          <nav class="navbar navbar-expand-lg">
            <div class="site-logo">
              <Link class="navbar-brand" to="/">
                <span class="logo-text">ETH</span>
              </Link>
            </div>

            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </button>
            {/* <div class="collapse navbar-collapse py-3 py-lg-0" id="navigation">
              <ul class="navbar-nav ml-lg-auto">
                <Eth value={ethValue} />
              </ul>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
