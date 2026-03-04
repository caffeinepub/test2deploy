import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjects = [
  "Book a Free Consultation",
  "Bug Buster Sprint",
  "MVP Quality Sprint",
  "Ongoing QA Support",
  "Other",
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubjectChange = (value: string) => {
    setForm((prev) => ({ ...prev, subject: value }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.querySelector(
        `[name="${firstErrorKey}"], [data-ocid="contact.${firstErrorKey}.input"], [data-ocid="contact.${firstErrorKey}.textarea"]`,
      ) as HTMLElement | null;
      el?.focus();
      return;
    }
    setIsSubmitting(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-finland-blue-light text-finland-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" aria-hidden="true" />
            Get in Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight mb-4">
            Let's Talk About Your Project
          </h2>
          <p className="text-finland-blue/70 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your product and timeline. We'll get back to you
            within 24 hours with a tailored recommendation.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-finland-lg border border-finland-blue-mid overflow-hidden">
          {isSuccess ? (
            /* Success state */
            <div
              data-ocid="contact.success_state"
              className="flex flex-col items-center justify-center text-center py-16 px-8"
            >
              <div className="w-16 h-16 rounded-full bg-finland-blue-light flex items-center justify-center mb-6">
                <CheckCircle2
                  className="w-8 h-8 text-finland-blue"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-finland-blue mb-3">
                Message Sent!
              </h3>
              <p className="text-finland-blue/70 text-lg max-w-sm mb-6">
                Thank you! We'll be in touch within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <a
                  href="mailto:pankaj.kumar@test2deploy.eu"
                  aria-label="Email pankaj.kumar@test2deploy.eu"
                  className="flex items-center gap-2 text-finland-blue hover:underline font-medium"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  pankaj.kumar@test2deploy.eu
                </a>
                <span className="hidden sm:block text-gray-300">|</span>
                <a
                  href="tel:+358417280893"
                  aria-label="Call +358 41 728 0893"
                  className="flex items-center gap-2 text-finland-blue hover:underline font-medium"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +358 41 728 0893
                </a>
              </div>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="p-6 sm:p-8 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-finland-blue"
                  >
                    Name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Pankaj Kumar"
                    value={form.name}
                    onChange={handleChange}
                    data-ocid="contact.name.input"
                    aria-required="true"
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    aria-invalid={!!errors.name}
                    className={`border-finland-blue-mid focus:border-finland-blue focus:ring-finland-blue ${
                      errors.name ? "border-red-400 focus:border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="text-xs text-red-500 font-medium mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-finland-blue"
                  >
                    Email{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    data-ocid="contact.email.input"
                    aria-required="true"
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    aria-invalid={!!errors.email}
                    className={`border-finland-blue-mid focus:border-finland-blue focus:ring-finland-blue ${
                      errors.email ? "border-red-400 focus:border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      role="alert"
                      className="text-xs text-red-500 font-medium mt-1"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-semibold text-finland-blue"
                  >
                    Phone{" "}
                    <span className="text-gray-400 font-normal text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+358..."
                    value={form.phone}
                    onChange={handleChange}
                    data-ocid="contact.phone.input"
                    className="border-finland-blue-mid focus:border-finland-blue focus:ring-finland-blue"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-subject"
                    className="text-sm font-semibold text-finland-blue"
                  >
                    Subject{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </Label>
                  <Select
                    value={form.subject}
                    onValueChange={handleSubjectChange}
                  >
                    <SelectTrigger
                      id="contact-subject"
                      data-ocid="contact.subject.select"
                      aria-required="true"
                      aria-describedby={
                        errors.subject ? "contact-subject-error" : undefined
                      }
                      aria-invalid={!!errors.subject}
                      className={`border-finland-blue-mid focus:border-finland-blue focus:ring-finland-blue ${
                        errors.subject ? "border-red-400" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a topic…" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p
                      id="contact-subject-error"
                      role="alert"
                      className="text-xs text-red-500 font-medium mt-1"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-finland-blue"
                >
                  Message{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your product, current stage, and what you're looking to achieve…"
                  value={form.message}
                  onChange={handleChange}
                  data-ocid="contact.message.textarea"
                  aria-required="true"
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                  rows={5}
                  className={`border-finland-blue-mid focus:border-finland-blue focus:ring-finland-blue resize-none ${
                    errors.message ? "border-red-400 focus:border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="text-xs text-red-500 font-medium mt-1"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-gray-400">
                  <span className="text-red-400">*</span> Required fields
                </p>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isSubmitting}
                  className="bg-finland-blue hover:bg-finland-blue-dark text-white font-semibold px-8 py-3 rounded-xl shadow-finland hover:shadow-finland-lg transition-all duration-200 min-w-[160px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Contact details strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-finland-blue/70">
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            aria-label="Email pankaj.kumar@test2deploy.eu"
            className="flex items-center gap-2 hover:text-finland-blue transition-colors font-medium"
          >
            <Mail className="w-4 h-4 text-finland-blue" aria-hidden="true" />
            pankaj.kumar@test2deploy.eu
          </a>
          <span
            className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"
            aria-hidden="true"
          />
          <a
            href="tel:+358417280893"
            aria-label="Call +358 41 728 0893"
            className="flex items-center gap-2 hover:text-finland-blue transition-colors font-medium"
          >
            <Phone className="w-4 h-4 text-finland-blue" aria-hidden="true" />
            +358 41 728 0893
          </a>
        </div>
      </div>
    </section>
  );
}
