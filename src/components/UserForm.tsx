import { useState, useEffect } from "react";
import type { User } from "../types/user";

const UserForm = ({ open, onClose, onSubmit, initial }: any) => {
  const [form, setForm] = useState<Partial<User>>(initial || {});

  useEffect(() => setForm(initial || {}), [initial]);
  if (!open) return null;

  const change = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>User Form</h3>

        {/* Name field */}
        <label className="field">
          <span className="label">Name:</span>
          <input
            name="name"
            placeholder="Enter name"
            value={form.name || ""}
            onChange={change}
          />
        </label>

        {/* Email field */}
        <label className="field">
          <span className="label">Email:</span>
          <input
            name="email"
            placeholder="Enter email"
            value={form.email || ""}
            onChange={change}
          />
        </label>

        {/* Phone field  added to make sure users know what to add */}
        <label className="field">
          <span className="label">Phone:</span>
          <input
            name="phone"
            placeholder="Enter phone number"
            value={form.phone || ""}
            onChange={change}
          />
        </label>

        <div className="modal-actions">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => onSubmit(form)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

