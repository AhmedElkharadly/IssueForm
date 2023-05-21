import { Select } from "@mantine/core";
import { createStyles, rem } from "@mantine/core";
import { useEffect, useState } from "react";


export default function SelectOne(props) {
  const [value, setValue] = useState("");
  const { classes, cx } = useStyles();
  useEffect(() => {
    if (value) props?.HandelSetData(value, props.name);
  }, [value]);
  useEffect(() => {
    if (props.delteValue === true) {
      setValue("");
    }
  }, [props?.delteValue]);
  return (
    <Select
    onChange={setValue}
    className={classes.select}
    width="50rem"
    label={props.label}
    placeholder="Choose Department"
    data={[...props.data]}
    />
    );
  }
  export const useStyles = createStyles((theme) => ({
    select: {
      "&:hover": {
        boxShadow: "rgba(17, 12, 30, 0.15) 0px 48px 100px 0px",
      },
    },
  }));
