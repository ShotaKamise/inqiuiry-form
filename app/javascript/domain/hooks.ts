import { useForm } from "react-hook-form";
import { Inquiry, inquiryDefaultValue, inquirySchema } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const csrfToken = document
  .querySelector("meta[name='csrf-token']")
  ?.getAttribute("content");

const steps = ["input", "confirm", "registered"] as const;

type CurrentStep = (typeof steps)[number];

export const useInputForm = () => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("input");

  const methods = useForm<Inquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: inquiryDefaultValue,
    mode: "onBlur",
  });

  const onSubmitOnInputStep = methods.handleSubmit(() => {
    setCurrentStep("confirm");
  });

  const onSubmitOnConfirmStep = methods.handleSubmit(async (data) => {
    try {
      const response = await fetch("/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken ?? "",
        },
        body: JSON.stringify({ inquiry: data }),
      });
      if (!response.ok) {
        throw Error("Sorry, Your inquiry could not be registered");
      }
      setCurrentStep("registered");
      methods.reset();
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  });

  const onBackStep = () => {
    if (currentStep === "confirm") {
      setCurrentStep("input");
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };

  return {
    methods,
    onSubmitOnInputStep,
    onSubmitOnConfirmStep,
    currentStep,
    steps,
    onBackStep,
  };
};
