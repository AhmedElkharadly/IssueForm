import React, { useEffect, useState } from "react";
import Swicher from "../Components/Swicher/Swicher";
import { Button, Center, FileInput, Grid, Image, Input, Textarea, } from "@mantine/core";
import ChickList from "../Components/CheckList/CheckList";
import { Department, issueType, Companies, toWhome } from "../data/data";
import { DateInput } from "@mantine/dates";
import { IconActivity, IconCloudUpload, IconCalendarEvent } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import Swal from "sweetalert2";
import SelectOne from "../Components/Select/Select";
import { useStyles } from "./IssueFormStyls";
import logoImage from "../images/logo.png";
import { useMediaQuery } from "@mantine/hooks";
import FormSlider from "../Components/Slider/Slider";

function IssueForm() {
  const { classes, cx } = useStyles();
  const [lodded, setIslodded] = useState(false);
  const [delteValue, setdelteValue] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [issueError, setIssueError] = useState(false);

  useEffect(() => {
    if (form.values && delteValue === true) {
      setdelteValue(false);
    }
  }, [delteValue]);

  const form = useForm({
    initialValues: { 
      issueType: "", department: "", companies: [""], issueName: "", firstchoices:"", 
      secondchoices: "", thirdchoices: "", notes: "", deadLine: "", file: "" ,to:""
    },
    validate: {
      department: (value) =>
        value.length > 0 ? null : "Please Choose Department",
      companies: (value) =>
        value.length > 0 ? null : "Choose One or More Field",
      issueName: (value) => (value.length > 0 ? null : "Please fill Issue Field"),
      firstchoices: (value) =>
        value.length > 0 ? null : "Fill The First Choise",
      secondchoices: (value) =>
        value.length > 0 ? null : "Fill The Second Choise",
      thirdchoices: (value) =>
        value.length > 0 ? null : "Fill The Third Choise",
      notes: (value) => (value.length > 0 ? null : null),
      deadLine: (value) => (value == undefined ||value == null ||value == "" ? "Choose Deadline":null),
      file: (value) => (value.length > 0 ? null : null),
      to: (value) => (value.length > 0 ? null : "Choose someone"),
    },
  });
  function onSubmitHandler(e) {
    e.preventDefault();
    if (e.target.innerText == "Save") {
      Swal.fire({  title: "Issue Saved", icon: "info", confirmButtonText: "ok", });
      console.log(form.values);
    } else {
      form.validate();
      form.issueType === undefined ?  setIssueError({...issueError,type:true}) : setIssueError({...issueError,type:false})
      form.department === undefined ?  setIssueError({...issueError,department:true}) : setIssueError({...issueError,department:false})
      if (form.validate().hasErrors) {
        console.log("Invalid Data");
        Swal.fire({ title: "please fill the form", icon: "error", confirmButtonText: "ok", });
      } else {
        setIslodded(true);
        Swal.fire({ title: "the Issue is created", icon: "success", confirmButtonText: "ok", }).then((value) => {
          if (value?.isConfirmed === true) {
            setIslodded(false);
            form.reset();
            setdelteValue(true);
          }
        });
        // console.log(form.values.companies);
      }
    }
  }
  function getChildData(value, formName) {
    form.setFieldValue(formName, value);
  }
  function resetForm() {
    if (form.values) {
      Swal.fire({
        title: "Are You Sure",
        icon: "warning",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((value) => {
        if (value?.isConfirmed === true) {
          form.reset();
          setdelteValue(true);
        }
      });
    }
  }

  return (
    <form>
      <Center className={classes.wrapper}>
        <Image maw={240} mx="auto" radius="md" src={logoImage} alt="" />
        <Grid>
          <Grid.Col
            span={isMobile ? 12 : 6}
            style={isMobile ? { marginBottom: "1rem" } : {}}
          >
            <Swicher
              value={form.issueType}
              label={"Issue Type:"}
              data={issueType}
              name="issueType"
              HandelSetData={getChildData}
              {...form.getInputProps("issueType")}
              required
              delteValue={delteValue}
            />
            {issueError.type && <span style={{color:"red"}}>Please Select Essue Type</span>}
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
            <SelectOne
              name="department"
              HandelSetData={getChildData}
              label={"Department:"}
              data={Department}
              value={form.department}
              {...form.getInputProps("department")}
              delteValue={delteValue}
              requird
              />
              {issueError.department && <span style={{color:"red"}}>Please Select Department</span>}
          </Grid.Col>
          <ChickList
            label={"Related to:"}
            value={form.companies}
            data={Companies}
            name="companies"
            HandelSetData={getChildData}
            delteValue={delteValue}
            {...form.getInputProps("companies")}
          />

          <Grid.Col span={12} style={isMobile ? { marginBottom: "1rem" } : {}}>
            <FormSlider 
            data={toWhome}
            label={"To Whome:"}
            value={form.to}
            name="to"
            HandelSetData={getChildData}
            delteValue={delteValue}
            {...form.getInputProps("to")} />
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 4}>
            <Input.Wrapper id="issueNmae" label="Issue" required maw={320}>
              <Textarea
                width={"100%"}
                id="issueNmae"
                placeholder="Issue"
                value={form.issueName}
                {...form.getInputProps("issueName")}
                required
              />
            </Input.Wrapper>
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 4}>
            <Input.Wrapper id="firstChoise" label="choises" maw={320}>
              <Input
                id="firstChoise"
                placeholder="choises"
                value={form.firstchoices}
                {...form.getInputProps("firstchoices")}
              />
            </Input.Wrapper>
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 4}>
            <Input.Wrapper id="secondChoise" label="choises" maw={320}>
              <Input
                id="secondChoise"
                placeholder="choises"
                value={form.secondchoices}
                {...form.getInputProps("secondchoices")}
              />
            </Input.Wrapper>
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 4}>
            <Input.Wrapper id="thirdChoise" label="choises" maw={320}>
              <Input
                id="thirdChoise"
                placeholder="choises"
                value={form.thirdchoices}
                {...form.getInputProps("thirdchoices")}
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 4}>
            <Input.Wrapper id="Note" label="Notes" maw={320}>
              <Input
                id="Note"
                placeholder="Notes"
                value={form.notes}
                {...form.getInputProps("notes")}
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 4}>
            <DateInput
              valueFormat="DD/MM/YYYY HH:mm:ss"
              label="the DeadLine"
              placeholder="the DeadLine"
              maw={400}
              icon={
                <IconCalendarEvent
                  size={20}
                  strokeWidth={1.5}
                  color={"black"}
                />
              }
              mx="auto"
              value={form.deadLine}
              {...form.getInputProps("deadLine")}
            />
          </Grid.Col>
        </Grid>
        <Center
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30vw",
            alignItems: "center",
          }}
        >
          <FileInput
            label="File"
            value={form.file}
            icon={<IconCloudUpload size={20} strokeWidth={2} color={"black"} />}
            {...form.getInputProps("file")}
          />
        </Center>
        <Center display="flex" mx="auto" mt="1rem" style={{ gap: "1rem" }}>
          <Button variant="outline" onClick={(e) => onSubmitHandler(e)}>
            Save
          </Button>
          <Button
            onClick={(e) => onSubmitHandler(e)}
            leftIcon={<IconActivity size="1rem" />}
            loading={lodded}
          >
            Submit
          </Button>
          <Button color="red" onClick={() => resetForm()}>
            Delete
          </Button>
        </Center>
      </Center>
    </form>
  );
}

export default IssueForm;
