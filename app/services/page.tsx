'use client';
import Link from "next/link";
import { useState } from "react";

const SERVICES = {
  owners: [
    {
      title: "Study Development & Planning",
      body: "Praetorian embeds study managers and technical leads into the owner's team from concept through prefeasibility and feasibility, ensuring study scope, cost basis, and schedule assumptions are set by people who will be accountable for execution. We align study deliverables to your stage gate requirements, not a consultant's standard template."
    },
    {
      title: "Project Execution Readiness",
      body: "Before a project reaches sanction, the execution framework must already be in place. Praetorian assesses contracting strategy, procurement readiness, organisation design, and controls infrastructure so that first dollar of capital is spent against a plan that will hold."
    },
    {
      title: "Project Execution Support",
      body: "Once capital is sanctioned, Praetorian provides the full owner's team: project manager, controls lead, procurement lead, HSE representative, and document controller -- scaled to the project's stage and complexity. We manage the contractors so the owner maintains authority over scope, cost, and schedule."
    },
    {
      title: "Project Due Diligence",
      body: "Independent review of a project's technical, commercial, and execution basis -- whether for investment decision, acquisition, or internal governance. Praetorian delivers findings the owner can act on, not a report written to satisfy a process."
    },
    {
      title: "Health, Safety, Security, and Environment Oversight",
      body: "Owner-side HSSE representation embedded in the project team, not parachuted in for audits. Praetorian monitors contractor HSSE performance against the project's safety case, supports incident investigation, and ensures the owner's duty of care is actively discharged throughout the project lifecycle."
    },
    {
      title: "Shutdown & Turnaround",
      body: "Scope development, contractor management, and controls support for planned shutdowns and turnarounds. Praetorian helps owners set realistic scope freezes, manage cost growth, and close out safely -- protecting production targets and asset integrity."
    },
  ],
  project: [
    {
      title: "Procurement & Contracts",
      body: "Contracting strategy, tender package development, bid evaluation, and contract administration. Praetorian structures procurement to match project risk profile and market conditions, and stays engaged through contract close-out to protect the owner's commercial position."
    },
    {
      title: "Cost Control & Estimating",
      body: "Independent cost estimating, budget development, and ongoing cost control throughout execution. Praetorian maintains the owner's cost position with rigour -- tracking commitments, accruals, trends, and forecasts so there are no surprises at close-out."
    },
    {
      title: "Planning & Scheduling",
      body: "Integrated project schedules that reflect real contractor logic, procurement lead times, and resource constraints. Praetorian builds and maintains schedules the project team actually uses to make decisions, and identifies critical path risks before they become delays."
    },
    {
      title: "Document Management",
      body: "Structured document control systems and protocols that ensure the right revision reaches the right party at the right time. Praetorian establishes document management frameworks that support construction, commissioning, and handover -- and that the asset owner can operate against for the life of the facility."
    },
    {
      title: "Risk Management",
      body: "Systematic identification, quantification, and active management of project risk. Praetorian facilitates risk workshops, maintains the risk register, and integrates risk outcomes into cost and schedule contingency so the owner holds a defensible position at every stage gate."
    },
  ],
  operational: [
    {
      title: "Leadership Alignment",
      body: "Praetorian works with asset leadership teams to align on operational priorities, performance targets, and organisational accountabilities. Structured facilitation that converts strategic intent into a shared operating model the team can execute against."
    },
    {
      title: "Change Management",
      body: "Structured support for organisations navigating operational transitions -- new systems, restructured teams, revised operating procedures, or post-project integration. Praetorian helps leadership manage the human side of change so performance targets are met during the transition, not after it."
    },
    {
      title: "Asset Integrity",
      body: "Assessment and improvement of the systems, processes, and competencies that keep physical assets performing safely within design limits. Praetorian helps operators identify integrity gaps before they become incidents and build the management systems to close them."
    },
    {
      title: "Asset Optimisation",
      body: "Performance analysis and improvement programmes targeting throughput, availability, and unit cost. Praetorian works from operating data to identify the highest-value opportunities and supports implementation through to sustained results."
    },
    {
      title: "Process Safety Management",
      body: "Review and strengthening of process safety management systems across the hierarchy of controls -- from hazard identification and barrier management through to emergency response and learning from incidents. Praetorian brings an owner's perspective to process safety: accountability sits with the operator, and the management system must reflect that."
    },
  ],
};

function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e4e6e7' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'none', border: '0', padding: '13px 0', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', color: '#1c2226', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-work-sans), sans-serif' }}
      >
        {title}
        <span style={{ color: '#B06533', fontSize: '20px', lineHeight: '1', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#5b6266', paddingBottom: '14px' }}>
          {body}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Services</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '22ch' }}>Three service families, one integrated owner&apos;s team</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian scales from a single embedded specialist to a full owner&apos;s project management office. Every engagement is staffed against your stage gates, not ours.</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0' }}>
              <div id="owners-team-support" style={{ padding: '0 clamp(20px,2.4vw,32px) 34px 0', borderRight: '1px solid #e4e6e7', scrollMarginTop: '100px' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>01</div>
                <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Owner&apos;s Team Support</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Embedded directly in your team, from study through handover.</p>
                <div style={{ borderTop: '1px solid #e4e6e7' }}>
                  {SERVICES.owners.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
                </div>
              </div>
              <div id="project-services" style={{ padding: '0 clamp(20px,2.4vw,32px) 34px', borderRight: '1px solid #e4e6e7', scrollMarginTop: '100px' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>02</div>
                <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Project Services</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Technical and commercial controls across the full project lifecycle.</p>
                <div style={{ borderTop: '1px solid #e4e6e7' }}>
                  {SERVICES.project.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
                </div>
              </div>
              <div id="operational-consulting" style={{ padding: '0 0 34px clamp(20px,2.4vw,32px)', scrollMarginTop: '100px' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>03</div>
                <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Operational Consulting</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Long-term operational performance after the project is handed over.</p>
                <div style={{ borderTop: '1px solid #e4e6e7' }}>
                  {SERVICES.operational.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}