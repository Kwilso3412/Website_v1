import { useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/SectionWrapper";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // Move environment variables into component state
  const [config] = useState({
    recaptchaKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    emailjsKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get reCAPTCHA token
      const token = await recaptchaRef.current?.execute();

      // Create template parameters including the token
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        "g-recaptcha-response": token, // Add token here
      };

      // Send email with token
      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.emailjsKey
      );

      if (result.status === 200) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        recaptchaRef.current?.reset();
        alert("Message sent successfully!");
      }
    } catch (error: unknown) {
      console.error("Full error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      alert(`Failed to send message: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  if (!config.recaptchaKey || !config.emailjsKey) {
    return <div>Loading configuration...</div>;
  }

  return (
    <main className={styles.componentContent}>
      <section className={`${styles.sectionBg} ${styles.componentContainer}`}>
        <h3 className={styles.componentText}>Contact</h3>
        <div className="bg-white/5 rounded-lg mx-4 min-h-[400px]">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Full name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-tertiary p-4 text-black border font-medium h-12 w-full"
                required
              />

              <span className="text-white font-medium">Email Address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-tertiary p-4 text-black border font-medium h-12 w-full"
                required
              />

              <span className="text-white font-medium">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the Subject"
                className="bg-tertiary p-4 text-black border font-medium h-12 w-full"
                required
              />

              <span className="text-white font-medium">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={10}
                className="bg-tertiary p-4 text-black border font-medium w-full h-60"
                required
              />

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={config.recaptchaKey}
                badge="bottomright"
                size="invisible"
              />

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export const ContactComponent = SectionWrapper(Contact, "contact");
