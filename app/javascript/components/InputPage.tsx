import { useMemo } from "react";
import { useInputForm } from "../domain/hooks";
import React from "react";
import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import { InputStep } from "./InputSteps/InputStep";
import { ConfirmStep } from "./InputSteps/ConfirmStep";
import { RegisteredStep } from "./InputSteps/RegisteredStep";

const InputPage = () => {
  const form = useInputForm();

  const content = useMemo(() => {
    switch (form.currentStep) {
      case "input":
        return <InputStep form={form} />;
      case "confirm":
        return <ConfirmStep form={form} />;
      case "registered":
        return <RegisteredStep />;
      default:
        return <></>;
    }
  }, [form]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            maxWidth: "70%",
            width: "100%",
          }}
        >
          <Stepper
            activeStep={form.steps.findIndex((e) => e === form.currentStep)}
            alternativeLabel
          >
            {form.steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <Card
          sx={{
            maxWidth: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          {content}
        </Card>
      </Box>
    </>
  );
};

export default InputPage;
