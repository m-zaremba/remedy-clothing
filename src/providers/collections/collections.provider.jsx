import React, { useState, createContext } from "react";

export const CollectionsContext = createContext({
  collections: null,
  setContextCollections: () => {},
});

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState(null);

  const setContextCollections = (fetchedCollections) => {
    setCollections(fetchedCollections);
  };

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        setContextCollections,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
