import React, { useEffect, useState } from "react";
import { getConfiguration } from "../api/config";

interface ConfigContext {
  models: string[] | null;
  environments: string[] | null;
}

const configContext = React.createContext<ConfigContext>({
  models: null,
  environments: null,
});

export function useConfigContext(): ConfigContext {
  const context = React.useContext(configContext);

  if (!context) {
    throw new Error("useConfigContext must be called inside the ConfigProvider");
  }

  return context;
}

function ConfigProvider({ children }: React.PropsWithChildren<{}>) {
  const [models, setModels] = useState<string[] | null>(null);
  const [environments, setEnvironments] = useState<string[] | null>(null);

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
    <configContext.Provider value={{
      models, environments,
    }}
    >
      {children }
    </configContext.Provider>
  );
}

export default ConfigProvider;
