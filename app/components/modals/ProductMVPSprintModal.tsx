"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";

type ProductMVPSprintModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProductMVPSprintModal({
  open,
  onClose,
}: ProductMVPSprintModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = new FormData(event.currentTarget);

    const payload = {
      pathway: "Product MVP Sprint",

      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      website: String(form.get("website") || ""),

      product: String(form.get("product") || ""),
      stage: String(form.get("stage") || ""),
      help: String(form.get("help") || ""),

      budget: String(form.get("budget") || ""),
      timeline: String(form.get("timeline") || ""),

      message: String(form.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setSuccess(true);

      event.currentTarget.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    if (loading) return;

    setError("");
    setSuccess(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-99 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 cursor-default bg-[#020817]/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mvp-modal-title"
            className="
              relative
              z-10
              flex
              max-h-[92vh]
              w-full
              max-w-[760px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/70
              bg-[#f5f7fa]
              shadow-[0_30px_100px_rgba(0,0,0,0.25)]
            "
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Top gradient */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-120px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-blue-400/20
                blur-[80px]
              "
            />

            {/* Header */}
            <div className="relative shrink-0 border-b border-slate-200/80 px-6 pb-6 pt-6 sm:px-8 sm:pt-7">
              <button
                type="button"
                onClick={handleClose}
                disabled={loading}
                aria-label="Close"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  text-slate-500
                  transition
                  hover:bg-white
                  hover:text-slate-900
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  sm:right-7
                  cursor-pointer
                  sm:top-7
                "
              >
                <X size={17} strokeWidth={1.8} />
              </button>

              <div className="pr-12">
                <p
                  className="
                    mb-3
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-blue-600
                  "
                >
                  Product MVP Sprint
                </p>

                <h2
                  id="mvp-modal-title"
                  className="
                    max-w-[560px]
                    text-[30px]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.04em]
                    text-[#101828]
                    sm:text-[38px]
                  "
                >
                  Turn your product idea into a ready-to-launch MVP
                </h2>

                <p className="mt-4 max-w-[580px] text-[14px] leading-6 text-slate-500 sm:text-[15px]">
                  Strategy, product design, and development to turn your idea
                  into a launch-ready product.
                </p>
              </div>
            </div>

            {/* Content */}
            <div
              onWheel={(e) => e.stopPropagation()}
              className="relative overflow-y-auto px-6 py-6 sm:px-8 sm:py-7"
            >
              {success ? (
                <SuccessState onClose={handleClose} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Contact */}
                  <FormSection number="01" title="Tell us about you">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        required
                      />

                      <Field
                        label="Work email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />

                      <Field
                        label="Company"
                        name="company"
                        placeholder="Company name"
                        required
                      />

                      <Field
                        label="Product / company website"
                        name="website"
                        type="url"
                        placeholder="https://"
                      />
                    </div>
                  </FormSection>

                  {/* Product */}
                  <FormSection number="02" title="Tell us about the product">
                    <Field
                      label="What are you building?"
                      name="product"
                      placeholder="Briefly describe the product, who it's for, and what you're trying to achieve."
                      textarea
                      required
                    />

                    <div className="mt-5">
                      <SelectField
                        label="Current stage"
                        name="stage"
                        required
                        options={[
                          "Idea",
                          "Validated concept",
                          "Prototype",
                          "Ready to build",
                          "Already building",
                        ]}
                      />
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="help"
                        className="mb-2 block text-[12px] font-medium text-slate-700"
                      >
                        What do you need help with?
                      </label>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {[
                          "Product strategy",
                          "UX / UI design",
                          "Prototype",
                          "Development",
                          "Design + development",
                          "Not sure yet",
                        ].map((option) => (
                          <label
                            key={option}
                            className="
                              flex
                              cursor-pointer
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-slate-200
                              bg-white
                              px-4
                              py-3
                              text-[13px]
                              text-slate-600
                              transition
                              hover:border-blue-300
                              hover:bg-blue-50/40
                            "
                          >
                            <input
                              type="radio"
                              name="help"
                              value={option}
                              className="h-3.5 w-3.5 accent-blue-600"
                              required
                            />

                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </FormSection>

                  {/* Project */}
                  <FormSection number="03" title="Project details">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField
                        label="Estimated budget"
                        name="budget"
                        required
                        options={[
                          "$3k – $10k",
                          "$10k – $20k",
                          "$20k – $40k",
                          "$40k+",
                          "Not sure yet",
                        ]}
                      />

                      <SelectField
                        label="Timeline"
                        name="timeline"
                        required
                        options={[
                          "ASAP",
                          "Within 1 month",
                          "1 – 3 months",
                          "3+ months",
                          "Not sure yet",
                        ]}
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        label="Anything else we should know?"
                        name="message"
                        placeholder="Anything useful about the project, goals, challenges, or expectations."
                        textarea
                      />
                    </div>
                  </FormSection>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] leading-5 text-red-600">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[360px] text-[11px] leading-5 text-slate-400">
                      By submitting this form, you&apos;re starting a
                      conversation with Arcady Design. No commitment required.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        cursor-pointer
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#0b1733]
                        px-6
                        py-3.5
                        text-[13px]
                        font-medium
                        text-white
                        transition
                        hover:bg-[#132650]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {loading ? (
                        <>
                          <span
                            className="
                              h-4
                              w-4
                              animate-spin
                              rounded-full
                              border-2
                              border-white/30
                              border-t-white
                            "
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Start MVP conversation
                          <ArrowUpRight
                            size={16}
                            className="
                              transition-transform
                              duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                            "
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/* Form Section                                                               */
/* -------------------------------------------------------------------------- */

function FormSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <span
          className="
            text-[10px]
            font-semibold
            tracking-[0.18em]
            text-blue-600
          "
        >
          {number}
        </span>

        <h3 className="text-[14px] font-medium text-slate-900">{title}</h3>
      </div>

      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const sharedClassName = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-white
    px-4
    text-[13px]
    text-slate-900
    outline-none
    transition
    placeholder:text-slate-400
    focus:border-blue-400
    focus:ring-4
    focus:ring-blue-500/10
  `;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[12px] font-medium text-slate-700"
      >
        {label}

        {required && <span className="ml-1 text-blue-500">*</span>}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${sharedClassName} min-h-[110px] py-3.5 leading-5`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${sharedClassName} h-12`}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Select                                                                     */
/* -------------------------------------------------------------------------- */

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[12px] font-medium text-slate-700"
      >
        {label}

        {required && <span className="ml-1 text-blue-500">*</span>}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="
          h-12
          w-full
          appearance-none
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          text-[13px]
          text-slate-700
          outline-none
          transition
          focus:border-blue-400
          focus:ring-4
          focus:ring-blue-500/10
        "
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Success                                                                    */
/* -------------------------------------------------------------------------- */

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center py-12 text-center">
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          shadow-[0_10px_30px_rgba(37,99,235,0.25)]
        "
      >
        <Check size={25} strokeWidth={2} />
      </div>

      <p
        className="
          mb-3
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-blue-600
        "
      >
        Inquiry received
      </p>

      <h3 className="text-[30px] font-medium tracking-[-0.04em] text-[#101828]">
        Let&apos;s build something worth building.
      </h3>

      <p className="mt-4 max-w-[440px] text-[14px] leading-6 text-slate-500">
        Thanks for reaching out. We&apos;ve received your project details and
        will get back to you shortly.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="
          mt-7
          rounded-full
          bg-[#0b1733]
          px-6
          py-3
          text-[13px]
          font-medium
          text-white
          transition
          hover:bg-[#132650]
        "
      >
        Close
      </button>
    </div>
  );
}
