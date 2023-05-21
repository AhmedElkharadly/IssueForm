import React, { useEffect } from "react";
import { useState } from "react";
import { Text, SegmentedControl } from "@mantine/core";
import { useStyles } from "./SwicherStyle";

function Swicher(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.delteValue === true) {
      setValue([]);
    }
  }, [props.delteValue]);

  useEffect(() => {
    if (value) props?.HandelSetData(value, props.name);
  }, [value]);

  return (
    <div className={classes.wrapper}>
      <Text className={classes.issueLabel}>{props.label}</Text>
      <SegmentedControl
        className={classes.segment}
        transitionDuration={600}
        transitionTimingFunction="linear"
        value={value}
        onChange={setValue}
        data={[...props.data]}
      />
      </div>
  );
}

export default Swicher;
