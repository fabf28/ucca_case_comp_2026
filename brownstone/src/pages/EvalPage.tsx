import { useState } from "react";
import type { FC, ChangeEvent, FormEvent } from "react";
import type { EvalFormState } from "../types";
import { PROVINCES, ASSET_TYPES, TIMELINES, HEARD_FROM } from "../data";

const INITIAL_STATE: EvalFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  province: "",
  landType: "",
  acres: "",
  description: "",
  timeline: "",
  heard: "",
};

const EvalPage: FC = () => {
  const [form, setForm] = useState<EvalFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handle = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev: EvalFormState) => ({ ...prev, [name]: value }));
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page" style={{ background: "#f0e8d4" }}>
      <div className="form-container">
        {/* Header */}
        <div className="form-header">
          <p className="section-label">No Cost · No Obligation</p>
          <h1 className="section-title">Get Your Free Land Evaluation</h1>
          <p className="section-body">
            Brownstone's team of land appraisal and geology specialists will evaluate
            your farmland or mineral rights at no cost — giving you a clear picture of
            what your assets are worth and what Brownstone can offer.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <div className="success-title">Evaluation Request Received</div>
            <p className="success-text">
              Thank you for reaching out to Brownstone Resources. One of our specialists
              will contact you within 1–2 business days to begin your free land evaluation.
              We look forward to working with you.
            </p>
          </div>
        ) : (
          <form className="form-card" onSubmit={submit}>
            {/* ── YOUR INFO ── */}
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Your Information
            </p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  className="form-input"
                  name="firstName"
                  value={form.firstName}
                  onChange={handle}
                  required
                  placeholder="John"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  className="form-input"
                  name="lastName"
                  value={form.lastName}
                  onChange={handle}
                  required
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="+1 (306) 555-0100"
                />
              </div>
            </div>

            <hr className="form-divider" />

            {/* ── LAND DETAILS ── */}
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Land or Mineral Rights Details
            </p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Province *</label>
                <select
                  className="form-select"
                  name="province"
                  value={form.province}
                  onChange={handle}
                  required
                >
                  <option value="">Select province</option>
                  {PROVINCES.map((p: string) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Asset Type *</label>
                <select
                  className="form-select"
                  name="landType"
                  value={form.landType}
                  onChange={handle}
                  required
                >
                  <option value="">Select type</option>
                  {ASSET_TYPES.map((t: string) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Approximate Acreage</label>
              <input
                className="form-input"
                name="acres"
                value={form.acres}
                onChange={handle}
                placeholder="e.g. 640 acres"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description of Property</label>
              <textarea
                className="form-textarea"
                name="description"
                value={form.description}
                onChange={handle}
                placeholder="Tell us about your land — location (quarter section, RM), current use, soil type, known mineral activity, etc."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Timeline for Sale</label>
              <select
                className="form-select"
                name="timeline"
                value={form.timeline}
                onChange={handle}
              >
                <option value="">Select timeline</option>
                {TIMELINES.map((t: string) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">How Did You Hear About Brownstone?</label>
              <select
                className="form-select"
                name="heard"
                value={form.heard}
                onChange={handle}
              >
                <option value="">Select one</option>
                {HEARD_FROM.map((h: string) => <option key={h}>{h}</option>)}
              </select>
            </div>

            <p className="form-note">
              By submitting this form, you agree to be contacted by a Brownstone Resources
              specialist. All information is kept strictly confidential and used solely for
              evaluation purposes.
            </p>

            <button
              type="submit"
              className="btn btn-soil"
              style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
            >
              Submit Evaluation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EvalPage;
