'use client';
import Link from "next/link";
import { useState } from "react";

const SERVICES = {
  owners: [
    { title: "Pre-feasibility & Conceptual Studies", body: "Feasibility study support across all stages from conceptual through full feasibility. Praetorian provides technical reporting, design support and review, constructability input, and expertise in developing specific sections of study reports to ensure the owner's interests are represented throughout the study process." },
    { title: "Early Project Planning", body: "Budget development and validation, project financing application support, and early planning frameworks aligned to stage gate requirements. Praetorian helps owners establish the financial and planning foundation that lenders, boards, and joint-venture partners require before committing capital." },
    { title: "Execution & Contracting Strategy", body: "Development of execution strategies, community and social responsibility plans, and fit-for-project contracting strategies. Praetorian ensures the contracting model, execution sequence, and community engagement approach are aligned before the project enters the market." },
    { title: "Study Development & Planning", body: "Praetorian embeds study managers and technical leads into the owner's team from concept through prefeasibility and feasibility, ensuring study scope, cost basis, and schedule assumptions are set by people who will be accountable for execution. We align study deliverables to your stage gate requirements, not a consultant's standard template." },
    { title: "Project Execution Readiness", body: "Before a project reaches sanction, the execution framework must already be in place. Praetorian assesses contracting strategy, procurement readiness, organisation design, and controls infrastructure so that first dollar of capital is spent against a plan that will hold." },
    { title: "Project Execution Support", body: "Once capital is sanctioned, Praetorian provides the full owner's team: project manager, controls lead, procurement lead, HSE representative, and document controller -- scaled to the project's stage and complexity. We manage the contractors so the owner maintains authority over scope, cost, and schedule." },
    { title: "Project Due Diligence", body: "Independent review of a project's technical, commercial, and execution basis -- whether for investment decision, acquisition, or internal governance. Praetorian delivers findings the owner can act on, not a report written to satisfy a process." },
    { title: "Health, Safety, Security, and Environment Oversight", body: "Owner-side HSSE representation embedded in the project team, not parachuted in for audits. Praetorian monitors contractor HSSE performance against the project's safety case, supports incident investigation, and ensures the owner's duty of care is actively discharged throughout the project lifecycle." },
    { title: "Shutdown & Turnaround", body: "Scope development, contractor management, and controls support for planned shutdowns and turnarounds. Praetorian helps owners set realistic scope freezes, manage cost growth, and close out safely -- protecting production targets and asset integrity." },
  ],
  project: [
    { title: "Procurement & Contracts", body: "Contracting strategy, tender package development, bid evaluation, and contract administration. Praetorian structures procurement to match project risk profile and market conditions, and stays engaged through contract close-out to protect the owner's commercial position." },
    { title: "Cost Control & Estimating", body: "Independent cost estimating, budget development, and ongoing cost control throughout execution. Praetorian maintains the owner's cost position with rigour -- tracking commitments, accruals, trends, and forecasts so there are no surprises at close-out." },
    { title: "Planning & Scheduling", body: "Integrated project schedules that reflect real contractor logic, procurement lead times, and resource constraints. Praetorian builds and maintains schedules the project team actually uses to make decisions, and identifies critical path risks before they become delays." },
    { title: "Document Management", body: "Structured document control systems and protocols that ensure the right revision reaches the right party at the right time. Praetorian establishes document management frameworks that support construction, commissioning, and handover -- and that the asset owner can operate against for the life of the facility." },
    { title: "Risk Management", body: "Systematic identification, quantification, and active management of project risk. Praetorian facilitates risk workshops, maintains the risk register, and integrates risk outcomes into cost and schedule contingency so the owner holds a defensible position at every stage gate." },
  ],
  construction: [
    { title: "Civil & Earthworks", body: "Site preparation, earthworks, haul roads, access roads, sediment ponds, diversion channels and geosynthetic-lined storage facilities. Praetorian manages civil contractors to deliver foundations and bulk earthworks that meet design intent and construction programme requirements." },
    { title: "Structural Steel & Concrete", body: "Structural fabrication, erection and concrete works for process plants, mine facilities and infrastructure buildings. Praetorian provides owner-side oversight of structural contractors to ensure quality, dimensional control and programme adherence from first pour through final bolt-up." },
    { title: "Mechanical & Piping", body: "Equipment installation including crushers, conveyors, thickeners, pumps, compressors and associated piping systems. Praetorian coordinates mechanical contractor sequencing, equipment preservation, and alignment with vendor representatives to protect equipment warranties and commissioning timelines." },
    { title: "Electrical & Instrumentation", body: "Power distribution, switching stations, MCCs, VFDs, instrumentation and underground electrical systems. Praetorian manages E&I contractors through installation, loop checks and pre-commissioning to ensure systems are handed over ready for energisation." },
    { title: "Process Plant Construction", body: "Construction management of process circuits, ADR facilities, heap leach pads, paste plants and concentrators. Praetorian coordinates multi-discipline construction sequencing to meet process plant completion milestones and protect the critical path to first production." },
    { title: "Underground Construction", body: "Underground dewatering, equipment maintenance facilities, raise bore shafts and fresh air and return air systems. Praetorian brings surface project management discipline to underground environments, coordinating logistics, ventilation, and contractor interfaces in confined and high-hazard conditions." },
    { title: "Commissioning & Turnover", body: "Pre-commissioning, completions management, punch list closure and client operations team training. Praetorian manages the systematic handover of systems from construction to operations, ensuring turnover packages are complete and the operations team is ready to receive the asset." },
  ],
  operational: [
    { title: "Leadership Alignment", body: "Praetorian works with asset leadership teams to align on operational priorities, performance targets, and organisational accountabilities. Structured facilitation that converts strategic intent into a shared operating model the team can execute against." },
    { title: "Change Management", body: "Structured support for organisations navigating operational transitions -- new systems, restructured teams, revised operating procedures, or post-project integration. Praetorian helps leadership manage the human side of change so performance targets are met during the transition, not after it." },
    { title: "Asset Integrity", body: "Assessment and improvement of the systems, processes, and competencies that keep physical assets performing safely within design limits. Praetorian helps operators identify integrity gaps before they become incidents and build the management systems to close them." },
    { title: "Asset Optimisation", body: "Performance analysis and improvement programmes targeting throughput, availability, and unit cost. Praetorian works from operating data to identify the highest-value opportunities and supports implementation through to sustained results." },
    { title: "Process Safety Management", body: "Review and strengthening of process safety management systems across the hierarchy of controls -- from hazard identification and barrier management through to emergency response and learning from incidents. Praetorian brings an owner's perspective to process safety: accountability sits with the operator, and the management system must reflect that." },
  ],
};

