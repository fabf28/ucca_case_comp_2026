import { useState } from "react";
import type { FC, ChangeEvent, FormEvent } from "react";
import type { ReferFormState } from "../types";
import { PROVINCES } from "../data";

const REFER_ASSET_TYPES: string[] = [
  "Farmland (surface rights)",
  "Mineral rights",
  "Both",
];

const INITIAL_STATE: ReferFormState = {
  yourName: "",
  yourEmail: "",
  yourPhone: "",
  refName: "",
  refPhone: "",
  refEmail: "",
  refProvince: "",
  refAsset: "",
  refNotes: "",
};

interface Highlight {
  title: string;
  body: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Quick",
    body: "We move fast — landowners hear from us within 48 hours",
  },
  {
    title: "Confidential",
    body: "All referral information is kept strictly private",
  },
  {
    title: "Simple",
    body: "Just a name and contact — we handle the rest",
  },
];

const ReferPage: FC = () => {
  const [form, setForm] = useState<ReferFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handle = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev: ReferFormState) => ({ ...prev, [name]: value }));
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
          <p className="section-label">Brownstone Referral Program</p>
          <h1 className="section-title">Refer a Landowner</h1>
          <p className="section-body">
            Know a landowner in Saskatchewan, Alberta, or Manitoba who might benefit
            from Brownstone's services? Refer them below and we'll take it from there.
            Great land advice should spread like good seed.
          </p>
        </div>

        {/* Highlight banner */}
        <div
          style={{
            background: "var(--wheat)",
            borderRadius: 8,
            padding: "1.5rem 2rem",
            marginBottom: "2rem",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {HIGHLIGHTS.map((h: Highlight) => (
            <div key={h.title} style={{ flex: "1 1 180px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--soil)",
                  marginBottom: "0.25rem",
                }}
              >
                {h.title}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(46,28,12,0.7)",
                  lineHeight: 1.6,
                }}
              >
                {h.body}
              </div>
            </div>
          ))}
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <div className="success-title">Referral Submitted</div>
            <p className="success-text">
              Thank you for your referral. A Brownstone specialist will reach out to
              your contact within 48 hours. We appreciate your trust in recommending us.
            </p>
          </div>
        ) : (
          <form className="form-card" onSubmit={submit}>
            {/* ── YOUR DETAILS ── */}
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Your Details
            </p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  className="form-input"
                  name="yourName"
                  value={form.yourName}
                  onChange={handle}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input
                  className="form-input"
                  type="email"
                  name="yourEmail"
                  value={form.yourEmail}
                  onChange={handle}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Phone (optional)</label>
              <input
                className="form-input"
                name="yourPhone"
                value={form.yourPhone}
                onChange={handle}
                placeholder="+1 (306) 555-0100"
              />
            </div>

            <hr className="form-divider" />

            {/* ── REFERRAL DETAILS ── */}
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Who Are You Referring?
            </p>

            <div className="form-group">
              <label className="form-label">Landowner's Name *</label>
              <input
                className="form-input"
                name="refName"
                value={form.refName}
                onChange={handle}
                required
                placeholder="Full name of the person you're referring"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Their Phone Number *</label>
                <input
                  className="form-input"
                  name="refPhone"
                  value={form.refPhone}
                  onChange={handle}
                  required
                  placeholder="+1 (306) 555-0200"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Their Email (if known)</label>
                <input
                  className="form-input"
                  type="email"
                  name="refEmail"
                  value={form.refEmail}
                  onChange={handle}
                  placeholder="their@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Province *</label>
                <select
                  className="form-select"
                  name="refProvince"
                  value={form.refProvince}
                  onChange={handle}
                  required
                >
                  <option value="">Select province</option>
                  {PROVINCES.map((p: string) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Asset Type (if known)</label>
                <select
                  className="form-select"
                  name="refAsset"
                  value={form.refAsset}
                  onChange={handle}
                >
                  <option value="">Not sure</option>
                  {REFER_ASSET_TYPES.map((a: string) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Any Additional Notes?</label>
              <textarea
                className="form-textarea"
                name="refNotes"
                value={form.refNotes}
                onChange={handle}
                placeholder="Any context that might help our team — approximate acreage, their situation, how you know them, etc."
              />
            </div>

            <p className="form-note">
              By submitting this form, you confirm you have permission to share this
              person's contact information with Brownstone Resources. All information
              will be handled with full confidentiality.
            </p>

            <button
              type="submit"
              className="btn btn-soil"
              style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
            >
              Submit Referral
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReferPage;
