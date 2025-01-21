import classNames from "classnames";
import React from "react";
import { Classes } from "@blueprintjs/core";
import { DatePicker3 } from "@blueprintjs/datetime2";
import { H5 } from "@blueprintjs/core";
import { Example } from "./Example";

export const DatetimeExample: React.FC = () => {
  return (
    <Example header="@blueprintjs/datetime2">
      <H5>DatePicker3</H5>
      <DatePicker3
        className={classNames(Classes.ELEVATION_1, "example-datepicker")}
        timePrecision="minute"
      />
    </Example>
  );
};