function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e4e6e7" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "0", padding: "13px 0", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", color: "#1c2226", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-work-sans), sans-serif" }}>
        {title}
        <span style={{ color: "#B06533", fontSize: "20px", lineHeight: "1", flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#5b6266", paddingBottom: "14px" }}>{body}</div>}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              Home
            </Link>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>Services</div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(34px,4.6vw,58px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.04", maxWidth: "22ch" }}>Four service families, one integrated owner&apos;s team</h1>
            <p style={{ fontSize: "16.5px", lineHeight: "1.62", maxWidth: "62ch", color: "#c3d0d4", margin: "18px 0 0" }}>Praetorian scales from a single embedded specialist to a full owner&apos;s project management office. Every engagement is staffed against your stage gates, not ours.</p>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", borderBottom: "1px solid #e4e6e7" }}>
            <div id="owners-team-support" style={{ padding: "0 clamp(14px,1.8vw,22px) 34px 0", borderRight: "1px solid #e4e6e7", scrollMarginTop: "100px" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "13px", letterSpacing: ".2em", color: "#B06533" }}>01</div>
              <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "12px 0 10px", color: "#003E52" }}>Owner&apos;s Team Support</h3>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 18px" }}>Embedded directly in your team, from study through handover.</p>
              <div style={{ borderTop: "1px solid #e4e6e7" }}>
                {SERVICES.owners.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
              </div>
            </div>
            <div id="project-services" style={{ padding: "0 clamp(14px,1.8vw,22px) 34px", borderRight: "1px solid #e4e6e7", scrollMarginTop: "100px" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "13px", letterSpacing: ".2em", color: "#B06533" }}>02</div>
              <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "12px 0 10px", color: "#003E52" }}>Project Services</h3>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 18px" }}>Technical and commercial controls across the full project lifecycle.</p>
              <div style={{ borderTop: "1px solid #e4e6e7" }}>
                {SERVICES.project.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
              </div>
            </div>
            <div style={{ padding: "0 clamp(14px,1.8vw,22px) 34px", borderRight: "1px solid #e4e6e7" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "13px", letterSpacing: ".2em", color: "#B06533" }}>03</div>
              <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "12px 0 10px", color: "#003E52" }}>Construction Execution</h3>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 18px" }}>On-the-ground construction management across all disciplines, from civil and structural through to mechanical, electrical and commissioning.</p>
              <div style={{ borderTop: "1px solid #e4e6e7" }}>
                {SERVICES.construction.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
              </div>
            </div>
            <div id="operational-consulting" style={{ padding: "0 0 34px clamp(14px,1.8vw,22px)", scrollMarginTop: "100px" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "13px", letterSpacing: ".2em", color: "#B06533" }}>04</div>
              <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "12px 0 10px", color: "#003E52" }}>Operational Consulting</h3>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 18px" }}>Long-term operational performance after the project is handed over.</p>
              <div style={{ borderTop: "1px solid #e4e6e7" }}>
                {SERVICES.operational.map(item => <AccordionItem key={item.title} title={item.title} body={item.body} />)}
              </div>
            </div>
          </div>
        </section>
      <section style={{ background: '#f7f7f7', padding: 'clamp(46px,6vw,84px) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533', marginBottom: '12px' }}>Our Approach</div>
          <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '0 0 12px', color: '#003E52' }}>How We Deliver</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 44px' }}>Praetorian offers a range of services to clients in the industrial sector. From Early Planning to Project Turnover, we optimize the value added to our clients through projects that are executed safely and delivered on time and on budget.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(480px,1fr))', gap: 'clamp(20px,2.6vw,28px)' }}>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #003E52' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Engineering Support and Constructability</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian provides assistance to its clients by way of input and review of feasibility studies and other technical reports. We work with client's ownership and design teams to improve the quality of their studies and technical reports.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian also provide project supports through engineering review and support. We provide value engineering services, and constructability review and input. This ensures that projects are planned and designed with a focus on construction as construction is where the most resources are spent.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Utilizing Praetorian's Constructability team, clients can realize cost savings, increase workmanship quality and optimize the project's construction schedule.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>Through Praetorian's integrated planning and ongoing group collaboration, the goals of a project can be achieved on time and on budget. By integrating Praetorian's construction expertise with the project's design team during the conceptual engineering of a project, we can identify any potential inefficiencies early and make recommendations for improvement. For example, Praetorian may suggest a small design change that could produce significant construction cost savings and schedule performance improvements. Our constructability team also works with the client in the procurement, construction and commissioning stages to ensure that all opportunities to reduce costs and improve quality are realized.</p>
            </div>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #B06533' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Early Planning and Financing Support</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian provides early project planning services to its clients to ensure that project execution is aligned with project goals. We believe that the best value is obtained when projects are properly setup at the beginning and that course-correction later in the project comes at a greater cost.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>Praetorian helps its clients in developing project budgets, validating project budgets, and financial presentations to third parties. We use our staff's experience, a database of project cost and performance to help validate project budgets and assist clients in the project financing efforts. Praetorian leaders have attended interviews with financing bodies including the World Bank to help facilitate project financing.</p>
            </div>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #98999B' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Procurement and Logistics</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>The procurement strategy is a major component of a successful project. Engaging Praetorian on front end planning of purchasing and contracting strategies ensures that clients can take advantage of Praetorian's experience and lessons learnt over the years.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Logistics and resource management become paramount in managing the construction of a major industrial project, particularly one situated in a remote location. Praetorian's Procurement and Logistics Group works with clients at an early stage to identify and enhance the program/project deliverables for constructability. This is done by utilizing our construction management experience to establish a flexible service team that incorporates the project requirements to build and implement a specific strategic sourcing plan.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>Praetorian is then able to support our clients in their procurement needs including Call for tender, Bid review and recommendations and Contract award. Praetorian project teams use their expertise in optimizing construction to track and improve every stage of performance in the procurement and logistics supply chain to deliver superior value to the project.</p>
            </div>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #003E52' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Project Controls</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian Project Controls team have diverse experience over the years. Our team performs a careful review of project requirements including for active project control, contractor management, reporting and post-project data requirements for operations. The team then selects the optimum tools for managing the project. We set up the project to ensure all requirements are met for a successful project delivery.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>The Praetorian team provides a full project controls package for clients. We provide our services from the feasibility stage of a project through to its development, design, construction and commissioning including establishment of: Work flows, Budgets, Costing, Scheduling, Integration with procurement and logistics, Document control, Forecasting, Change management, Purchasing procedures and forms, Project planning, Warehousing, Materials management and warehousing, Work packages, Commissioning and project turnover.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>Our extensive project experience has given Praetorian an understanding of the need to have flexibility within our project execution structure. We recognize that the essence of any well-managed project is the ability, if required, to adjust and adapt the project to changing circumstances. With our front-end focus, Praetorian develops a custom package of effective management tools and meaningful manageable budget that guides a project from inception through to successful completion and commissioning.</p>
            </div>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #B06533' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Construction Management</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>One unique aspect of our construction management team is the ability to provide supervision, survey and data management support to a client's mining project. In the case of a major mining project, Praetorian has significant experience in facilitating the construction of mine site heavy earthworks projects.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>This experience includes the evaluation of large dam and earthworks facilities that can be easily translated to water management projects as well as large hydro electric reservoir projects. Logistics and resource management become paramount in a remote operation. Praetorian's experience enables us to properly tailor the project team to a variety of conditions and client demands.</p>
            </div>
            <div data-reveal='' style={{ background: '#fff', padding: '32px 30px', borderLeft: '4px solid #98999B' }}>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 14px' }}>Quality, Commissioning and Turnover</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian performs Quality Assurance and Quality Control on its multidiscipline projects. Working with the Design team, we ensure that all the appropriate tools are established to guide the contractor in delivering a top-quality project. Whether it is Civil, Concrete, Mass Earthworks, Mechanical, Piping, Electrical or Instrumentation, Praetorian builds Quality into its delivery approach and ensure that the contractors that we manage execute projects following the required Quality standards.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0 0 14px' }}>Praetorian Quality team has vast experience in performing Quality Control on large and medium projects. We have developed effective processes that are deployed to ensure that all project Quality requirements are met. At a project's inception, Praetorian establishes work groups with the client to identify project requirements and to establish the degree of involvement the client wishes to take with respect to the commissioning and turnover phases of the project.</p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#555c60', margin: '0' }}>Praetorian ensures that the project is properly handed over to the end users and that they are properly trained using various vendor representatives. We work with client asset management teams to ensure that all relevant spares are procured.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}