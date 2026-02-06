"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, CheckCircle, Github, Linkedin, MapPin, Mail as MailIcon } from "lucide-react";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { personalInfo } from "@/data/personal";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animation-variants";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email format";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Hi Davi,\n\n${formState.message}\n\n---\nFrom: ${formState.name}\nEmail: ${formState.email}`
    );

    window.open(
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
      "_self"
    );

    setSubmitted(true);
  };

  const socialIcons: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="// Let's build something together"
    >
      <div ref={ref} className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Left: Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 lg:col-span-2"
        >
          <motion.p
            variants={staggerItem}
            className="text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            Have a project in mind, want to collaborate, or just want to say hi?
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]">
                <MailIcon className="h-4 w-4 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]">
                <MapPin className="h-4 w-4 text-[var(--color-green)]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">location</p>
                <p className="text-sm text-[var(--color-text)]">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="flex gap-3 pt-2">
            {personalInfo.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_15px_var(--color-accent)/15]"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-3"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle className="h-16 w-16 text-[var(--color-green)]" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text)]">
                    Email client opened!
                  </h3>
                  <p className="mt-2 font-mono text-sm text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-green)]">$</span> echo
                    &quot;Send the email from your mail app and I&apos;ll reply soon.&quot;
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 font-mono text-xs text-[var(--color-accent)] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-purple)]">const</span>{" "}
                      <span className="text-[var(--color-text)]">name</span>{" "}
                      <span className="text-[var(--color-accent)]">=</span>
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/40 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="'Your Name'"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 font-mono text-xs text-[var(--color-red)]"
                      >
                        // Error: {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-purple)]">const</span>{" "}
                      <span className="text-[var(--color-text)]">email</span>{" "}
                      <span className="text-[var(--color-accent)]">=</span>
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/40 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="'you@example.com'"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 font-mono text-xs text-[var(--color-red)]"
                      >
                        // Error: {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-purple)]">const</span>{" "}
                      <span className="text-[var(--color-text)]">message</span>{" "}
                      <span className="text-[var(--color-accent)]">=</span>
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      rows={5}
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/40 focus:border-[var(--color-accent)] focus:outline-none resize-none transition-colors"
                      placeholder="`Tell me about your project...`"
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 font-mono text-xs text-[var(--color-red)]"
                      >
                        // Error: {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-medium text-[var(--color-bg)] transition-all hover:shadow-[0_0_25px_var(--color-accent)/30] active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
