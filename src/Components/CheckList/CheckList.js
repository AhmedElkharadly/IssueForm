import React, { useEffect } from "react";
import { useState } from "react";
import { Chip, Group, Text } from "@mantine/core";
import { useStyles } from "./CheckListStyle.js";

function ChickList(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value) props?.HandelSetData(value, props.name);
  }, [value]);
  useEffect(() => {
    if (props.delteValue === true) {
      setValue("");
    }
  }, [props?.delteValue]);
  return (
    <div className={classes.wrapper}>
      <Text className={classes.issueLabel}>{props.label}</Text>
      <Chip.Group
        multiple
        value={[...value]}
        onChange={setValue}
        >
        <Group position="center"
         className={classes.chipContainer}
        >
          {props?.data?.map((dat) => {
            return (
              <Chip
                className={classes.chip}
                size="md"
                radius="sm"
                variant="outline"
                key={dat.value}
                value={dat.value}
              >
                <img src={dat.src} alt="" />
              </Chip>
            );
          })}
        </Group>
      </Chip.Group>
    </div>
  );
}

export default ChickList;
