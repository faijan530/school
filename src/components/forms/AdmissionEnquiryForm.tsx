import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function AdmissionEnquiryForm({ contactEmail, contactPhone }: { contactEmail?: string, contactPhone?: string }) {
  const [status, setStatus] = useState<'idle' | 'acknowledged'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!data.studentName || (data.studentName as string).trim() === '') newErrors.studentName = "Student name is required";
    if (!data.guardianName || (data.guardianName as string).trim() === '') newErrors.guardianName = "Guardian name is required";
    if (!data.phone || (data.phone as string).trim() === '') newErrors.phone = "Phone is required";
    if (!data.applyingFor || data.applyingFor === '') newErrors.applyingFor = "Please select a grade/class";
    if (!data.dateOfBirth || data.dateOfBirth === '') newErrors.dateOfBirth = "Date of birth is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('acknowledged');
    e.currentTarget.reset();
  };

  if (status === 'acknowledged') {
    return (
      <div className="form-card animate-fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '70px', height: '70px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={40} />
        </div>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Enquiry Submitted Successfully!</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
          Thank you for reaching out to Gyan Deep Convent School. Our admissions counselor will review your inquiry and contact you within 24-48 business hours.
        </p>
        <div style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '1rem', marginBottom: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
          💡 <em>Note: This interactive form is operating in live preview mode for demonstration purposes. Direct contact: {contactPhone || contactEmail || 'our admissions office'}.</em>
        </div>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-card animate-fade-in">
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)' }}>Online Admission Enquiry 2027-28</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '0.25rem' }}>Please fill in the prospective student details to receive our prospectus & campus tour invitation.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        <div className="form-group">
          <label htmlFor="studentName" className="form-label">Prospective Student Full Name *</label>
          <input type="text" id="studentName" name="studentName" className="form-input" placeholder="e.g. Aarav Sharma" />
          {errors.studentName && <span className="form-error">{errors.studentName}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth *</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-input" />
          {errors.dateOfBirth && <span className="form-error">{errors.dateOfBirth}</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        <div className="form-group">
          <label htmlFor="applyingFor" className="form-label">Applying for Grade / Standard *</label>
          <select id="applyingFor" name="applyingFor" className="form-select">
            <option value="">Select Target Grade...</option>
            <option value="nursery">Pre-School / Nursery</option>
            <option value="kindergarten">Kindergarten (KG1 - KG2)</option>
            <option value="primary">Primary School (Grades 1 - 5)</option>
            <option value="middle">Middle School (Grades 6 - 8)</option>
            <option value="high">Secondary High School (Grades 9 - 10)</option>
            <option value="senior">Senior Secondary (Grades 11 - 12)</option>
          </select>
          {errors.applyingFor && <span className="form-error">{errors.applyingFor}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guardianName" className="form-label">Parent / Guardian Full Name *</label>
          <input type="text" id="guardianName" name="guardianName" className="form-input" placeholder="e.g. Vikram Sharma" />
          {errors.guardianName && <span className="form-error">{errors.guardianName}</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Contact Mobile Number *</label>
          <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 98765 43210" />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address (Optional)</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="parent@example.com" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Additional Questions or Notes (Optional)</label>
        <textarea id="message" name="message" rows={3} className="form-textarea" placeholder="Tell us about previous academic background or specific interests..."></textarea>
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.9rem' }}>
        <Send size={18} /> Submit Application Enquiry
      </button>
    </form>
  );
}
