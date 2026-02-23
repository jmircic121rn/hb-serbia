const mockQuestions = [
  {
    id: "1.1",
    facetName: "GOAL SETTING & OPERATIONAL FOCUS",
    core: {
      question: "Your team is halfway through the quarter when two unexpected, high-urgency projects land on your desk. The team is already at 90% capacity. How do you typically respond to this overload when setting goals for the next quarter?",
      options: [
        { label: "A", text: "I instruct the team to take on the new project immediately, expecting everyone to absorb the additional workload by \"multitasking\" or working extra hours to prevent any existing tasks from falling through the cracks, often resulting in vague or unrealistic goals.", weight: 1 },
        { label: "B", text: "I immediately review the current operational plan. I pause or deprioritize lower-value tasks to make room for the new projects, ensuring the team maintains focus on specific, achievable metrics and that goals are generally aligned with strategy.", weight: 3 },
        { label: "C", text: "I analyse the strategic impact of the new project against all ongoing work. I proactively re-negotiate timelines or deprioritize less critical operational tasks to create space, then guide the team to focus only on the highest-value metrics, setting new benchmarks and optimizing workflows.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: Looking back at your last quarter, how frequently did you meet your primary operational targets without causing significant team burnout or quality issues?",
      options: [
        { label: "A", text: "Rarely or inconsistently; we often hit targets but at a high cost to team morale or quality, or we hit targets but they were too safe and lacked ambition.", weight: -2 },
        { label: "B", text: "Most of the time; our results are solid and the team’s pace is generally sustainable, though we sometimes struggle to stay focused when new priorities emerge.", weight: 0 },
        { label: "C", text: "Consistently; we hit high-performance targets through optimized workflows and clear priorities, and the team feels a sense of achievement rather than exhaustion.", weight: 1 }
      ]
    }
  },
  {
    id: "1.2",
    facetName: "ACCOUNTABILITY & PERFORMANCE TRACKING",
    core: {
      question: "A key team member has missed their performance milestones for three consecutive weeks. The impact is starting to affect other team members. How do you handle this lack of accountability?",
      options: [
        { label: "A", text: "I wait until the formal performance review to discuss it, or I quietly take over their tasks myself to ensure the deadline is met, avoiding a difficult conversation to keep the peace.", weight: 1 },
        { label: "B", text: "I have a direct conversation to identify the bottleneck and set a clear, time-bound recovery plan with regular check-ins, ensuring they understand the consequences of continued underperformance.", weight: 3 },
        { label: "C", text: "I use the situation as a coaching moment, helping them identify the root cause (skill vs. will) and empowering them to redesign their workflow, while reinforcing the standards expected of the whole team.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: To what extent do your team members take ownership of their mistakes and proactively suggest solutions before you have to intervene?",
      options: [
        { label: "A", text: "Rarely; people tend to wait for my instructions or hide mistakes until they become critical problems that require my intervention.", weight: -2 },
        { label: "B", text: "Generally; most team members feel safe enough to admit errors and will try to fix them, although they still rely on me for the final decision on how to proceed.", weight: 0 },
        { label: "C", text: "Fully; there is a high-trust culture where accountability is shared, and team members at all levels take pride in identifying and solving problems before they escalate.", weight: 1 }
      ]
    }
  },
  {
    id: "1.3",
    facetName: "RESOURCE OPTIMIZATION",
    core: {
      question: "You have been given a tight budget and limited headcount for a high-priority new project. How do you approach the allocation of resources (time, money, talent)?",
      options: [
        { label: "A", text: "I distribute the budget equally across all areas to avoid internal conflict, or I spend it on a first-come, first-served basis, often running out of resources before the project is completed.", weight: 1 },
        { label: "B", text: "I allocate resources based on the primary operational goals, ensuring that critical tasks have what they need to succeed, and I monitor spending to ensure we stay within the limit.", weight: 3 },
        { label: "C", text: "I strategically deploy resources to high-leverage areas that offer the best return on investment, cutting waste in low-impact areas and finding creative, low-cost ways to achieve our objectives.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: In your recent projects, how often have you had to ask for emergency funding or extra time due to poor initial planning or inefficient use of available resources?",
      options: [
        { label: "A", text: "Often; unexpected gaps in resources frequently delay our progress, and we often find ourselves reacting to crises caused by lack of foresight.", weight: -2 },
        { label: "B", text: "Occasionally; we sometimes hit snags that require minor adjustments, but we usually manage to deliver within our means through diligent monitoring.", weight: 0 },
        { label: "C", text: "Almost never; my resource planning is accurate and includes sufficient buffers for risk, and we consistently find ways to do more with less through innovation.", weight: 1 }
      ]
    }
  },
  {
    id: "1.4",
    facetName: "ADAPTABILITY TO CHANGE",
    core: {
      question: "A sudden market shift or internal reorganization renders a significant portion of your team’s current work obsolete. How do you pivot their focus?",
      options: [
        { label: "A", text: "I hesitate to change course immediately, hoping the situation will stabilize, which causes confusion and wasted effort as the team continues to work on irrelevant tasks.", weight: 1 },
        { label: "B", text: "I quickly gather the team, explain the shift, and re-assign tasks to align with the new reality as best as possible, minimizing downtime and keeping everyone occupied.", weight: 3 },
        { label: "C", text: "I treat the shift as an opportunity to innovate, involving the team in brainstorming new ways to add value and rapidly testing new approaches to find the most effective path forward.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When unexpected changes happen, how quickly does your team return to full productivity and high morale in the new direction?",
      options: [
        { label: "A", text: "Slowly; morale drops significantly and it takes a long time for the team to find their footing again, often resulting in missed targets during the transition.", weight: -2 },
        { label: "B", text: "Moderately; we experience some initial friction and uncertainty, but we eventually get back on track and resume our normal pace once the new plan is established.", weight: 0 },
        { label: "C", text: "Rapidly; my team is resilient and views change as a standard part of our growth process, often finding ways to perform better in the new circumstances than before.", weight: 1 }
      ]
    }
  },
  {
    id: "2.1",
    facetName: "STRATEGIC VISIONING",
    core: {
      question: "When planning for the next 12-24 months, how much of your focus is on 'what we do today' versus 'where we need to be tomorrow'?",
      options: [
        { label: "A", text: "I focus almost entirely on solving today's problems; the future feels too uncertain to plan for, and I believe that if we take care of the present, the future will take care of itself.", weight: 1 },
        { label: "B", text: "I have a general idea of our long-term goals and I try to align our current projects with that future state, though immediate operational demands often pull me away from strategic thinking.", weight: 3 },
        { label: "C", text: "I define a clear, compelling vision for the future and use it as a filter for every strategic decision we make today, ensuring that every short-term action is a deliberate step toward that long-term goal.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: If you asked your team members about the department's strategy for next year, how consistent would their answers be with yours?",
      options: [
        { label: "A", text: "Inconsistent; most wouldn't know or would have very different interpretations of where we are going, as we rarely discuss long-term strategy as a group.", weight: -2 },
        { label: "B", text: "Somewhat consistent; they understand the basic goals, but might lack the deeper 'why' behind the strategy or how their individual roles contribute to the bigger picture.", weight: 0 },
        { label: "C", text: "Highly consistent; the vision is clearly communicated and understood by everyone, and team members can articulate how their daily work helps achieve our long-term objectives.", weight: 1 }
      ]
    }
  },
  {
    id: "2.2",
    facetName: "INNOVATION & CONTINUOUS IMPROVEMENT",
    core: {
      question: "When a team member suggests a radical new way of performing a task that carries some risk but also high potential benefit, how do you typically respond?",
      options: [
        { label: "A", text: "I tend to discourage such proposals as our priority is stability and avoiding any risk that might jeopardize current targets; I prefer sticking to proven methods that have worked in the past.", weight: 1 },
        { label: "B", text: "I listen to the proposal and am open to it if the team member can prove the risk is minimal and controlled; I prefer incremental improvements that don't disrupt our core operations too much.", weight: 3 },
        { label: "C", text: "I actively encourage such thinking and create a safe \"sandbox\" for testing innovations; I view failure as a valuable learning tool and continuously challenge the team to find better ways of working.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: Looking back at the last six months, how many new ideas or process improvements has your team successfully implemented that have led to measurable gains in efficiency or quality?",
      options: [
        { label: "A", text: "None or very few; we have mostly been focused on maintaining the status quo and reacting to immediate demands, with little time or appetite for innovation.", weight: -2 },
        { label: "B", text: "A few; we have introduced some minor improvements that have made our work slightly easier or faster, though we haven't made any major breakthroughs.", weight: 0 },
        { label: "C", text: "Many; innovation is a core part of our team culture, and we have a systematic way of identifying, testing, and scaling new ideas that consistently improve our results.", weight: 1 }
      ]
    }
  },
  {
    id: "2.3",
    facetName: "STAKEHOLDER ALIGNMENT",
    core: {
      question: "How do you ensure that your team’s long-term goals and projects are aligned with the needs and expectations of other departments or external clients?",
      options: [
        { label: "A", text: "I focus primarily on my own team's goals and assume that if we do our job well, it will naturally benefit others; I rarely seek input from other departments during our planning process.", weight: 1 },
        { label: "B", text: "I occasionally check in with key stakeholders from other departments to ensure our plans don't conflict with theirs, and I adjust our course if significant issues are raised.", weight: 3 },
        { label: "C", text: "I pro-actively collaborate with all relevant stakeholders from the beginning of our planning process, seeking to understand their needs and co-creating solutions that add value across the organization.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When your team completes a major project, how often do you receive feedback that it truly met the needs of the stakeholders and added significant value to their work?",
      options: [
        { label: "A", text: "Inconsistently; we sometimes receive complaints that our solutions don't solve the right problems or that we haven't considered the impact of our work on other teams.", weight: -2 },
        { label: "B", text: "Usually; the feedback is generally positive, although we sometimes find that we could have aligned more closely on specific requirements or timelines.", weight: 0 },
        { label: "C", text: "Almost always; we are seen as a strategic partner to our stakeholders, and our work is consistently cited as a key driver of their success.", weight: 1 }
      ]
    }
  },
  {
    id: "2.4",
    facetName: "CHANGE LEADERSHIP & RESILIENCE",
    core: {
      question: "Your organization is undergoing a major strategic shift that is causing significant anxiety and resistance within your team. What is your role in leading them through this change?",
      options: [
        { label: "A", text: "I mostly pass on the information from senior management without expressing much personal conviction, and I leave it to the team to cope with their own stress while focusing on maintaining work output.", weight: 1 },
        { label: "B", text: "I explain the logic behind the change and provide emotional support to those who are struggling, while trying to maintain a sense of stability and reassurance within the team.", weight: 3 },
        { label: "C", text: "I act as an ambassador for the change, helping the team see the opportunities it presents for their own growth and empowering them to take an active role in shaping the new future.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: In times of significant organizational change, how would you describe the overall level of resilience and adaptability within your team?",
      options: [
        { label: "A", text: "Low; the team often becomes paralyzed by uncertainty or becomes overly focused on resisting the change, leading to a significant drop in performance and morale.", weight: -2 },
        { label: "B", text: "Moderate; we experience a period of dip in performance and engagement, but we eventually adapt once the new reality is established and instructions are clear.", weight: 0 },
        { label: "C", text: "High; the team is comfortable with ambiguity and views change as an opportunity to learn and improve, often emerging from the transition stronger and more aligned than before.", weight: 1 }
      ]
    }
  },
  {
    id: "3.1",
    facetName: "SELF-AWARENESS & PERSONAL GROWTH",
    core: {
      question: "You receive feedback from a peer that your communication style during high-pressure meetings is perceived as dismissive of others' input. How do you process this feedback?",
      options: [
        { label: "A", text: "I feel defensive and privately dismiss the feedback, attributing the peer’s perception to their own sensitivity or lack of understanding of the pressure I am under; I believe my style is necessary to maintain momentum.", weight: 1 },
        { label: "B", text: "I take time to reflect on the feedback, ask for specific examples to understand the impact of my behaviour, and consciously try to adjust my tone and approach in future meetings to be more inclusive.", weight: 3 },
        { label: "C", text: "I proactively seek further feedback from multiple sources to identify patterns, then create a personal development plan and share my growth goals with the team to stay accountable and encourage a culture of open feedback.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: Over the past six months, how many specific changes have you successfully integrated into your leadership style based on feedback or self-reflection?",
      options: [
        { label: "A", text: "None; I tend to stick to my established ways of working unless forced to change by external circumstances, as I believe my current approach is generally effective.", weight: -2 },
        { label: "B", text: "At least one or two; I am making steady, incremental improvements in how I lead, although it takes significant conscious effort to make these changes stick.", weight: 0 },
        { label: "C", text: "Several; I treat personal growth as a continuous process and am constantly evolving my approach, often seeking out challenging situations to test new leadership behaviours.", weight: 1 }
      ]
    }
  },
  {
    id: "3.2",
    facetName: "EMOTIONAL REGULATION & RESILIENCE",
    core: {
      question: "A major project you spearheaded has just been cancelled by senior management due to a strategic pivot. How do you handle your own emotional response and the team’s morale?",
      options: [
        { label: "A", text: "I openly express my frustration or disappointment, which inadvertently amplifies the team’s anxiety and sense of defeat, making it difficult for us to move on to the next task.", weight: 1 },
        { label: "B", text: "I acknowledge the disappointment to the team, but quickly refocus myself and them on the new priorities, maintaining a calm and professional exterior to minimize further disruption.", weight: 3 },
        { label: "C", text: "I process the setback as a learning opportunity, helping the team find the 'silver lining' and motivating them to apply their skills to the next challenge with even more energy and insight.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: In high-stress situations, how often do you find yourself reacting impulsively (e.g., sending a sharp email, making a snap decision) versus responding thoughtfully after a pause?",
      options: [
        { label: "A", text: "Frequently; I often regret my initial reactions once I have had time to calm down, and I find it difficult to stay objective when the pressure is high.", weight: -2 },
        { label: "B", text: "Occasionally; I sometimes feel the urge to react impulsively but usually manage to pause first, though it requires a high degree of conscious self-control.", weight: 0 },
        { label: "C", text: "Almost never; I have a high degree of control over my emotional responses, even under extreme pressure, and I am consistently able to choose the most effective response for the situation.", weight: 1 }
      ]
    }
  },
  {
    id: "3.3",
    facetName: "ETHICAL LEADERSHIP & INTEGRITY",
    core: {
      question: "You become aware of a 'shortcut' being taken in a process that improves efficiency but slightly compromises a non-critical quality standard. What is your stance?",
      options: [
        { label: "A", text: "I overlook the shortcut because the efficiency gains are significant and the risk seems low enough to justify the trade-off, especially given our current high workload.", weight: 1 },
        { label: "B", text: "I address the shortcut immediately, reinforcing the importance of our quality standards and working with the team to find a legitimate way to improve efficiency without compromising integrity.", weight: 3 },
        { label: "C", text: "I use the incident to lead a wider discussion on ethics and quality, establishing clear boundaries and empowering the team to call out any future compromises, regardless of the pressure.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you feel you have to 'bend the rules' or compromise your personal values to meet organizational demands or achieve high-performance targets?",
      options: [
        { label: "A", text: "Regularly; I feel that achieving results in this environment often requires some level of ethical flexibility or 'playing the game' to stay competitive.", weight: -2 },
        { label: "B", text: "Rarely; I strive to maintain my integrity even when it makes achieving results more difficult, although I sometimes feel the pressure to compromise.", weight: 0 },
        { label: "C", text: "Never; I lead with a clear sense of purpose and integrity, and I ensure my actions and decisions are always aligned with my values, even when facing significant pressure.", weight: 1 }
      ]
    }
  },
  {
    id: "3.4",
    facetName: "CONFIDENCE & HUMILITY BALANCE",
    core: {
      question: "Your team has achieved a massive success. When presenting the results to senior leadership, how do you typically distribute the credit?",
      options: [
        { label: "A", text: "I focus primarily on my role in leading and directing the initiative, assuming that as the leader, the success reflects my capabilities first and foremost.", weight: 1 },
        { label: "B", text: "I share the credit with the team, highlighting specific contributions from key individuals while acknowledging my role in guiding the process and overcoming obstacles.", weight: 3 },
        { label: "C", text: "I step back and give the team full visibility, allowing them to present their own work and celebrating their collective achievement as the primary driver of success, highlighting my pride in their growth.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How comfortable are you with admitting you don't have the answer to a complex problem in front of your team or senior management?",
      options: [
        { label: "A", text: "Uncomfortable; I feel that as a leader, I must always appear confident and knowledgeable to maintain my authority and the team's trust in my leadership.", weight: -2 },
        { label: "B", text: "Somewhat comfortable; I am willing to admit I don't know something, but I feel a strong need to find the answer quickly myself to maintain my credibility.", weight: 0 },
        { label: "C", text: "Very comfortable; I view vulnerability as a strength that encourages collaboration and collective problem-solving, and I am happy to invite others to contribute their expertise.", weight: 1 }
      ]
    }
  },
  {
    id: "4.1",
    facetName: "EMPATHY & ACTIVE LISTENING",
    core: {
      question: "A team member has been underperforming for several weeks. In your one-on-one meeting, they mention significant personal issues at home. How do you proceed with the conversation?",
      options: [
        { label: "A", text: "I acknowledge the personal issue briefly but quickly steer the conversation back to their performance targets and deadlines, emphasizing that while I'm sympathetic, the business objectives must still be met.", weight: 1 },
        { label: "B", text: "I listen with empathy and offer support or flexibility where possible (e.g., adjusted hours or a temporary workload reduction), and work with them to adjust their immediate performance expectations while they navigate the situation.", weight: 3 },
        { label: "C", text: "I create a safe space for them to share, deeply listen to understand their perspective, and collaborate on a long-term plan that balances their wellbeing with team goals, while identifying how I can better support them through this period.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When someone is speaking to you (especially during a disagreement), how often are you truly listening to understand their perspective versus waiting for your turn to speak or judging their point of view?",
      options: [
        { label: "A", text: "I often find myself mentally preparing my response or getting distracted while others are talking, especially if I disagree with them or feel that the conversation is not moving fast enough.", weight: -2 },
        { label: "B", text: "I generally try to listen actively and stay present, though I sometimes find it difficult to remain fully objective during highly emotional or repetitive conversations.", weight: 0 },
        { label: "C", text: "I consistently practice active listening, giving my full attention and seeking to understand the underlying emotions and needs of the speaker before formulating my own response or offering advice.", weight: 1 }
      ]
    }
  },
  {
    id: "4.2",
    facetName: "TRUST & EMPOWERMENT",
    core: {
      question: "You have a high-stakes task that needs to be completed perfectly. Do you delegate it to a team member or do it yourself?",
      options: [
        { label: "A", text: "I do it myself because I don't trust anyone else to meet the required standard, or I delegate it but monitor every single detail of the process (micromanage) to ensure no mistakes are made.", weight: 1 },
        { label: "B", text: "I delegate it to a capable team member, provide clear instructions and \"guardrails,\" and check in at key milestones to ensure quality while allowing them some autonomy in the execution.", weight: 3 },
        { label: "C", text: "I empower a team member to take full ownership, providing the vision and resources they need and trusting them to determine the best way to achieve the outcome, while being available for support if they ask.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do team members come to you for permission on minor decisions that they are technically qualified to make themselves?",
      options: [
        { label: "A", text: "Very often; I feel that I need to be involved in most decisions to ensure things are done correctly, and my team knows that I prefer to give the final approval on almost everything.", weight: -2 },
        { label: "B", text: "Occasionally; I am working on delegating more authority, but some team members still seem hesitant to take full ownership of decisions without my explicit confirmation.", weight: 0 },
        { label: "C", text: "Rarely; my team feels fully empowered to make decisions within their scope of responsibility and only involve me for high-level guidance or when a decision has significant cross-functional impact.", weight: 1 }
      ]
    }
  },
  {
    id: "4.3",
    facetName: "CONFLICT TRANSFORMATION",
    core: {
      question: "Two of your team members are in a heated disagreement over a project's direction. The tension is affecting the rest of the team. How do you intervene?",
      options: [
        { label: "A", text: "I step in and make the decision for them to end the conflict quickly, or I tell them to \"work it out themselves\" without providing any guidance, hoping the tension will eventually dissipate on its own.", weight: 1 },
        { label: "B", text: "I facilitate a meeting between them, giving each person a chance to state their case, and then I help them find a compromise that allows the project to move forward with minimal further disruption.", weight: 3 },
        { label: "C", text: "I use the conflict as a catalyst for innovation, helping them explore the underlying reasons for their different perspectives and guiding them to co-create a new, superior solution that neither had considered.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How comfortable are you with addressing interpersonal tension or conflict within your team as soon as it arises, rather than waiting for it to escalate?",
      options: [
        { label: "A", text: "Uncomfortable; I tend to avoid conflict or hope it will resolve itself, as I find interpersonal tension draining and difficult to manage effectively.", weight: -2 },
        { label: "B", text: "Somewhat comfortable; I will address conflict if it clearly interferes with work, though I sometimes delay the conversation in the hope that it's just a temporary issue.", weight: 0 },
        { label: "C", text: "Very comfortable; I view healthy conflict as a necessary part of a high-performing team and am proactive in facilitating open, honest dialogue to resolve tensions early.", weight: 1 }
      ]
    }
  },
  {
    id: "4.4",
    facetName: "DEVELOPING OTHERS & COACHING",
    core: {
      question: "A team member expresses interest in a new area of responsibility for which they currently lack experience. How do you respond to their request?",
      options: [
        { label: "A", text: "I discourage them from pursuing it for now, as we need them to focus on their current role where they are already productive; I feel that training them in a new area would be a distraction from our targets.", weight: 1 },
        { label: "B", text: "I agree to let them explore it in their spare time or assign them a minor task in that area, providing some basic resources or guidance while ensuring their primary work doesn't suffer.", weight: 3 },
        { label: "C", text: "I pro-actively create a development plan for them, matching them with a mentor and giving them a \"stretch assignment\" that allows them to learn by doing, even if it requires some initial investment of time.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How much of your time in a typical week is dedicated to the deliberate growth and coaching of your team members versus managing their tasks and outputs?",
      options: [
        { label: "A", text: "Very little; I am so focused on hitting operational targets and solving crises that I rarely have time for formal or informal coaching sessions.", weight: -2 },
        { label: "B", text: "Some; I have regular one-on-ones where we discuss development, although these meetings are often cut short or dominated by task-related updates.", weight: 0 },
        { label: "C", text: "Significant; I view coaching as one of my most important responsibilities and I consistently block out time for meaningful development conversations and real-time feedback.", weight: 1 }
      ]
    }
  },
  {
    id: "5.1",
    facetName: "CULTURAL AMBASSADORSHIP",
    core: {
      question: "You notice a high-performing employee frequently making subtle jokes that undermine the company’s core values. How do you address this?",
      options: [
        { label: "A", text: "I ignore it because they are a top performer and I don’t want to risk de-motivating them or creating unnecessary tension over something that seems like \"just a joke.\"", weight: 1 },
        { label: "B", text: "I have a private conversation with them, explaining that while their work is excellent, their comments are not aligned with our values and could negatively impact the team culture.", weight: 3 },
        { label: "C", text: "I address the behaviour immediately and use it as an opportunity to reinforce why our values matter, work with them to align their attitude, and hold them accountable for being a role model.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you proactively discuss and reinforce the organization’s mission, vision, and values with your team outside of formal town hall meetings?",
      options: [
        { label: "A", text: "Rarely; I feel that corporate values are HR’s responsibility and that my team is more motivated by their specific tasks and targets than by abstract \"values.\"", weight: -2 },
        { label: "B", text: "Occasionally; I mention the bigger picture during major planning sessions or when there is a significant organizational change, but it’s not a regular part of our dialogue.", weight: 0 },
        { label: "C", text: "Consistently; I weave our mission and values into our daily work, using them as a framework for decision-making and celebrating when team members demonstrate them.", weight: 1 }
      ]
    }
  },
  {
    id: "5.2",
    facetName: "ORGANIZATIONAL AGILITY & SAVVY",
    core: {
      question: "You need approval for a project that requires support from another department head who is known to be difficult and protective of their resources. How do you approach this?",
      options: [
        { label: "A", text: "I try to bypass them by going to a higher authority, or I send a formal email request and hope for the best, often feeling frustrated by the internal \"politics\" that slow things down.", weight: 1 },
        { label: "B", text: "I set up a meeting to understand their concerns and look for a way to frame my project as something that will also benefit their department, seeking a mutually acceptable compromise.", weight: 3 },
        { label: "C", text: "I pro-actively build a relationship with them before I need anything, understanding their drivers and building a bridge of trust so that when I do have a request, we can collaborate effectively.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How effectively do you navigate the informal networks and power dynamics of the organization to get things done without creating unnecessary friction or resentment?",
      options: [
        { label: "A", text: "Not very effectively; I often feel blindsided by organizational decisions or struggle to get buy-in for my initiatives outside of my immediate team.", weight: -2 },
        { label: "B", text: "Generally well; I am aware of the \"lay of the land\" and can usually get support when I need it, although it sometimes feels like a struggle to manage the different interests involved.", weight: 0 },
        { label: "C", text: "Highly effectively; I have a strong network of allies across the organization and am seen as someone who can navigate complex situations with diplomacy and strategic influence.", weight: 1 }
      ]
    }
  },
  {
    id: "5.3",
    facetName: "CROSS-FUNCTIONAL COLLABORATION",
    core: {
      question: "A project you are leading is falling behind because another department hasn't delivered their part on time. How do you handle the situation?",
      options: [
        { label: "A", text: "I blame the other department in my status reports to protect my team’s reputation, and I send a demanding email to the other manager to remind them of their obligations.", weight: 1 },
        { label: "B", text: "I reach out to the other manager to understand the delay, offer to help if possible, and work together to find a revised timeline that minimizes the impact on the overall project.", weight: 3 },
        { label: "C", text: "I pro-actively manage the interface between our teams from the start, establishing shared goals and clear communication channels so that potential delays are identified and solved together early.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often does your team proactively share resources, knowledge, or support with other teams without being asked by senior management?",
      options: [
        { label: "A", text: "Rarely; we tend to operate as a silo, focusing on our own targets and protecting our resources, as we feel that helping others might slow us down or jeopardize our results.", weight: -2 },
        { label: "B", text: "Sometimes; we are willing to help if we have the capacity and it’s a reasonable request, but our primary focus is always on our own department’s deliverables.", weight: 0 },
        { label: "C", text: "Frequently; we view ourselves as part of a larger ecosystem and actively look for opportunities to add value to other teams, knowing that their success is also our success.", weight: 1 }
      ]
    }
  },
  {
    id: "5.4",
    facetName: "SYSTEMIC THINKING",
    core: {
      question: "When faced with a recurring problem in your department, what is your typical approach to finding a solution?",
      options: [
        { label: "A", text: "I apply a quick fix to resolve the immediate issue so we can get back to work; if the problem returns, I apply the fix again, assuming that this is just the nature of the job.", weight: 1 },
        { label: "B", text: "I look for the root cause within my department’s processes and implement a more permanent solution that prevents the problem from recurring in our area of responsibility.", weight: 3 },
        { label: "C", text: "I look at the whole organizational system to understand how different factors contribute to the problem, and I collaborate with other departments to implement a holistic solution.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do the solutions you implement for your team’s problems have unintended negative consequences for other departments or the organization as a whole?",
      options: [
        { label: "A", text: "Occasionally; I sometimes find that in solving one problem, I have inadvertently created a new challenge for someone else because I didn't consider the wider impact.", weight: -2 },
        { label: "B", text: "Rarely; I try to consider the potential impact on others before making a decision, although I may not always have a full view of the entire organizational system.", weight: 0 },
        { label: "C", text: "Almost never; I consistently use systemic thinking to ensure that my decisions are balanced and create positive value for the entire organization, not just my own team.", weight: 1 }
      ]
    }
  },
  {
    id: "6.1",
    facetName: "TIME MANAGEMENT & PRIORITIZATION",
    core: {
      question: "Your calendar is fully booked with back-to-back meetings, and you have several urgent administrative tasks pending. How do you manage your time effectively?",
      options: [
        { label: "A", text: "I try to attend every meeting and squeeze in administrative work during the evenings or weekends, often feeling overwhelmed and reacting to whoever shouts the loudest.", weight: 1 },
        { label: "B", text: "I review my meetings and decline or delegate those where I am not essential, blocking out dedicated 'focus time' in my calendar to complete high-priority tasks during working hours.", weight: 3 },
        { label: "C", text: "I use a systematic approach to prioritize my workload based on strategic value (e.g., Eisenhower Matrix), delegating extensively and ensuring my time is spent on 'important but not urgent' activities that drive long-term success.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you find yourself working late or on weekends to catch up on work that you didn't have time to complete during the regular working day?",
      options: [
        { label: "A", text: "Frequently; I feel that my workload is unmanageable and that working extra hours is the only way to keep my head above water.", weight: -2 },
        { label: "B", text: "Occasionally; I sometimes have busy periods that require extra effort, but I generally manage to maintain a reasonable work-life balance through disciplined planning.", weight: 0 },
        { label: "C", text: "Almost never; I am highly effective at managing my energy and time, and I consistently deliver my results within normal working hours through superior prioritization.", weight: 1 }
      ]
    }
  },
  {
    id: "6.2",
    facetName: "DECISION-MAKING UNDER PRESSURE",
    core: {
      question: "You are faced with a complex problem that requires an immediate decision, but you only have about 60% of the information you would ideally like to have. What do you do?",
      options: [
        { label: "A", text: "I delay the decision as long as possible to gather more data, even if it means missing a window of opportunity or causing a bottleneck for the team.", weight: 1 },
        { label: "B", text: "I make a decision based on the available information and my professional judgment, communicating the rationale and potential risks to the team clearly.", weight: 3 },
        { label: "C", text: "I use a structured decision-making framework to evaluate the options quickly, involving key experts to fill critical gaps, and I remain flexible to adjust the course as more information becomes available.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: Looking back at the major decisions you've made in the last quarter, how often have you had to significantly reverse or fix a decision due to a lack of initial thought or analysis?",
      options: [
        { label: "A", text: "Occasionally; I sometimes make snap decisions under pressure that I later realize were not well-considered or were based on incorrect assumptions.", weight: -2 },
        { label: "B", text: "Rarely; my decisions are generally solid and based on a good balance of data and intuition, requiring only minor adjustments as circumstances change.", weight: 0 },
        { label: "C", text: "Almost never; I have a high success rate with my decisions because I am disciplined in my approach, even when I have to act quickly with incomplete information.", weight: 1 }
      ]
    }
  },
  {
    id: "6.3",
    facetName: "DELEGATION & TASK MANAGEMENT",
    core: {
      question: "When delegating a project, how do you typically ensure that the work is progressing as expected without becoming a bottleneck yourself?",
      options: [
        { label: "A", text: "I give the person the task and then wait for them to come back to me with the finished result, often finding out too late if there were problems or delays.", weight: 1 },
        { label: "B", text: "I set clear expectations and milestones at the start, and I have regular check-ins to provide feedback and support, ensuring the project stays on track without me having to intervene constantly.", weight: 3 },
        { label: "C", text: "I empower the person to lead the project, providing a clear framework for success and using a visual task management system that allows me to see progress at a glance and offer support only when needed.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: To what extent do your team members feel comfortable making adjustments to their own workflows or project plans without seeking your approval first?",
      options: [
        { label: "A", text: "Not at all; they feel they must follow my original instructions exactly and are afraid to deviate even if they see a better way of doing things.", weight: -2 },
        { label: "B", text: "Generally; most feel they have some room to maneuver, but they will still check with me before making any significant changes to the agreed plan.", weight: 0 },
        { label: "C", text: "Fully; they are encouraged to take initiative and optimize their approach as they learn, knowing that I trust their judgment and focus on the final outcome rather than the minute details.", weight: 1 }
      ]
    }
  },
  {
    id: "6.4",
    facetName: "CONTINUOUS LEARNING & TECH SAVVINESS",
    core: {
      question: "A new technology or tool is introduced that could significantly improve your team's productivity, but it requires a significant learning curve. How do you handle it?",
      options: [
        { label: "A", text: "I resist the change for as long as possible, preferring to stick with the tools and methods we already know and are comfortable with, even if they are less efficient.", weight: 1 },
        { label: "B", text: "I recognize the potential benefit and encourage the team to learn it, setting aside some time for training and gradually integrating it into our workflow.", weight: 3 },
        { label: "C", text: "I pro-actively lead the adoption, becoming an early adopter myself and finding ways to accelerate the team's learning process through peer-to-peer coaching and celebrating early wins.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How much time have you personally invested in learning new skills or exploring new technologies relevant to your role in the last three months?",
      options: [
        { label: "A", text: "Very little; I feel that I already have the skills I need and I am too busy with my daily responsibilities to invest in further learning.", weight: -2 },
        { label: "B", text: "Some; I keep up with industry news and occasionally take a course or attend a webinar to refresh my knowledge or learn a specific new skill.", weight: 0 },
        { label: "C", text: "Significant; I am a lifelong learner and I consistently dedicate time each week to expanding my horizon and staying at the forefront of my field.", weight: 1 }
      ]
    }
  },
  {
    id: "7.1",
    facetName: "PRESENTATION & PUBLIC SPEAKING",
    core: {
      question: "You are presenting a new, complex strategic initiative to a group of diverse stakeholders who have different levels of technical knowledge. How do you structure your presentation?",
      options: [
        { label: "A", text: "I use a standard deck with a lot of data and technical detail, assuming that the strength of the information will speak for itself; I mostly talk at the audience rather than engaging them.", weight: 1 },
        { label: "B", text: "I simplify the complex parts and use some visual aids to make the information more accessible, and I leave some time at the end for a Q&A session to clarify any points of confusion.", weight: 3 },
        { label: "C", text: "I tailor the narrative to the specific interests of the audience, using storytelling and powerful visuals to make the strategy stick, and I facilitate an interactive dialogue throughout the session.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: After your presentations, how often do you find that stakeholders have actually retained the key messages and are ready to take the next steps without further lengthy explanations?",
      options: [
        { label: "A", text: "Rarely; I often have to follow up with detailed emails or multiple one-on-one meetings because people were either overwhelmed or disengaged during the presentation.", weight: -2 },
        { label: "B", text: "Usually; most stakeholders grasp the main ideas, although there is sometimes a need for further clarification on specific details or roles and responsibilities.", weight: 0 },
        { label: "C", text: "Almost always; my presentations are seen as catalysts for action, and stakeholders leave with a clear, shared understanding of the goal and their part in achieving it.", weight: 1 }
      ]
    }
  },
  {
    id: "7.2",
    facetName: "PERSUASION & INFLUENCING",
    core: {
      question: "You need to convince a senior leader to invest in a project that doesn't show an immediate financial return but is critical for long-term sustainability. How do you build your case?",
      options: [
        { label: "A", text: "I focus primarily on why I believe it's the \"right thing to do,\" and I feel frustrated or discouraged if they don't immediately see the value from my perspective.", weight: 1 },
        { label: "B", text: "I build a solid business case that outlines the potential long-term benefits and risks of inaction, using data to support my arguments and aligning it with the company’s stated strategy.", weight: 3 },
        { label: "C", text: "I pro-actively identify the senior leader's primary drivers and 'pain points,' and I frame my proposal in a way that directly addresses their concerns while demonstrating the strategic necessity of the project.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When you need to influence others over whom you have no formal authority, how successful are you in gaining their genuine commitment rather than just their compliance?",
      options: [
        { label: "A", text: "Inconsistently; I often find it difficult to get people on board if I can't command them, and I sometimes feel that my ideas are ignored or sidelined.", weight: -2 },
        { label: "B", text: "Generally successful; I am able to build rapport and use logical arguments to get people to agree with my proposals, although it can take a lot of effort and time.", weight: 0 },
        { label: "C", text: "Highly successful; I am seen as a trusted advisor and a natural influencer who can build consensus and inspire collective action across different teams and levels.", weight: 1 }
      ]
    }
  },
  {
    id: "7.3",
    facetName: "WRITTEN COMMUNICATION & CLARITY",
    core: {
      question: "When sending a high-stakes email to the entire department about a significant change, what is your primary focus?",
      options: [
        { label: "A", text: "I write a long, detailed email that covers every possible question and technicality, assuming that more information is better to avoid any misunderstanding.", weight: 1 },
        { label: "B", text: "I keep the email concise and focused on the key messages, using clear headings and bullet points to make it easy to scan, and I provide a clear 'call to action' at the end.", weight: 3 },
        { label: "C", text: "I carefully craft the message to align with the team's culture and values, using a tone that is both professional and empathetic, and I follow up with other channels to ensure the message was received and understood.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you find yourself having to clarify or correct information that you previously sent out in a written format due to misinterpretation or lack of clarity?",
      options: [
        { label: "A", text: "Occasionally; I sometimes receive a lot of follow-up questions that suggest my original message was not as clear as I thought it was, or that it was too long for people to read carefully.", weight: -2 },
        { label: "B", text: "Rarely; my written communication is generally well-received and understood, and I am disciplined about proofreading and structuring my messages for impact.", weight: 0 },
        { label: "C", text: "Almost never; I am known for my ability to synthesize complex information into clear, compelling, and actionable written messages that require minimal further clarification.", weight: 1 }
      ]
    }
  },
  {
    id: "7.4",
    facetName: "GIVING & RECEIVING FEEDBACK",
    core: {
      question: "A team member has made a significant error in a report that has already been sent to a client. How do you deliver this feedback?",
      options: [
        { label: "A", text: "I focus on the error itself and the negative impact it has had on our reputation, and I make it clear that this level of performance is unacceptable, often in a heat-of-the-moment reaction.", weight: 1 },
        { label: "B", text: "I have a private conversation, using the 'situation-behavior-impact' model to describe the error objectively, and I work with them to identify how to fix it and prevent it from happening again.", weight: 3 },
        { label: "C", text: "I use the situation as a learning opportunity, asking them to self-reflect on what went wrong and guiding them to find their own solution, while reinforcing my belief in their potential to grow from the mistake.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you pro-actively ask for feedback on your own performance from your team members and your manager, and how do you respond when that feedback is critical?",
      options: [
        { label: "A", text: "Rarely; I feel that as a leader, I should be the one giving feedback, and I find it uncomfortable or even threatening to receive critical comments from those I manage.", weight: -2 },
        { label: "B", text: "Sometimes; I am open to feedback if it's offered, and I try to listen without getting defensive, although I don't always go out of my way to seek it out regularly.", weight: 0 },
        { label: "C", text: "Regularly; I pro-actively create opportunities for 360-degree feedback and I treat all feedback as a gift that helps me grow, demonstrating my commitment to my own continuous development.", weight: 1 }
      ]
    }
  },
  {
    id: "8.1",
    facetName: "RECRUITMENT & ONBOARDING",
    core: {
      question: "You are hiring for a new role in your team. What is your primary focus during the selection and onboarding process?",
      options: [
        { label: "A", text: "I focus almost entirely on the candidate’s technical skills and past experience, and I leave the onboarding to HR or a junior team member, assuming the new hire will \"figure it out\" as they go.", weight: 1 },
        { label: "B", text: "I look for a balance of technical skill and cultural fit, and I personally oversee a structured onboarding plan that helps the new hire understand their role and start contributing as quickly as possible.", weight: 3 },
        { label: "C", text: "I hire for potential and alignment with our long-term vision, and I design a comprehensive onboarding experience that integrates them into the team culture and sets them up for long-term growth from day one.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: Looking at your last few hires, how quickly did they become fully integrated, productive members of the team who demonstrate the desired cultural values?",
      options: [
        { label: "A", text: "Slowly; we have had several instances where new hires struggled to adapt or left the company within the first six months because they didn't feel supported or aligned.", weight: -2 },
        { label: "B", text: "Generally well; most new hires are up to speed within a reasonable timeframe, although there is usually a period of trial and error before they fully understand the team dynamics.", weight: 0 },
        { label: "C", text: "Very quickly; our onboarding process is so effective that new hires feel like part of the family almost immediately and are able to add significant value much faster than industry averages.", weight: 1 }
      ]
    }
  },
  {
    id: "8.2",
    facetName: "PERFORMANCE COACHING & MENTORING",
    core: {
      question: "A high-potential team member is performing well but seems to have plateaued in their current role. How do you help them move to the next level?",
      options: [
        { label: "A", text: "I don't do much differently as long as they are hitting their targets; I figure that if they want to grow, they will take the initiative themselves or wait for a promotion to become available.", weight: 1 },
        { label: "B", text: "I have a career development discussion with them and suggest some training courses or books that might help them expand their skills, and I offer to mentor them occasionally.", weight: 3 },
        { label: "C", text: "I pro-actively challenge them with new responsibilities that push them out of their comfort zone, and I provide regular, high-impact coaching to help them navigate these new challenges and grow.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How many people in your current or past teams have you successfully developed and seen promoted to higher levels of responsibility within the organization?",
      options: [
        { label: "A", text: "None or very few; I tend to focus more on getting the work done than on building a pipeline of talent for the future.", weight: -2 },
        { label: "B", text: "A few; I have a track record of supporting people’s growth, although it’s not always a structured or consistent part of my leadership approach.", weight: 0 },
        { label: "C", text: "Many; I am known for being a \"talent magnet\" and a developer of leaders, and many of my former team members are now in key leadership positions across the company.", weight: 1 }
      ]
    }
  },
  {
    id: "8.3",
    facetName: "TEAM BUILDING & DYNAMICS",
    core: {
      question: "You notice that while individual team members are talented, they are not collaborating effectively as a group, leading to silos and a lack of shared purpose. What do you do?",
      options: [
        { label: "A", text: "I ignore the lack of collaboration as long as individual targets are met, or I organize a one-off \"fun\" team-building event (like a dinner or drinks) and hope that it improves the atmosphere.", weight: 1 },
        { label: "B", text: "I facilitate a team session to discuss our common goals and how we can better support each other, and I implement some basic cross-functional projects to encourage more interaction.", weight: 3 },
        { label: "C", text: "I pro-actively design the team’s structure and processes to mandate collaboration, and I lead a continuous effort to build deep trust and psychological safety within the group.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How would you describe the level of trust and mutual support within your team during a high-stakes crisis?",
      options: [
        { label: "A", text: "Low; people tend to look out for themselves, point fingers when things go wrong, or wait for me to solve the problem for them.", weight: -2 },
        { label: "B", text: "Moderate; we generally pull together and help each other out, although there can still be some tension or a lack of clarity on how to best coordinate our efforts.", weight: 0 },
        { label: "C", text: "High; the team is a \"tight-knit unit\" that thrives under pressure, instinctively supporting each other and collaborating seamlessly to find solutions and achieve the goal.", weight: 1 }
      ]
    }
  },
  {
    id: "8.4",
    facetName: "SUCCESSION PLANNING",
    core: {
      question: "If you were to be promoted or leave your current role tomorrow, how prepared is your team to continue functioning effectively without you?",
      options: [
        { label: "A", text: "Not very prepared; I am the primary decision-maker and I hold most of the key knowledge and relationships, so there would likely be a significant drop in performance if I left.", weight: 1 },
        { label: "B", text: "Somewhat prepared; I have identified one or two potential successors and I have started to share some of my responsibilities with them, although they would still need significant support.", weight: 3 },
        { label: "C", text: "Fully prepared; I have pro-actively developed a strong leadership pipeline within the team, and I have empowered several people who could step into my role immediately and maintain our momentum.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you delegate your own high-level responsibilities or involve team members in senior-level meetings specifically as a way to prepare them for future leadership roles?",
      options: [
        { label: "A", text: "Rarely; I feel that these tasks are my responsibility alone and that involving others would be a distraction for them or might look like I am avoiding my own work.", weight: -2 },
        { label: "B", text: "Occasionally; I will involve a high-potential team member in a senior meeting or give them a strategic task if the opportunity arises and I have the time to guide them through it.", weight: 0 },
        { label: "C", text: "Regularly; I view this as a core part of my role and I am disciplined about creating opportunities for my team to gain exposure and build the skills they need for the next level.", weight: 1 }
      ]
    }
  },
  {
    id: "9.1",
    facetName: "SELF-CONTROL & COMPOSURE",
    core: {
      question: "You are in a high-stakes board meeting when a senior executive harshly criticizes your team's performance based on what you know is incorrect information. How do you react in the moment?",
      options: [
        { label: "A", text: "I react emotionally, either becoming defensive and arguing my point heatedly or shutting down and losing my focus for the rest of the meeting.", weight: 1 },
        { label: "B", text: "I remain calm and professional, wait for a suitable opening to state the facts objectively, and steer the conversation back to a productive solution.", weight: 3 },
        { label: "C", text: "I maintain perfect composure, acknowledge their concern without taking it personally, and use the moment to demonstrate leadership by inviting a data-driven review of the situation.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you find that your emotional state (e.g., stress, anger, excitement) negatively influences the quality of your decisions or your interactions with the team?",
      options: [
        { label: "A", text: "Frequently; I find it difficult to separate my personal emotions from my professional responsibilities, and my team often has to \"read my mood\" before approaching me.", weight: -2 },
        { label: "B", text: "Occasionally; I sometimes let my emotions get the better of me, although I usually try to apologize or correct the situation once I have calmed down.", weight: 0 },
        { label: "C", text: "Almost never; I am highly aware of my emotional triggers and I consistently manage my state to ensure I am always presenting my best, most objective self to others.", weight: 1 }
      ]
    }
  },
  {
    id: "9.2",
    facetName: "RESILIENCE & STRESS TOLERANCE",
    core: {
      question: "Your department has faced a series of setbacks—missed targets, budget cuts, and high turnover. As the leader, how do you maintain your own drive and that of the team?",
      options: [
        { label: "A", text: "I feel overwhelmed and begin to focus only on survival, often expressing my own doubts about the future, which leads to a further drop in team morale and productivity.", weight: 1 },
        { label: "B", text: "I acknowledge the difficulty of the situation but emphasize our past successes and the importance of perseverance, keeping the team focused on small, achievable wins to build momentum.", weight: 3 },
        { label: "C", text: "I view the adversity as a crucible for growth, modeling extreme resilience and helping the team find a deeper sense of purpose and unity through the struggle.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When you face a major personal or professional failure, how quickly are you able to recover, learn the lesson, and move forward with renewed energy?",
      options: [
        { label: "A", text: "Slowly; I tend to dwell on my mistakes and feel a sense of shame or inadequacy that lingers for a long time and affects my future performance.", weight: -2 },
        { label: "B", text: "Moderately; I take some time to process the failure and understand what went wrong, and I eventually get back on track once I have a clear plan for improvement.", weight: 0 },
        { label: "C", text: "Rapidly; I have a \"growth mindset\" that allows me to see failure as essential data, and I am able to pivot quickly and apply the learning to my next endeavor without losing heart.", weight: 1 }
      ]
    }
  },
  {
    id: "9.3",
    facetName: "ADAPTABILITY & FLEXIBILITY",
    core: {
      question: "A long-standing company policy that you strongly believe in is suddenly reversed by the new CEO. How do you adapt to this change in the organizational landscape?",
      options: [
        { label: "A", text: "I vocalize my disagreement with the change to my team and others, and I may even try to find ways to continue following the old policy or \"wait out\" the new leadership.", weight: 1 },
        { label: "B", text: "I accept the new policy as a reality of working in a dynamic organization, and I work to understand the rationale behind it so that I can implement it effectively within my team.", weight: 3 },
        { label: "C", text: "I pro-actively embrace the change, looking for ways to leverage the new policy to improve our operations and helping my team see the strategic benefits of the new direction.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How comfortable are you with ambiguity and a lack of clear direction from above, and how effectively can you still lead your team in such environments?",
      options: [
        { label: "A", text: "Uncomfortable; I struggle to function without clear instructions and a predictable environment, and my team often feels lost or anxious when I am uncertain.", weight: -2 },
        { label: "B", text: "Generally comfortable; I can manage through periods of uncertainty by focusing on our core mission, although I still prefer to have as much clarity as possible from senior management.", weight: 0 },
        { label: "C", text: "Very comfortable; I thrive in ambiguous situations and I am able to provide a sense of direction and stability for my team even when the wider organization is in flux.", weight: 1 }
      ]
    }
  },
  {
    id: "9.4",
    facetName: "SOCIAL MATURITY & NETWORKING",
    core: {
      question: "You are at an industry conference. How do you approach the opportunity to network with peers and potential partners from other organizations?",
      options: [
        { label: "A", text: "I mostly stick with the people I already know or stay by myself, as I find it difficult or even a bit \"fake\" to introduce myself to strangers and build new professional relationships.", weight: 1 },
        { label: "B", text: "I make an effort to meet new people and exchange contact information, and I follow up with a few key individuals who might be able to help me or my team in the future.", weight: 3 },
        { label: "C", text: "I pro-actively seek out diverse perspectives and look for ways to add value to others first, building a broad and deep network of relationships that serve as a strategic asset for my career and organization.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How often do you leverage your external network to bring new ideas, best practices, or talent into your organization?",
      options: [
        { label: "A", text: "Rarely; I tend to focus inward on my own department and organization, and I don't see much value in looking at what others are doing in different industries or companies.", weight: -2 },
        { label: "B", text: "Occasionally; I sometimes share an interesting article or idea I've picked up from my network, but I don't have a systematic way of integrating external insights into our work.", weight: 0 },
        { label: "C", text: "Regularly; I am a \"connector\" who is constantly scanning the external environment for innovations and talent that can help my organization stay ahead of the curve.", weight: 1 }
      ]
    }
  },
  {
    id: "10.1",
    facetName: "COMMANDING & DIRECTING",
    core: {
      question: "In a crisis where immediate and precise action is required to prevent a major failure, what is your primary leadership style?",
      options: [
        { label: "A", text: "I take full control and issue direct, top-down orders, expecting immediate compliance without question, as I believe this is the only way to resolve the crisis quickly.", weight: 1 },
        { label: "B", text: "I give clear directions but explain the 'why' behind them, ensuring that the team understands the urgency and their specific roles in the recovery plan.", weight: 3 },
        { label: "C", text: "I provide the objective and the parameters, then empower the team to execute based on their expertise, while I focus on removing obstacles and coordinating the overall effort.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When the crisis is over, how often do you find that your team feels disempowered or resentful about the way you took control during the pressure situation?",
      options: [
        { label: "A", text: "Frequently; I often have to spend significant time rebuilding trust and morale after a crisis because my 'command and control' approach was seen as overly harsh.", weight: -2 },
        { label: "B", text: "Rarely; my team generally understands that my directness was a necessary response to the situation, and they appreciate the clarity I provided during the chaos.", weight: 0 },
        { label: "C", text: "Almost never; even in a crisis, I lead in a way that maintains the team’s sense of agency and ownership, and we emerge from the experience more united and confident.", weight: 1 }
      ]
    }
  },
  {
    id: "10.2",
    facetName: "INSPIRING & MOTIVATING",
    core: {
      question: "The team is facing a long period of routine, repetitive work that is necessary but unexciting. How do you keep them engaged and motivated?",
      options: [
        { label: "A", text: "I focus on the negative consequences of not doing the work, using pressure or the threat of performance reviews to ensure that the tasks are completed on time.", weight: 1 },
        { label: "B", text: "I try to make the work more interesting by introducing small rewards or internal competitions, and I remind the team of how this work supports our overall goals.", weight: 3 },
        { label: "C", text: "I connect the routine tasks to a larger, inspiring purpose, and I pro-actively look for ways to automate or redesign the work to make it more meaningful for the team.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: How would you describe the overall energy and 'discretionary effort' (the extra effort people give voluntarily) of your team during periods of routine work?",
      options: [
        { label: "A", text: "Low; people tend to do the bare minimum required to stay out of trouble, and there is a general sense of boredom and disengagement across the team.", weight: -2 },
        { label: "B", text: "Moderate; the team is professional and diligent, and they will give extra effort if I specifically ask for it, although the energy is not consistently high.", weight: 0 },
        { label: "C", text: "High; the team is self-motivated and often finds ways to improve their own processes or support each other without being prompted, even when the work is routine.", weight: 1 }
      ]
    }
  },
  {
    id: "10.3",
    facetName: "NEGOTIATING & COMPROMISING",
    core: {
      question: "You are in a negotiation with another department over the allocation of shared resources. Both teams have valid, competing needs. What is your goal?",
      options: [
        { label: "A", text: "My goal is to 'win' as many resources as possible for my team, even if it means the other team is left at a significant disadvantage; I view negotiation as a zero-sum game.", weight: 1 },
        { label: "B", text: "My goal is to find a fair compromise where both teams get enough to meet their basic needs, even if neither is fully satisfied with the final outcome.", weight: 3 },
        { label: "C", text: "My goal is to find a creative, win-win solution that optimizes the resources for the benefit of the entire organization, even if it requires a radical rethink of how we work together.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: After a negotiation, how often do you feel that the relationship with the other party has been strengthened rather than strained by the process?",
      options: [
        { label: "A", text: "Rarely; negotiations often leave a 'bitter taste' and create lingering resentment that makes it harder to collaborate with that department in the future.", weight: -2 },
        { label: "B", text: "Usually; we are able to maintain a professional relationship, and while there might be some minor friction, we can still work together effectively on other projects.", weight: 0 },
        { label: "C", text: "Almost always; I use negotiation as an opportunity to build trust and understanding, and my peers see me as a fair and strategic partner who looks out for the whole company.", weight: 1 }
      ]
    }
  },
  {
    id: "10.4",
    facetName: "DRIVING RESULTS THROUGH OTHERS",
    core: {
      question: "You have a team of highly skilled experts who are all working on different parts of a major initiative. How do you ensure that the overall result is achieved on time and to the required standard?",
      options: [
        { label: "A", text: "I monitor everyone’s individual progress closely and intervene whenever I see a potential issue, often taking over the decision-making for them to ensure things stay on track.", weight: 1 },
        { label: "B", text: "I set clear shared goals and use regular team meetings to coordinate our efforts and solve problems collectively, while holding each person accountable for their specific deliverables.", weight: 3 },
        { label: "C", text: "I create a high-performance environment where the team holds itself accountable; I focus on providing the vision and resources, and I trust the team to manage the complexities of execution.", weight: 5 }
      ]
    },
    reflection: {
      question: "Reflection: When the final result is achieved, how much of the success do you attribute to your personal intervention versus the collective effort and ownership of the team?",
      options: [
        { label: "A", text: "I feel that without my constant monitoring and 'hands-on' management, the project would likely have failed or been of much lower quality.", weight: -2 },
        { label: "B", text: "I feel that my role in coordinating and guiding the team was essential, and that the success was a well-balanced combination of my leadership and their execution.", weight: 0 },
        { label: "C", text: "I feel that the team truly owned the result, and my greatest contribution was in creating the conditions that allowed them to perform at their best.", weight: 1 }
      ]
    }
  }
];
export { mockQuestions };