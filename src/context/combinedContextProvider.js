import React from "react";
import { DataContextProvider } from "./data/provider";
import { FeedbackContextProvider } from "./feedback/provider";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent) => React.cloneElement(parent, { children }),
    children
  );
};
const CombinedContextProviders = ({ children }) => {
    return (
      <ContextProviderComposer
        contextProviders={[
          <DataContextProvider key={"data"} />,
          <FeedbackContextProvider key={"feedback"} />
        ]}
      >
        {children}
      </ContextProviderComposer>
    );
  };
  
export default CombinedContextProviders;
  
