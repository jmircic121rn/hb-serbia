import React, { useState } from 'react';

const DEMO_EMAIL = 'janamircic17@gmail.com';
const DEMO_LANG = 'en';

const SAMPLE_ANSWERS = [
  // RESULTS - SHORT-TERM GOALS
  { id: 'R_STG_1.1C', score: 1, facet: 'Goal Setting & Operational Focus', pillar: 'SHORT-TERM GOALS', dimension: 'RESULTS', type: 'core',
    questionText: 'SA - Core Scenario 1.1: It is the start of a busy quarter...',
    selectedText: 'B. Assign tasks based on immediate priorities and monitor progress as issues emerge...' },
  { id: 'R_STG_1.1R', score: 3, facet: 'Goal Setting & Operational Focus', pillar: 'SHORT-TERM GOALS', dimension: 'RESULTS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 1.1: When performance gaps emerge during a quarter...',
    selectedText: 'B. Initially clear goals sometimes need adjustment due to new information or external factors...' },
  { id: 'R_STG_1.2C', score: 3, facet: 'Problem-Solving & Decision Making', pillar: 'SHORT-TERM GOALS', dimension: 'RESULTS', type: 'core',
    questionText: 'SA - Core Scenario 1.2: A critical operational error occurs unexpectedly...',
    selectedText: 'C. I remain calm, organize the team to diagnose the problem, and make a structured decision...' },
  { id: 'R_STG_1.2R', score: 5, facet: 'Problem-Solving & Decision Making', pillar: 'SHORT-TERM GOALS', dimension: 'RESULTS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 1.2: When you resolve an operational crisis...',
    selectedText: 'C. Similar problems rarely recur. The systemic fixes we implement tend to hold...' },

  // RESULTS - LONG-TERM CHANGE
  { id: 'R_LTC_1.3C', score: 5, facet: 'Strategic Thinking & Vision', pillar: 'LONG-TERM CHANGE', dimension: 'RESULTS', type: 'core',
    questionText: 'SA - Core Scenario 1.3: Your industry is experiencing rapid shifts...',
    selectedText: 'B. Translate market dynamics into a clear vision for where the team needs to go...' },
  { id: 'R_LTC_1.3R', score: 1, facet: 'Strategic Thinking & Vision', pillar: 'LONG-TERM CHANGE', dimension: 'RESULTS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 1.3: When your team pursues long-term capability development...',
    selectedText: 'B. Team members struggle to prioritize learning alongside daily work...' },
  { id: 'R_LTC_1.4C', score: 1, facet: 'Innovation & Process Optimization', pillar: 'LONG-TERM CHANGE', dimension: 'RESULTS', type: 'core',
    questionText: 'SA - Core Scenario 1.4: A significant, complex process in your team needs optimization...',
    selectedText: 'B. I prioritize getting my team aligned with the organizational transformation...' },
  { id: 'R_LTC_1.4R', score: 1, facet: 'Innovation & Process Optimization', pillar: 'LONG-TERM CHANGE', dimension: 'RESULTS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 1.4: When you have led a significant organizational change initiative...',
    selectedText: 'A. Other teams saw the value but encountered obstacles in their own context...' },

  // MINDSET - TOWARDS ONESELF
  { id: 'M_TO_2.1C', score: 1, facet: 'Self-Awareness & Growth Mindset', pillar: 'TOWARDS ONESELF', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.1: You receive significant constructive feedback from a colleague...',
    selectedText: 'B. I listen to the feedback but find myself initially defending my approach...' },
  { id: 'M_TO_2.1R', score: 5, facet: 'Self-Awareness & Growth Mindset', pillar: 'TOWARDS ONESELF', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.1: When you receive feedback that challenges your approach...',
    selectedText: 'A. I\'m genuinely curious about feedback, even when it\'s difficult to hear...' },
  { id: 'M_TO_2.2C', score: 1, facet: 'Change Readiness', pillar: 'TOWARDS ONESELF', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.2: The company announces a significant organizational change...',
    selectedText: 'A. I acknowledge that change is disruptive and prefer to maintain my established work methods...' },
  { id: 'M_TO_2.2R', score: 5, facet: 'Change Readiness', pillar: 'TOWARDS ONESELF', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.2: When you face a significant change you didn\'t choose...',
    selectedText: 'B. I view change as normal and inevitable, and I use the disruption as a chance to reconsider...' },

  // MINDSET - TOWARDS OTHERS
  { id: 'M_TO_2.3C', score: 5, facet: 'Empathy & Conflict Resolution', pillar: 'TOWARDS OTHERS', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.3: Two colleagues are engaged in a heated disagreement...',
    selectedText: 'C. I see conflict as an opportunity for the team to strengthen working relationships...' },
  { id: 'M_TO_2.3R', score: 3, facet: 'Empathy & Conflict Resolution', pillar: 'TOWARDS OTHERS', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.3: In conflicts or disagreements you\'ve witnessed...',
    selectedText: 'C. I listen carefully and ask clarifying questions to understand what each person really cares about...' },
  { id: 'M_TO_2.4C', score: 3, facet: 'Team Commitment & Collaboration', pillar: 'TOWARDS OTHERS', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.4: Your team is facing a complex, high-stakes project...',
    selectedText: 'C. I participate in team activities and share my knowledge when asked...' },
  { id: 'M_TO_2.4R', score: 1, facet: 'Team Commitment & Collaboration', pillar: 'TOWARDS OTHERS', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.4: When a colleague is struggling or working in isolation...',
    selectedText: 'B. I often don\'t notice, or I assume they\'re handling it independently...' },

  // MINDSET - TOWARDS COMPANY
  { id: 'M_CP_2.5C', score: 5, facet: 'Accountability & Ownership', pillar: 'TOWARDS COMPANY & POSITION', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.5: A high-visibility project you are leading encounters a major setback...',
    selectedText: 'B. I take full accountability for the setback and work to understand what systemic factors contributed...' },
  { id: 'M_CP_2.5R', score: 1, facet: 'Accountability & Ownership', pillar: 'TOWARDS COMPANY & POSITION', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.5: When you\'ve made a difficult decision that wasn\'t popular...',
    selectedText: 'B. I defended my decision but listened to concerns...' },
  { id: 'M_CP_2.6C', score: 3, facet: 'Strategic Ownership', pillar: 'TOWARDS COMPANY & POSITION', dimension: 'MINDSET', type: 'core',
    questionText: 'SA - Core Scenario 2.6: You identify a significant opportunity for the company...',
    selectedText: 'C. I build a strong business case and actively engage key stakeholders...' },
  { id: 'M_CP_2.6R', score: 5, facet: 'Strategic Ownership', pillar: 'TOWARDS COMPANY & POSITION', dimension: 'MINDSET', type: 'reflection',
    questionText: 'SA - Reflection on Impact 2.6: When you\'ve proposed a strategic initiative that met resistance...',
    selectedText: 'C. I continued to advocate and engage stakeholders, building a compelling case...' },

  // SKILLS - PERSONAL EFFICIENCY
  { id: 'S_PE_3.1C', score: 5, facet: 'Priority & Time Management', pillar: 'PERSONAL EFFICIENCY', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.1: You are managing a heavy workload with multiple competing priorities...',
    selectedText: 'C. I thoughtfully design a priority system for my team that accounts for different types of work...' },
  { id: 'S_PE_3.1R', score: 5, facet: 'Priority & Time Management', pillar: 'PERSONAL EFFICIENCY', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.1: When your team has had to adapt to significant changes in tools...',
    selectedText: 'A. The team adapted relatively quickly to the change...' },
  { id: 'S_PE_3.2C', score: 3, facet: 'Personal Problem Solving', pillar: 'PERSONAL EFFICIENCY', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.2: Your team encounters a recurring, complex problem...',
    selectedText: 'C. I use problem-solving steps to analyse the recurring issue, identify contributing factors...' },
  { id: 'S_PE_3.2R', score: 3, facet: 'Personal Problem Solving', pillar: 'PERSONAL EFFICIENCY', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.2: When you\'ve solved a recurring problem in your team...',
    selectedText: 'A. The solution addressed the immediate issue effectively and has generally held up...' },

  // SKILLS - COMMUNICATION
  { id: 'S_CO_3.3C', score: 1, facet: 'Value-Based Communication', pillar: 'COMMUNICATION', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.3: You need to explain a complex new strategic initiative to a sceptical senior stakeholder...',
    selectedText: 'B. I prepare a thorough explanation of the initiative\'s strategic benefits and present the details comprehensively...' },
  { id: 'S_CO_3.3R', score: 1, facet: 'Value-Based Communication', pillar: 'COMMUNICATION', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.3: When you\'ve communicated a new initiative to a sceptical stakeholder...',
    selectedText: 'A. The stakeholder remained sceptical or declined...' },
  { id: 'S_CO_3.4C', score: 3, facet: 'Stakeholder Navigation', pillar: 'COMMUNICATION', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.4: You need to secure a critical resource or gain approval...',
    selectedText: 'C. I reach out to the other department, explain my project need, and ask about their priorities...' },
  { id: 'S_CO_3.4R', score: 5, facet: 'Stakeholder Navigation', pillar: 'COMMUNICATION', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.4: When you\'ve requested cross-functional support...',
    selectedText: 'C. The other department understood the request and was able to help...' },

  // SKILLS - TEAM & PEOPLE DEVELOPMENT
  { id: 'S_TPD_3.5C', score: 3, facet: 'Empowering Delegation', pillar: 'TEAM & PEOPLE DEVELOPMENT', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.5: You have a high-potential team member ready for a stretch assignment...',
    selectedText: 'C. I select the stretch assignment with both the project need and the person\'s development in mind...' },
  { id: 'S_TPD_3.5R', score: 3, facet: 'Empowering Delegation', pillar: 'TEAM & PEOPLE DEVELOPMENT', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.5: When you delegate a challenging assignment to a team member...',
    selectedText: 'A. The team member works through the challenges with periodic check-ins from me...' },
  { id: 'S_TPD_3.6C', score: 3, facet: 'Difficult Conversations', pillar: 'TEAM & PEOPLE DEVELOPMENT', dimension: 'SKILLS', type: 'core',
    questionText: 'SA - Core Scenario 3.6: You need to address a direct report\'s consistent negative behaviour...',
    selectedText: 'A. I prepare concrete examples and schedule a private conversation to discuss the negative behaviour...' },
  { id: 'S_TPD_3.6R', score: 1, facet: 'Difficult Conversations', pillar: 'TEAM & PEOPLE DEVELOPMENT', dimension: 'SKILLS', type: 'reflection',
    questionText: 'SA - Reflection on Impact 3.6: When you\'ve given difficult feedback to a team member...',
    selectedText: 'C. The conversation felt awkward or defensive...' },

  // INFLUENCE - HOW DO I MAKE MY TEAM FEEL?
  { id: 'I_MTF_4.1C', score: 3, facet: 'Emotional Intelligence & Inclusion', pillar: 'HOW DO I MAKE MY TEAM FEEL?', dimension: 'INFLUENCE', type: 'core',
    questionText: 'SA - Core Scenario 4.1: You are leading a team meeting discussing a sensitive organizational change...',
    selectedText: 'A. I acknowledge that change can create anxiety and invite the team to share their concerns...' },
  { id: 'I_MTF_4.1R', score: 1, facet: 'Emotional Intelligence & Inclusion', pillar: 'HOW DO I MAKE MY TEAM FEEL?', dimension: 'INFLUENCE', type: 'reflection',
    questionText: 'SA - Reflection on Impact 4.1: When you\'ve led a meeting with anxious or hesitant team members...',
    selectedText: 'A. Some team members remained visibly anxious or withdrawn throughout the meeting...' },
  { id: 'I_MTF_4.2C', score: 1, facet: 'Trust Building', pillar: 'HOW DO I MAKE MY TEAM FEEL?', dimension: 'INFLUENCE', type: 'core',
    questionText: 'SA - Core Scenario 4.2: You\'ve made a difficult leadership decision that negatively impacts a few individuals...',
    selectedText: 'B. I communicate the decision clearly and directly, explaining the business rationale...' },
  { id: 'I_MTF_4.2R', score: 5, facet: 'Trust Building', pillar: 'HOW DO I MAKE MY TEAM FEEL?', dimension: 'INFLUENCE', type: 'reflection',
    questionText: 'SA - Reflection on Impact 4.2: When you\'ve communicated a difficult decision that negatively affected some people...',
    selectedText: 'C. People understood the decision and the reasoning behind it...' },

  // INFLUENCE - HOW DO I INDUCE ACTION?
  { id: 'I_HIA_4.3C', score: 1, facet: 'Empowerment & Accountability', pillar: 'HOW DO I INDUCE ACTION?', dimension: 'INFLUENCE', type: 'core',
    questionText: 'SA - Core Scenario 4.3: Your team is facing a complex, high-stakes project with a critical deadline...',
    selectedText: 'B. I focus on delivering excellence in my assigned responsibilities and assume others are doing the same...' },
  { id: 'I_HIA_4.3R', score: 5, facet: 'Empowerment & Accountability', pillar: 'HOW DO I INDUCE ACTION?', dimension: 'INFLUENCE', type: 'reflection',
    questionText: 'SA - Reflection on Impact 4.3: When you\'ve tried to inspire ownership or drive action...',
    selectedText: 'C. Team members took more ownership after my engagement...' },
  { id: 'I_HIA_4.4C', score: 5, facet: 'Strategic Influence', pillar: 'HOW DO I INDUCE ACTION?', dimension: 'INFLUENCE', type: 'core',
    questionText: 'SA - Core Scenario 4.4: You identify a new, ambitious strategic direction...',
    selectedText: 'A. I think carefully about who needs to support the initiative and engage them in understanding the proposal...' },
  { id: 'I_HIA_4.4R', score: 1, facet: 'Strategic Influence', pillar: 'HOW DO I INDUCE ACTION?', dimension: 'INFLUENCE', type: 'reflection',
    questionText: 'SA - Reflection on Impact 4.4: When you\'ve advocated for a strategic initiative that faced resistance...',
    selectedText: 'B. The initiative was declined or significantly delayed...' },
];

