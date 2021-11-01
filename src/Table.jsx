import React from "react";
import { intervalToDuration } from "date-fns";
import { Table } from "semantic-ui-react";
import { tableData as data } from "./data";
import "./styles.css";

const TableContainer = () => {
  const dateValidation = (obj) =>
    `${obj.years ? `${obj.years}y` : ""} ${
      obj.months ? `${obj.months}mo` : ""
    } ${obj.days ? `${obj.days}d` : ""} ${obj.hours ? `${obj.hours}h` : ""} ${
      obj.minutes ? `${obj.minutes}m` : ""
    } ${obj.seconds ? `${obj.seconds}s` : ""}`;

  const highlightAll = (row) => ({
    warning: row.user.hasCredits,
    positive: row.subscribed,
  });

  const tableColumns = [
    {
      label: "ID",
      accessor: "id",
    },
    {
      label: "Customer",
      accessor: (item) => item.user.name,
      highlight: (item) => item.user.suspended,
    },
    {
      label: "Slides",
      accessor: "slides",
    },
    {
      label: "Order Status",
      accessor: "status",
    },
    {
      label: "Revisions",
      accessor: "revisions",
    },
    {
      label: "Price",
      accessor: "price",
    },
    {
      label: "PM",
      accessor: "manager",
    },
    {
      label: "Design team",
      accessor: "team",
    },
    {
      label: "Deadline",
      accessor: (item) =>
        dateValidation(
          intervalToDuration({
            end: new Date(item.deadline),
            start: new Date(),
          })
        ),
      highlight: (item) =>
        new Date().getTime() > new Date(item.deadline).getTime(),
    },
  ];

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {tableColumns.map((column) => (
            <Table.HeaderCell>{column.label}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((row) => (
          <Table.Row {...highlightAll(row)}>
            {tableColumns.map((column) => {
              const cellText =
                typeof column.accessor === "string"
                  ? row[column.accessor]
                  : column.accessor?.(row);

              return (
                <Table.Cell className={column.highlight?.(row) && "highlightedText"}>
                  {cellText}
                </Table.Cell>
              );
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableContainer;
