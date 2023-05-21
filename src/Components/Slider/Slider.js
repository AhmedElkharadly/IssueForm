import { Carousel } from "@mantine/carousel";
import { Chip, Text, createStyles } from "@mantine/core";
import { Indicator, Avatar } from "@mantine/core";
import { useEffect, useState } from "react";

export const useStyles = createStyles((theme) => ({
  issueLabel:{
    flexWrap: "wrap",
    fontWeight: "500",
    fontSize: "1rem",
  }
  ,
  slide: {
    "&:hover": {
      scale: "1.05",
      boxShadow: "rgba(17, 12, 30, 0.15) 0px 48px 100px 0px",
    },
  },
}));

export default function FormSlider(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState([]);


  useEffect(() => {
    if (value) props?.HandelSetData(value, props.name);
  }, [value]);
  useEffect(() => {
    if (props.delteValue === true) {
      setValue("");
    }
  }, [props?.delteValue]);

  return (
    <>
    <Text className={classes.issueLabel}>{props.label}</Text>
    <Carousel
    withIndicators
    mt={10}
    height={110}
    slideSize="25%"
    slideGap="md"
    loop
    align="center"
    slidesToScroll={2}
    
    >
      {props?.data?.map((slug) => {
        return (
          <Carousel.Slide key={slug.value}>
            <Chip
            
              size="15"
              radius={0}
              variant="outline"
              key={slug.value}
              value={slug.value}
              >
              <img
              style={{border:`${value.includes(slug.value) ? "5px inset skyblue" : "none"}`}}
              onClick={() =>
                value.includes(slug.value)
                    ? setValue("")
                    : setValue(slug?.value)
                }
                className={classes.slide}
                size="lg"
                src={slug.src}
                />
            </Chip>
          </Carousel.Slide>
        );
      })}
    </Carousel>
        </>
  );
}
