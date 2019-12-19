import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router";

const isServer = typeof window === "undefined";

export default (App: any): any => {
  return class AppWithReactRouter extends React.Component<any> {
    render() {
      if (isServer) {
        return (
          <StaticRouter location={this.props.router.asPath}>
            <App {...this.props} />
          </StaticRouter>
        );
      }
      return (
        <BrowserRouter>
          <App {...this.props} />
        </BrowserRouter>
      );
    }
  };
};
