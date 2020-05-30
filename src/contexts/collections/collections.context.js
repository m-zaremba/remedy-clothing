import { createContext } from "react";

const CollectionsContext = createContext({
  collections: null,
  setCollections: () => {},
});

export default CollectionsContext;
