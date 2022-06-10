import React, { useEffect, useState } from "react";
import { getConfiguration } from "../api/config";
import { TableDefinition } from "../types";

interface StateContext {
  models: string[] | null;
  environments: string[] | null;
  result: TableDefinition[] | null
  setResult(result: TableDefinition[] | null): void;
  loading: boolean;
  setLoading(loading: boolean): void;
}

const stateContext = React.createContext<StateContext>({
  models: null,
  environments: null,
  result: null,
  setResult: () => {},
  loading: false,
  setLoading: () => {},
});

export function useStateContext(): StateContext {
  const context = React.useContext(stateContext);

  if (!context) {
    throw new Error("useStateContext must be called inside the StateProvider");
  }

  return context;
}

function StateProvider({ children }: React.PropsWithChildren<{}>) {
  const [models, setModels] = useState<string[] | null>(null);
  const [environments, setEnvironments] = useState<string[] | null>(null);
  const [result, setResult] = useState<TableDefinition[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getConfiguration();

      if (res?.data) {
        setEnvironments(res.data.environments);
        setModels(res.data.models);
      }
    }
    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <stateContext.Provider value={{
      models, environments, result, setResult, loading, setLoading,
    }}
    >
      {children }
    </stateContext.Provider>
  );
}

export default StateProvider;
