import React from "react";
import Image from "next/image";
import { SuccessDialog } from "./dialogs/SuccessDialog";

type ContactField = "name" | "email" | "message";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<ContactField, string>>;

const DEFAULT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function ContactUs() {
  const [formValues, setFormValues] =
    React.useState<ContactFormValues>(DEFAULT_FORM_VALUES);
  const [formErrors, setFormErrors] = React.useState<ContactFormErrors>({});
  const [touched, setTouched] = React.useState<Record<ContactField, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const validateField = React.useCallback(
    (field: ContactField, value: string) => {
      const trimmedValue = value.trim();

      if (field === "name") {
        if (!trimmedValue) return "Please enter your name.";
        if (trimmedValue.length < 2)
          return "Name must contain at least 2 characters.";
      }

      if (field === "email") {
        if (!trimmedValue) return "Please enter your email address.";
        if (!EMAIL_PATTERN.test(trimmedValue))
          return "Please enter a valid email address.";
      }

      if (field === "message") {
        if (!trimmedValue) return "Please write a message.";
        if (trimmedValue.length < 15)
          return "Message must contain at least 15 characters.";
      }

      return "";
    },
    [],
  );

  const validateForm = React.useCallback(
    (values: ContactFormValues) => {
      const nextErrors: ContactFormErrors = {};
      (Object.keys(values) as ContactField[]).forEach((field) => {
        const error = validateField(field, values[field]);
        if (error) nextErrors[field] = error;
      });
      return nextErrors;
    },
    [validateField],
  );

  const handleInputChange =
    (field: ContactField) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
      const nextValue = event.target.value;
      setFormValues((prev) => ({ ...prev, [field]: nextValue }));

      if (touched[field] || hasSubmitted) {
        setFormErrors((prev) => ({
          ...prev,
          [field]: validateField(field, nextValue),
        }));
      }
    };

  const handleFieldBlur = (field: ContactField) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFormErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formValues[field]),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const nextErrors = validateForm(formValues);
    setFormErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setOpenSuccessDialog(true);
    setFormValues(DEFAULT_FORM_VALUES);
    setFormErrors({});
    setTouched({ name: false, email: false, message: false });
    setHasSubmitted(false);
  };

  const shouldShowError = (field: ContactField) =>
    Boolean(formErrors[field]) && (touched[field] || hasSubmitted);

  return (
    <div
      className="flex flex-col gap-0 w-full md:pb-30! pt-0 md:pt-20! relative md:flex-row md:px-32 md:py-20 md:gap-30.5 border-t border-t-neutral-800"
      id="contact"
    >
      <SuccessDialog
        open={openSuccessDialog}
        onClose={() => {
          setOpenSuccessDialog(false);
        }}
      />
      {/* 3 boxes */}
      <div className="absolute top-0 left-0 z-30 grid grid-cols-3 grid-rows-2 gap-0">
        <div className="col-start-1 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />

        <div className="col-start-2 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
        <div className="col-start-3 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />
      </div>
      {/* profile contact us */}
      <div className="w-full relative h-128.5 bg-black isolate md:w-[420.89px] md:h-160 ">
        <div className="overflow-hidden">
          <Image
            src="/hero-image-desktop.svg"
            alt="Contact Us Profile"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg mix-blend-luminosity saturate-0 brightness-110 contrast-110 -rotate-3 -translate-x-4 -translate-y-5 scale-[0.85] md:translate-x-0 md:translate-y-0 md:scale-100"
          />
        </div>

        {/* inset */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-black/20"></div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_80%,#000000_100%)] "></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/40 to-black" />

        {/* social media and profile name */}
        <div className=" absolute top-[339.76px] w-[256px] left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center text-center justify-center md:top-129.75 md:gap-6 z-40">
          {/* social medias */}
          <div className="flex flex-row gap-4 md:gap-6">
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-black box-border transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary-200/70 hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_30px_-18px_rgba(145,255,2,0.7)] md:h-16 md:w-16"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-200/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
              <Image
                src="/social-dribble.svg"
                alt="LinkedIn"
                width={28.83}
                height={28.83}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 md:w-[38.44px] md:h-[38.44px]"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-black box-border transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary-200/70 hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_30px_-18px_rgba(145,255,2,0.7)] md:h-16 md:w-16"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-200/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
              <Image
                src="/social-instagram.svg"
                alt="LinkedIn"
                width={24.01}
                height={24.01}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 md:w-[32.02px] md:h-[32.03px]"
              />
            </a>
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-black box-border transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary-200/70 hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_30px_-18px_rgba(145,255,2,0.7)] md:h-16 md:w-16"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-200/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
              <Image
                src="/social-linkedin.svg"
                alt="LinkedIn"
                width={20.09}
                height={19.22}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 md:w-[26.78px] md:h-[25.62px]"
              />
            </a>
          </div>
          {/* Profile name */}
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-bold text-text-md leading-text-md text-white md:text-xl md:leading-text-xl">
              Edwin Anderson
            </span>
            <div className="flex flex-row gap-3 items-center justify-center">
              {/* green rounded */}
              <div className="w-3 h-3 rounded-full bg-primary-200"></div>
              <span className="text-sm leading-text-sm font-semibold text-neutral-400 md:text-text-md md:leading-text-md">
                Available for Work
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* form contact us here */}
      <div className="relative flex h-auto min-h-[632px] flex-col gap-6 px-4 py-10 md:h-full md:min-h-0 md:flex-1 md:gap-12">
        {/* header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-md leading-text-md font-medium text-primary-200 md:text-lg md:leading-text-lg">
            CONTACT
          </h2>
          <h1 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl text-primary-25 ">
            LET'S GET IN TOUCH
          </h1>
        </div>
        {/* form */}
        <form
          className="flex flex-col gap-4 md:gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* input name */}
          <div className="group flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm leading-text-sm font-semibold text-neutral-25 transition-colors duration-300 group-focus-within:text-primary-200 md:text-text-md md:leading-text-md"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange("name")}
              onBlur={handleFieldBlur("name")}
              autoComplete="name"
              aria-invalid={shouldShowError("name")}
              aria-describedby="name-error"
              className={`h-12 rounded-2xl border bg-black px-4 py-2 text-white transition-all duration-300 ease-out will-change-transform focus:-translate-y-0.5 focus:scale-[1.01] focus:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_16px_34px_-22px_rgba(145,255,2,0.7)] focus:outline-none focus:ring-2 focus:border-transparent md:h-14 ${
                shouldShowError("name")
                  ? "border-red-400/60 focus:ring-red-400/50"
                  : "border-neutral-800 focus:ring-primary-200"
              }`}
            />
            {shouldShowError("name") && (
              <p
                id="name-error"
                className="mt-0.5 inline-flex w-fit items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium leading-4 text-red-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-300 animate-pulse"></span>
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="group flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm leading-text-sm font-semibold text-neutral-25 transition-colors duration-300 group-focus-within:text-primary-200 md:text-text-md md:leading-text-md"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange("email")}
              onBlur={handleFieldBlur("email")}
              autoComplete="email"
              aria-invalid={shouldShowError("email")}
              aria-describedby="email-error"
              className={`h-12 rounded-2xl border bg-black px-4 py-2 text-white transition-all duration-300 ease-out will-change-transform focus:-translate-y-0.5 focus:scale-[1.01] focus:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_16px_34px_-22px_rgba(145,255,2,0.7)] focus:outline-none focus:ring-2 focus:border-transparent md:h-14 ${
                shouldShowError("email")
                  ? "border-red-400/60 focus:ring-red-400/50"
                  : "border-neutral-800 focus:ring-primary-200"
              }`}
            />
            {shouldShowError("email") && (
              <p
                id="email-error"
                className="mt-0.5 inline-flex w-fit items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium leading-4 text-red-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-300 animate-pulse"></span>
                {formErrors.email}
              </p>
            )}
          </div>
          {/* text area */}
          <div className="group flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm leading-text-sm font-semibold text-neutral-25 transition-colors duration-300 group-focus-within:text-primary-200 md:text-text-md md:leading-text-md"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange("message")}
              onBlur={handleFieldBlur("message")}
              autoComplete="off"
              aria-invalid={shouldShowError("message")}
              aria-describedby="message-error"
              className={`h-30 rounded-2xl border bg-black px-4 py-2 text-white transition-all duration-300 ease-out will-change-transform focus:-translate-y-0.5 focus:scale-[1.01] focus:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_16px_34px_-22px_rgba(145,255,2,0.7)] focus:outline-none focus:ring-2 focus:border-transparent md:h-45 ${
                shouldShowError("message")
                  ? "border-red-400/60 focus:ring-red-400/50"
                  : "border-neutral-800 focus:ring-primary-200"
              }`}
            />
            {shouldShowError("message") && (
              <p
                id="message-error"
                className="mt-0.5 inline-flex w-fit items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium leading-4 text-red-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-300 animate-pulse"></span>
                {formErrors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary-200 h-12 md:h-14 rounded-full text-neutral-950 font-extrabold text-sm md:text-text-md md:leading-text-md leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* 3 green boxes */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 md:z-0 grid grid-cols-3 grid-rows-2 gap-0 ">
        <div className="col-start-2 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />

        <div className="col-start-1 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
        <div className="col-start-3 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
      </div>
    </div>
  );
}
