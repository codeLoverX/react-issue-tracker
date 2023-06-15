import React from "react";
import { DataContextProvider } from "./data/provider";

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
        ]}
      >
        {children}
      </ContextProviderComposer>
    );
  };
  
export default CombinedContextProviders;
  