const PILLAR_COLORS = {
  'KRATKOROČNI CILJEVI': '#4a9eff',
  'DUGOROČNE PROMENE': '#a78bfa',
  'PREMA SEBI': '#34d399',
  'PREMA DRUGIMA': '#fb923c',
  'PREMA KOMPANIJI': '#f472b6',
  'LIČNA EFIKASNOST': '#facc15',
  'KOMUNIKACIJA': '#22d3ee',
  'RAZVOJ TIMA I LJUDI': '#a3e635',
  'KAKO SE TIM OSEĆA': '#f87171',
  'KAKO PODSTIČEM AKCIJU': '#c084fc',
};

const SCORE_LABELS = { 1: 'Nizak', 3: 'Srednji', 5: 'Visok' };

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export default function Report2Demo() {
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [saveStatus, setSaveStatus] = useState('idle'); // idle | loading | done | error
  const [saveError, setSaveError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error
  const [errorMsg, setErrorMsg] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [pdfError, setPdfError] = useState('');

  const grouped = SAMPLE_ANSWERS.reduce((acc, q) => {
    if (!acc[q.pillar]) acc[q.pillar] = [];
    acc[q.pillar].push(q);
    return acc;
  }, {});

  const handleSaveToDb = async () => {
    setSaveStatus('loading');
    setSaveError('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: 'Demo',
          lastName: 'Korisnik',
          company: 'HB Demo',
          responses: SAMPLE_ANSWERS,
          type: 'leader',
          lang: DEMO_LANG,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSaveStatus('done');
      } else {
        setSaveError(data.message || `Greška pri upisu (${res.status}).`);
        setSaveStatus('error');
      }
    } catch (err) {
      setSaveError('Konekcija nije uspela.');
      setSaveStatus('error');
    }
  };

  const handleGenerate = async () => {
    setStatus('loading');
    setErrorMsg('');
    setGeneratedText('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/public-assessment/generate-authorized-report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang: DEMO_LANG }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setGeneratedText(data.report || '');
        setStatus('done');
      } else {
        setErrorMsg(data.message || 'Greška pri generisanju izveštaja.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Konekcija nije uspela. Proverite da li je server aktivan.');
      setStatus('error');
    }
  };

  const handleDownloadPdf = async () => {
    setPdfError('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/public-assessment/report2-pdf?email=${encodeURIComponent(email)}`);
      if (!res.ok) {
        let msg = `Server greška ${res.status}`;
        try {
          const errData = await res.json();
          msg = errData.message || errData.error || msg;
        } catch {}
        setPdfError(msg);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'HB_Compass_Report2.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setPdfError('Konekcija nije uspela: ' + err.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'Inter, sans-serif', padding: '80px 24px 60px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
            HB Compass — Demo
          </p>
          <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '12px', lineHeight: 1.2 }}>
            Report 2 — AI Izveštaj
          </h1>
          <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
            Prikaz demo skupa odgovora i generisanje AI izveštaja za lidera.
          </p>
        </div>

        {/* Email input + buttons */}
        <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '28px', marginBottom: '40px' }}>

          {/* Korak 0 — Upiši u bazu */}
          <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
            Korak 0 — Upiši odgovore u bazu
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setSaveStatus('idle'); setStatus('idle'); }}
              placeholder="Email korisnika"
              style={{
                flex: 1, minWidth: '220px', padding: '12px 16px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px', color: '#fff', fontSize: '14px', outline: 'none',
              }}
            />
            <button
              onClick={handleSaveToDb}
              disabled={saveStatus === 'loading' || !email}
              style={{
                padding: '12px 28px',
                background: saveStatus === 'done' ? '#1a2e1a' : 'rgba(255,255,255,0.1)',
                color: saveStatus === 'done' ? '#4ade80' : '#fff',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px',
                fontSize: '14px', fontWeight: '600',
                cursor: saveStatus === 'loading' ? 'wait' : 'pointer',
                opacity: saveStatus === 'loading' ? 0.7 : 1, whiteSpace: 'nowrap',
              }}
            >
              {saveStatus === 'loading' ? 'Upisujem...' : saveStatus === 'done' ? '✓ Upisano' : 'Upiši u bazu'}
            </button>
          </div>
          {saveStatus === 'error' && (
            <p style={{ fontSize: '13px', color: '#f87171', marginBottom: '16px' }}>{saveError}</p>
          )}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              Korak 1 — Generiši AI izveštaj
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleGenerate}
              disabled={status === 'loading' || !email || saveStatus !== 'done'}
              style={{
                padding: '12px 28px', background: status === 'done' ? '#1a2e1a' : '#fff',
                color: status === 'done' ? '#4ade80' : '#000', border: 'none', borderRadius: '4px',
                fontSize: '14px', fontWeight: '700',
                cursor: (status === 'loading' || saveStatus !== 'done') ? 'not-allowed' : 'pointer',
                opacity: (status === 'loading' || saveStatus !== 'done') ? 0.5 : 1, whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {status === 'loading' ? 'Generisanje...' : status === 'done' ? '✓ Generisano' : 'Generiši Report 2'}
            </button>
            {saveStatus !== 'done' && (
              <span style={{ fontSize: '13px', color: '#555' }}>Prvo upiši odgovore u bazu (Korak 0)</span>
            )}
          </div>

          {status === 'loading' && (
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0, 0.15, 0.3].map((d, i) => (
                  <div key={i} style={{
                    width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)',
                    animation: `pulse-dot 1.2s ease-in-out ${d}s infinite`
                  }} />
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#888' }}>
                AI analizira odgovore — može trajati 30–60 sekundi...
              </span>
            </div>
          )}

          {status === 'error' && (
            <p style={{ marginTop: '16px', fontSize: '13px', color: '#f87171' }}>{errorMsg}</p>
          )}

          {status === 'done' && (
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
                Korak 2 — Preuzimanje
              </p>
              <button
                onClick={handleDownloadPdf}
                style={{
                  padding: '12px 28px', background: 'transparent',
                  color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '4px',
                  fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Preuzmi PDF
              </button>
              {pdfError && (
                <p style={{ marginTop: '12px', fontSize: '13px', color: '#f87171', wordBreak: 'break-word' }}>
                  PDF greška: {pdfError}
                </p>
              )}
            </div>
          )}

          {generatedText && (
            <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                Generisani tekst (preview)
              </p>
              <pre style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'inherit', margin: 0 }}>
                {generatedText.slice(0, 600)}{generatedText.length > 600 ? '...' : ''}
              </pre>
            </div>
          )}
          </div>{/* end Korak 1 inner div */}
        </div>{/* end card */}

        {/* Sample answers */}
        <div>
          <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
            Demo skup odgovora ({SAMPLE_ANSWERS.length} pitanja)
          </p>
          {Object.entries(grouped).map(([pillar, questions]) => (
            <div key={pillar} style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: PILLAR_COLORS[pillar] || '#fff', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', color: PILLAR_COLORS[pillar] || '#aaa', fontWeight: '700' }}>
                  {pillar}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {questions.map(q => (
                  <div key={q.id} style={{
                    background: '#111', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px', padding: '16px 18px',
                    display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start'
                  }}>
                    <div>
                      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>
                        {q.facet}
                      </p>
                      <p style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.5', marginBottom: '8px' }}>
                        {q.questionText.replace(/^SA - [^:]+:\s*/, '')}
                      </p>
                      <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                        {q.selectedText}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: q.score === 5 ? 'rgba(52,211,153,0.12)' : q.score === 3 ? 'rgba(250,204,21,0.12)' : 'rgba(248,113,113,0.12)',
                        border: `1px solid ${q.score === 5 ? 'rgba(52,211,153,0.4)' : q.score === 3 ? 'rgba(250,204,21,0.4)' : 'rgba(248,113,113,0.4)'}`,
                        fontSize: '15px', fontWeight: '800',
                        color: q.score === 5 ? '#34d399' : q.score === 3 ? '#facc15' : '#f87171',
                      }}>
                        {q.score}
                      </div>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', marginTop: '4px', textAlign: 'center' }}>
                        {SCORE_LABELS[q.score]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        input::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
