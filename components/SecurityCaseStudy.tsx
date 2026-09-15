import React from 'react';

export default function SecurityCaseStudy(){
  return (
    <section id="security" className="mt-16">
      <h3 className="text-2xl font-semibold">OWASP SECURITY SELF-AUDIT <span className="text-sm text-amber-300">IN PROGRESS</span></h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="card p-4 rounded-lg">
          <h4 className="font-semibold">Process</h4>
          <pre className="mt-2 text-sm bg-black/20 p-3 rounded whitespace-pre-wrap">{`APPLICATION
  ↓
RECON
  ↓
AUTH TESTING
  ↓
AUTHORIZATION TESTING
  ↓
INPUT / API TESTING
  ↓
CONFIGURATION REVIEW
  ↓
FINDINGS
  ↓
REMEDIATION
  ↓
RETEST`}</pre>
        </div>
        <div className="card p-4 rounded-lg">
          <h4 className="font-semibold">Findings</h4>
          <div className="mt-3 text-sm text-slate-300 whitespace-pre-line">{`Finding #01
Severity: TBD
Status: Testing

Root Cause: Pending assessment

Remediation: Pending assessment

Retest: Pending`}</div>
        </div>
      </div>
    </section>
  );
}
