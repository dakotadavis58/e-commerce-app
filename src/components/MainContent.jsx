import React from "react";
import { Helmet } from "react-helmet-async";

class MainContent extends React.Component {
  // dashboard for admin, tell you how many products, customers, and items in cart we have.
  // maybe a notifications tab for when new customers or admin are created
  state = {};

  render() {
    return (
      <div>
        <Helmet>
          <title>Amazoon</title>
        </Helmet>
        MainContent
      </div>
    );
  }
}

export default MainContent;
