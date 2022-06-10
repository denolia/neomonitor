import { PageHeader, Skeleton, Table } from "antd";
import React from "react";
import { useStateContext } from "../Context/ConfigProvider";
import { TableDefinition } from "../types";

function DataTable({ def }: {def: TableDefinition}) {
  return (
    <div key={def.name}>
      <PageHeader title={def.name} />
      <Table
        dataSource={def.rows}
        columns={def.columns.map((name, index) => ({
          title: name,
          key: name,
          render: (row: string[]) => row[index],
        }))}
        pagination={false}
        style={{ marginBottom: 40 }}
      />
    </div>
  );
}

function Result() {
  const { result, loading } = useStateContext();

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      {result ? result.map((def) => <DataTable def={def} />) : null}
    </div>
  );
}

export default Result;
