// ─────────────────────────────────────────────────────────────────────────────
// TCK Culture Pulse — Survey Data
// Wave 1 · Jun 2026 · 34 respondents
// Update this file for each new wave; the dashboard HTML reads from here.
// ─────────────────────────────────────────────────────────────────────────────

// Part 1 — Q1: What DO you like about TCK's culture as of today?
const surveyQ1 = [
  "Smaller collaborative team",
  "Collaboration & challenge",
  "People participate & join the cultural movement.",
  "Freedom to think and act differently without fear, appreciation for brilliant failures, ability to create career opportunities by ourselves by showing value",
  "There is a strong willingness to execute based on the intent to develop vehicles effectively.",
  "Specially the vision of prepare and care of our people to prepare them for the future like trainings, universities partnership, ITAPs. Also I like the innovation culture implemented.",
  "Diverse, Challenge, Respect, Volunteer",
  "Mutual Respect",
  "Continued efforts on making progress and changes",
  "Less hierarchy compared to other companies in Korea and offers flexibility and individual discretion.",
  "Safety First !! I like the passion, responsibility, and commitment of TCK people.",
  "Strong ownership mindset",
  "It seems that TCK culture is currently in a transition phase as it moves to the next level.",
  "New way of working by adopting evolving technologies",
  "Cooperation in Common Goals",
  "responsibility",
  "'Consistency' - not just about Communication, but also about following through with actions consistently",
  "Our teams are dedicated. We value hard work, fast action and have pride in our work.",
  "Commitment to deliver the result",
  "Strong safety mindset, Good transparency, People care about safety first, Open communication, Good teamwork, High responsibility",
  "Eastern and Western cultures are well balanced. It's not so much a Korean class culture as possible, but rather a somewhat rational conversation",
  "Sense of Responsibility",
  "Consistency",
  "Team",
  "Horizontal communication and Safety First Culture",
  "respect. each other. drive for result.",
  "It gives us purpose and focus on our future",
  "Strong ownership and teamwork",
  "Execution mindset",
  "Be accountable for what GMTCK has to achieve and contribute to collectively",
  "Everybody",
  "Able to participate in many different things",
  "Relentless focus on improving performance and workplace culture",
  "Openness to change"
];

// Part 1 — Q2: What DON'T you like about TCK's culture as of today?
const surveyQ2 = [
  "Too many extra activities",
  "Hesitation to speak up",
  "But most people do not want to lead the cultural movement.",
  "Too many unrelated goals, leading to loss of focus, time and productivity. Use the right people for the right goals not all goals.",
  "There is an internalized concern about sustaining efforts, stemming from the perception that we are lagging behind our competitors.",
  "When started here, I thought that some communication was not total transparent and good to convince the entire people towards to the same direction. I have as a principle that each challenging action requires a clear purpose - without that is plan to fail. AIO 1.0 is a good example initial strategy and communication was the best one",
  "Seniority(Yet), Title",
  "Selfishness",
  "Some people avoid change and hold things back. They complain rather than seeing bright side of the efforts.",
  "A high number of meetings and activities that limit focus on core work, along with low voluntary engagement and contribution.",
  "Culture where Brian has a strong influence on all policy decisions. TCK asks people to change quickly, but leadership does not always give them enough clarity, time, or support",
  "There is a strong tendency to show up and be visible in front of leadership (especially PEC staff)",
  "The large number of culture change initiatives appears to be reducing the perceived importance of core work.",
  "Many people are staying behind the labor union to be in the comfort zone",
  "Resource silos",
  "push",
  "Lack of trust",
  "We have a keen ability to move quickly, but our culture tends to be one of speed above all. Deadlines are often short and urgent, resulting in outputs that feel compromised or short-sighted to meet timing.",
  "Not enough empowerment",
  "Too many procedures, Slow decision making, Difficult budget execution, Too much approval process, Less flexibility",
  "Some decisions are made by a small group of people, and at times these decisions run counter to the thoughts and opinions of the majority of employees. Senior leadership, including ISP, feel lacks personal connection with employees.",
  "Slow to adapt to changes",
  "Strong push for execution",
  "The lack of leadership",
  "Resource gap and Silo thinking.",
  "Not much voice as other oriental culture. Speaking in English makes Korean employees feel less smart.",
  "It is not easy for our engineers to understand it",
  "Too much caution and not enough speed",
  "The speed of change is not consistent",
  "Lack of respecting individuals so that they can do best",
  "Need to focus in core activity",
  "Too much of my time outside of work is taken away. Yet my regular workload is not reduced — the work stays the same while side tasks keep increasing.",
  "Leadership-driven, top-down communication style with a reliance on 'Brian said' direction",
  "Disconnect between levels"
];

// Part 1 — Q3: What is LACKING or MISSING about TCK's culture as of today?
const surveyQ3 = [
  "Ability to deal with ambiguity",
  "Not enough clarity and transparency",
  "The 'WHY' is lacking.",
  "Breaking the hierarchical mindset, give people the trust to respect leaders based on their behaviors and actions, not because of their levels or words",
  "Self-confidence",
  "How to balance our multi-function future engineer that is really important with losing expertise in some crucial subjects. Multi-functional is great idea, but competitiveness also relies on specialization. Focus also is important. How to balance that.",
  "Self objectification, 'Nim' world",
  "Sincerity",
  "More trust and honest communication.",
  "A stronger focus on priorities and simplicity to improve efficiency",
  "Pride in working at TCK. We need more trust, more honest communication, and more visible support for people who are struggling with change",
  "There seem to be many PLs who present a completely different face to leaders versus staff, but this does not appear to be clearly recognized or properly evaluated",
  "Sincerely genuine participants who really seek for Culture Change",
  "Need to connect the good initiatives together for the efficiency and speed",
  "Company loyalty",
  "respect",
  "Lack of trust",
  "Empowerment. There is a bias towards micro-management rather than empowerment preventing leaders from managing their teams as they see fit. The volume and level of CAP goals and tracking is an example.",
  "Decisions still feel top-down",
  "More investment for the next 5 years, More focus on future business, More new technology development, More long-term planning",
  "The virtue of humility may be our weakness. We are not good at promotion of ourselves and not expose ourselves especially in public.",
  "Sense of ownership",
  "Better alignment in execution",
  "We lack self belief",
  "Keep continuing to connect our vision to the daily work",
  "Lack of pride about company.",
  "Reinforce the positive aspects of the current culture that will help us change for the future",
  "More open sharing, faster learning, and stronger cross-functional execution",
  "Broader shared belief in AiO and future capability building",
  "The power of Collective intelligence gets overlooked from time to time",
  "Good",
  "The logic that leaders or we ourselves must do everything.",
  "Bridge connecting leadership with employees at all levels",
  "Time to absorb change"
];

// Part 1 — theme mention counts (keyword match; a response may appear in multiple themes)
const _PART1_THEME_MENTIONS = {
  q1: {
    'Teamwork & collaboration': [0, 1, 2, 6, 7, 14, 17, 19, 25, 27, 30, 31, 33],
    'Safety-first culture': [10, 19, 24],
    'Ownership mindset': [10, 11, 15, 19, 21, 27, 29],
    'Flat hierarchy': [3, 9, 24],
    'Execution commitment': [4, 5, 8, 12, 13, 17, 18, 25, 28, 32],
    'East-West balance': [20],
  },
  q2: {
    'Speed over quality': [4, 17, 22, 27, 28],
    'Meeting overload': [0, 3, 9, 12, 30, 31],
    'Silo thinking': [7, 14, 24],
    'Resistance to change': [1, 2, 8, 13, 21],
    'Top-down decisions': [6, 10, 11, 18, 20, 32],
    'Lack of clarity from leadership': [5, 10, 16, 19, 23, 25, 26, 29, 33],
  },
  q3: {
    'Trust & honest dialogue': [3, 7, 8, 10, 12, 15, 16],
    'The "WHY" of change': [0, 1, 2, 9, 22],
    'Real empowerment': [6, 17, 18, 31],
    'Company pride': [4, 10, 14, 20, 23, 25],
    'Future investment': [5, 19, 33],
    'Shared ownership mindset': [13, 21, 24, 26, 27, 28, 29],
  },
};

// Part 1 — primary theme per respondent (mutually exclusive; used for tooltip quotes)
const _PART1_THEME_INDICES = {
  q1: {
    'Teamwork & collaboration': [0, 1, 2, 5, 6, 7, 14, 16, 23, 25, 30, 31, 33],
    'Safety-first culture': [10, 19, 24],
    'Ownership mindset': [11, 15, 21, 22, 27, 29],
    'Flat hierarchy': [3, 9],
    'Execution commitment': [4, 8, 12, 13, 17, 18, 26, 28, 32],
    'East-West balance': [20],
  },
  q2: {
    'Speed over quality': [4, 15, 17, 22, 27, 28],
    'Meeting overload': [0, 3, 9, 12, 30, 31],
    'Silo thinking': [7, 14, 24],
    'Resistance to change': [1, 2, 8, 13, 21],
    'Top-down decisions': [6, 10, 11, 18, 20, 32],
    'Lack of clarity from leadership': [5, 16, 19, 23, 25, 26, 29, 33],
  },
  q3: {
    'Trust & honest dialogue': [3, 4, 7, 8, 11, 12, 15, 16, 32],
    'The "WHY" of change': [0, 1, 2, 9, 22],
    'Real empowerment': [6, 17, 18, 31],
    'Company pride': [10, 14, 20, 23, 25],
    'Future investment': [5, 19, 33],
    'Shared ownership mindset': [13, 21, 24, 26, 27, 28, 29],
  },
};

// Part 2 — Subject 1 (AiO Vision) & Subject 2 (Time Machine / Regret)
const surveyPart2 = [
  "S1Q1: We will have the ability to shift and execute different work on demand. However, the concern is this somewhat conflicts with the drive for engagement in specific technical areas unrelated to math delivery. S1Q2: I would be most proud of the programs we have been able to deliver overcoming the challenges we have with having to continuously align with our counterparts in GMNA. Our teams require additional energy and efforts to stay aligned with the dynamic changes, especially during launch. S2Q1: We need to continue to drive to quickly adapt to new threats, identifying how we can add value to the company and continue to deliver products our customers want to buy. This is similar to what we already had to execute when the Japanese automakers disrupted the market. S2Q2: The need to step out regularly and think about overall strategy, instead of allowing myself to be consumed 100% by issues and activities of the moment.",
  "Subject 1: 1. Take broader leadership in global engineering and make a direct impact on the industry. 2. I would be proud to have been at the forefront of making TCK S&S a leading force in GM global engineering. Subject 2: 1. I would create more opportunities for employees to gain direct global experience and network. 2. Lack of leadership support due to global financial environment.",
  "Subject 1: Succeed in AIO will enable us to help others. Before we knew other areas, we couldn't help others but now we can. Subject 2: I would regret not having enough time studying advanced technology. Currently, we are too focused on developing vehicle with current technology and do not have time to study new things.",
  "Subject 1: AIO strategy is excellent and definitely the way forward. Actions towards this strategy is definitely a failure since it's only tracking numbers not realistic skills achieved. 1. If succeeded TCK can do a lot more with a lot less, but we are not taking account of the changing technology and upskilling on outdated items. 2. Being a leader, driving changes at a strategic and technology level to ensure the career growth of our people. Subject 2: 1. I will tell my younger self that you did not push the strategic changes fast enough, that people lost focus by doing multiple things they are not related to or capable of. 2. My younger self would need to change in helping peers realize the need for speed and upskilling and taking them along instead of running alone faster.",
  "Subject 1: 1. To effectively expand our technical spectrum, we need to preserve and continuously improve our existing capabilities while strategically integrating additional skills. By further increasing the application of AI within each individual's domain, we believe efficiency can improve dramatically. 2. We successfully pioneered virtualization in Korea, completing product development without a physical vehicle and reducing the development timeline by 86 weeks, while also proving its feasibility. Subject 2: I believe that in 10 years, we can achieve successful product development within one year while maintaining quality and outperform China without regrets. However, for this to be possible, not only leadership but all team members must understand and work together toward this goal. We need continuous communication and leaders who support and enable their teams.",
  "Subject 1: I personally enjoy AIO 2.0 idea to have multi-functional Engineers in their specific areas also knowing new tools (AI/Immersive/NX). This prepares employees to surf in different waves and be useful for the company, helping to balance the peaks and valleys of workload. I would look back very positive — my career is already a multi-task one. Subject 2: 1. Not getting prepared and learning the tools my company offered to be a better skilled leader/engineer. 2. Innovation culture is the key and ambidextrous approach is the way to win: we should deliver with excellence what we are launching and we know how to do, but the most important thing is what we must do differently — that requires time, innovation, thinking out of box, energy, dedication, engagement and inspiration.",
  "'Change' is a Good Thing. It is worth adapting change for myself and organization. The part where we were unable to lead all members of the organization and change together.",
  "1-1: Focusing on more valued works which AI cannot do. 1-2: I could secure your jobs. 2-1: I regret not being able to fully engage and convince less proactive engineers. 2-2: My bias and lack of varied approaches limited change — greater persistence and adaptability could have led to a different outcome.",
  "Subject 1-1: Becoming most valued engineering center in GM. Subject 1-2: We were proactive on upskilling ourselves in the era of AI, and this has led me to be more efficient in the future technical world. Subject 2-1: Share with your team the sense of urgency about the competitors' rapid growth which can be a threat for our future. Subject 2-2: We are too much focused on our daily tasks rather than seeing the future. We need to put more efforts to share the insight for the future with our team even though we are having hectic days.",
  "I believe our long-term competitiveness comes down to how well we develop our people and broaden their capabilities. I want to contribute to build a culture where people step up, look ahead, focus on what matters most, and deliver real results and efficiency.",
  "Subject 1: 1. If this succeeds fully, TCK will be able to move much faster and more flexibly than today. We will have people who can solve problems across boundaries, learn new skills with confidence, and create value without being limited by narrow roles. I think the company should explain the reason more clearly, simplify what can be simplified, and give people real time and real support to grow. 2. When I look back on my time at GM, I would be most proud to say that I helped create a culture where people became stronger and more adaptable, not because they were forced to endure more pressure, but because the organization truly invested in their growth. Subject 2: 1. My biggest regret would be not speaking up earlier and more strongly about the human side of change. As leaders, we often focused on execution, timing, and results, but we did not always pay enough attention to whether people were emotionally ready and genuinely supported. 2. What prevented me was probably the pressure of immediate work and the belief that people would eventually adapt on their own. What needed to change was both leadership mindset and company policy — more open dialogue, more willingness to listen when employees were struggling, and more practical support instead of simply raising expectations.",
  "Subject 1: 1. If we truly succeed, TCK can move faster, solve problems end-to-end, and compete globally without relying too much on others. We become more agile, more creative, and more confident in taking on complex challenges. 2. I would be proud to say that we built a team where people were not limited by their job titles. Everyone stepped up, learned new skills, and made TCK more competitive through collaboration and growth. Subject 2: 1. My biggest regret would be not pushing hard enough for faster change — especially in breaking silos and building a strong upskilling culture earlier. 2. What held me back was balancing short-term results over long-term capability building. I should have invested more in people, created more space for learning, and accepted more short-term risk for long-term gain.",
  "Subject 1: 1. Multiple program executions in a short period of time with high competitiveness. 2. Not AIO specifically, but many global program executions with people's passion and fast movement. Subject 2: 1. I hesitated to help set up a bold mindset in younger employees and encourage them to take on new challenges without fear. 2. I was concerned about how I might be perceived by leadership and worried about being evaluated as a poor manager. Looking back, I would have empowered younger team members more to pursue the challenges they were interested in.",
  "1-1. Empowered by engineers with advanced skillsets and the flexibility that comes from broader capabilities, TCK can contribute far more to GM — across both programs and advanced work. 1-2. I would be most proud to tell the story of how we successfully upskilled and reskilled engineers from physical to virtual engineering — securing both their roles and TCK's reputation. 2-1. I would regret having accepted limitations too easily, and not encouraging my teams to fail fast — to actively push boundaries and move forward with the learnings. 2-2. I would tell myself to spend more time checking in on the progress of upskilling and adoption of new innovative processes and technologies, not just setting the direction but staying close enough to ensure real progress was happening.",
  "Subject 1: 1. We are building a foundation for software development. If this is successful, we will lead the industry based on TCK's new capabilities. 2. We are building a foundation for software development. If this is successful, we will lead the industry based on TCK's new capabilities. Subject 2: 1. I was too faithful to the rules and BP set by GM. 2. Breaking the rules was considered the greatest wrong. Leadership with an open mind and open thinking is needed.",
  "Adapting & leading new ones.",
  "If AIO succeeds, it will not only increase profitability and simplify processes but also enable us to bring vehicles that customers want to market more quickly. By leveraging past data and expanded technical knowledge, we can make faster decisions and provide a high level of design freedom, which we believe will reduce frequent design changes. To achieve this success, we must apply cutting-edge technology ahead of others, and employees need to cultivate curiosity about new technologies and be willing to experiment with them. We should actively seek out technologies that can handle our tasks more efficiently and at a higher level.",
  "Subject 1: If successful, TCK will have the ability to seamlessly execute programs with greater speed and effectiveness. Our Engineers will have knowledge and access to a variety of tools that enable them to choose the best path to solving problems. I would be proud to have a part in creating a culture of engineers that love what they do because they have the expertise, tools, passion and freedom to engineer the world's best vehicles faster than our competitors. Subject 2: I would tell myself to wake up and realize that the way we used to do things is a plan to fail. Our competitors are doing things differently. I would tell myself not to be afraid to take more risks — to get closer to discomfort, push a little more, try some things and lean into those that move us forward.",
  "Subject 1: 1. If this effort fully succeeds, TCK will be able to operate with versatile engineers who can adapt to any program, enabling flexible resource allocation and significantly improving execution efficiency. 2. I was in comfort zone within inertia and avoided risks; I should have helped people learn more skills and move more flexibly earlier and pull them to change and accept the risk.",
  "1-1: If we truly build a culture of upskilling and broader skills, TCK will become much more flexible and competitive — responding faster with less dependency on key people. 1-2: The story I would be most proud to tell is that I helped create a safer workplace. 2-1: My biggest regret would be that I did not push for future-focused investment and new technology development. We spent too much energy managing today's work and not enough on preparing TCK for the next 5 to 10 years. 2-2: What prevented me was the pressure of daily operations, limited flexibility, budget difficulty, and a culture too focused on process instead of speed and innovation.",
  "Subject 1: 1. The company will be able to secure a lot of human resource flexibility to carry out projects under various conditions. 2. The courage to leave the comfortable zone and take on a challenge. Subject 2: 1. For organizational change, I would focus on changing the organization rather than changing the staff. 2. You need courage, speed, and much more dialogue. Keep talking until you find a way that everyone can understand.",
  "Subject #1: Through upskilling and AIO, it is possible to drive additional output with the current headcount while improving work efficiency. And looking back later, we will be able to say that we initiated the first step of change and pursued it together. Subject #2: I believe I may regret not having taken a more proactive stance in challenging GM's fixed specifications and requirements. I think concerns about failure and potential resistance to change held me back, and I would tell myself to be more proactive and bold in driving change.",
  "Subject 1: If successful, we will evolve into a flexible AiO-based organization and become a top-performing program partner. Looking back, despite many challenges and resistance, I would be proud that we successfully delivered results. Subject 2: My biggest regret would be relying too heavily on standards and processes, which slowed down execution and limited our willingness to take risks. What should have changed was adopting a more balanced approach — maintaining necessary discipline while enabling faster execution and more risk-taking.",
  "That I didn't spend enough time going deep on the capabilities of artificial intelligence. Make more space for it.",
  "Subject#1: 1. Well managed workload with flexibility. We can execute programs with more optimized resources and faster. 2. I would be proud that we challenged even under big pressure with many programs. Subject#2: 1. We are not facing but in the middle of big changes. You should keep moving right now. 2. Your actions are not enough, it is time to run faster.",
  "It's very essential to reskill or upskill for a new future, but it should not be the same for all people. AIO should include more various skills, not just NX or CAE. Very good goal but not a good method yet.",
  "Subject 1: TCK will be able to be a reference of delivery excellence in our products in the lowest possible time, and faster bring innovation to the customer. Subject 2: I regret not having learned more technology and having challenged the team more; there was a high level of resistance in all teams to embrace technology that stopped us from being efficient.",
  "Subject 1: 1. TCK will be able to work across boundaries more naturally, and deliver more outcome with the same resources. 2. The best story will be about building a team that kept challenging, kept adapting, and became stronger together. Subject 2: 1. My biggest regret would be not moving earlier and more boldly to build a culture of challenge and broader capability. 2. What prevented it would be the pressure of immediate deliverables, limited time, and a lack of great senior leadership.",
  "[Subject 1] 1. We will be able to learn faster with shorter development cycles and move from reactive to predictive problem solving. We will also be able to go beyond a function-based organization and become a team that proposes integrated, technology-enabled solutions with stronger global competitiveness. 2. The story I would be most proud of is that I helped open people's potential beyond the boundaries of their current roles — a culture where people were not afraid of new technology, where they kept learning, growing, and ultimately creating greater value than they thought possible. [Subject 2] 1. My biggest regret would be any moment when I accepted the comfort of familiar ways simply because they were still working. 2. I would tell my younger self that people have more potential than we often realize, and that leadership is about creating the conditions for that potential to grow — listen more, encourage earlier action, and create an environment where people can try, fail, learn, and try again with confidence.",
  "Subject 1: Q1. More efficiency and flexibility at allocating complicated jobs to AIO engineers. Q2. Even if many others are fearful or concerned about our effort on AIO, GMTCK can do a pilot test and make it successful. As a result, more workload can be done by less headcounts. Subject 2: Q1. Just followed blindly the BP, guidelines, tips without having the question 'what if?' Q2. Can I/we make a different way or approach with another technology or learning?",
  "We need to learn how China is doing now better than other countries.",
  "Subject 1. I think the direction is right and good. But if what we are doing now is not right, we need to change the approach. If everything we are pushing now succeeds, positive results are expected. But we should not look only at what appears on the surface — we need to look inside. We need to understand employees' true feelings. Subject 2. I cannot imagine how far AI will be able to go in 10 years. I think we will soon no longer need to handle UG directly. I believe the day is not far off when AI will draw UG math if we only provide conditions such as sections and material thickness. But I want to answer 'no' to the question of whether the many things we are doing now align with that. An R&D company should focus on R&D. What are world-class companies like NVIDIA and Apple doing?",
  "S1: I'd be most proud to say we moved from role-based work to a growth mindset, empowering people to continuously expand their skills and confidence. S2: My biggest regret would be not challenging the top-down culture and traditional ways of working earlier and more assertively. Hierarchy, risk aversion, and over-prioritizing alignment held me back; a more open, trust-based culture that truly encourages speaking up would have removed that barrier.",
  "Subject 1: In today's fast-changing automotive industry, where new technologies are coming out all the time, I believe this effort can help TCK become more flexible and better prepared to respond to change and new challenges. I hope I can say that I kept an open mindset and tried new things, instead of staying within boundaries. Subject 2: Looking back, my biggest regret would be that I was not bold enough to try more and challenge myself. I would tell my younger self to start earlier, do my best, and even if I fail, try again until I succeed. What stopped me was fear and hesitation — thinking 'What if I am wrong?' or 'What if I fail?' Instead of waiting for change, I should have gone after it."
];

// Part 3 — Personal mantra: why YOU believe it is worth caring about AiO and innovation
const surveyPart3 = [
  "We must find ways of executing work more efficiently by leveraging the tools at our disposal so we can make time to innovate.",
  "This is an essential and non-negotiable foundational capability for us to keep learning, grow beyond our current roles, and through continuous challenge become an organization that not only adapts to change, but leads it.",
  "Spare some time for studying of what you don't know.",
  "Start Upskilling to stay relevant - Continue to Stay Focused on Value creation - Stop wasting time on non-value adding events/meetings/speculations",
  "We are better—and we can do it smarter—than China.",
  "My main culture aspect / my mantra is: The most valued Technical Center means The most valued People. We are investing in people to become valued and unique to turn our business efficient and innovative!",
  "We are witnessing rapid changes in society and in the world around us due to AI and new technologies. However, some people in our organization are still repeating the same work they have been doing for the past 20 years, refusing to embrace change while demanding higher wages and better benefits. Is this a desirable approach?",
  "Settling for the status quo means you are already falling behind.",
  "World is changing rapidly. No kidding. We all have to proactively prepare ourselves. Our competitiveness is not secured unless we care about our innovation skills.",
  "Standing still is no longer an option. Learn fast, adapt, and turn change into real impact.",
  "The future will not wait for us. Not an option but a mandatory.",
  "If we grow our capability every day, we don't just follow change—we lead it!",
  "Improving and changing yourself every day should be as essential as the air you breathe for your life",
  "TCK is the only organization that can truly be competitive against China. When we materialize TCK's initiatives, TCK can be the most respected technical center in GM.",
  "Without challenges, there is no future.",
  "Grow together",
  "Technology in today's market is changing at a rapid pace, and if we fail to jump on that speeding locomotive, the train will leave the station and we will be left behind, losing the competition forever.",
  "Our future looks different than our past and present. To be competitive, we must embrace change and find new ways to accelerate the way we do our work through mindset, upskilling, collaboration, and a willingness to win!",
  "Feeling unstable is how we move forward",
  "In a rapidly changing environment, building a culture of upskilling, AiO, and innovation is essential to maximize efficiency and create a sustainable business for the future.",
  "We have studied for over 20 years to work for this company. What efforts are you making to maintain your job? As professionals, building up your skills is your own responsibility, not someone else's.",
  "It is not the strongest organization that survives, but the one that adapts to change.",
  "Growth is uncomfortable, but it's the only way we get better.",
  "I build leaders, strengthen capability, and shape a culture that delivers with excellence.",
  "We can grow up when we feel it is not comfortable.",
  "If you are not preparing, then you are preparing to fail.",
  "I will tell my team that every big accomplishment starts with a small step into a different direction, and I will be there to guide and help them to succeed. I trust them and we need to be fearless because together we can do everything.",
  "Innovation and challenge matter because the future will not wait for us, and the greatest risk for both our business and ourselves is to stand still. Gradatim Ferociter — step by step, ferociously.",
  "I want our team to be more than a group that delivers today's work well. I want us to become a team that defines future challenges early and solves them with stronger capability, AiO, and a true culture of innovation — because that is how we unlock the full potential of our people.",
  "Don't waste your time on doing something proven but used for many years without being challenged. Try to learn something unfamiliar and do your job in a new way which requires recent technologies.",
  "Be flexible to new tech",
  "Even when there are parts I don't like, I love our company. If the direction the company is pursuing is right, we shouldn't use negative energy that undermines the overall effort — we should join positively while sharing opinions on what needs improvement. I strongly support building an AiO / Innovation mindset. But the current approach to pushing it forward needs to be reconsidered.",
  "No growth, no future.",
  "Don't wait for change — go after it. Keep learning and growing, because this is a mindset that matters anywhere, not just here."
];

// Theme → surveyPart2 respondent index mappings
// Vision = S1 content, Regret = S2 content
const _THEME_INDICES = {
  // 27 of 34 mention people gaining broader freedom / not constrained by narrow roles
  'vision-1': [0,1,2,3,4,5,7,9,10,11,12,13,16,17,18,19,20,21,22,24,25,26,27,28,29,32,33],
  // 24 of 34 explicitly reference investing in people's learning / upskilling culture
  'vision-2': [0,1,2,4,5,9,10,11,13,16,17,18,19,20,22,23,24,25,26,27,28,29,32,33],
  // 23 of 34 mention speed, agility, cross-boundary problem solving
  'vision-3': [0,1,2,3,4,7,10,11,12,13,16,17,18,19,21,22,24,26,27,28,29,32,33],
  // 20 of 34 explicitly name TCK as most valued / competitive reference in GM
  'vision-4': [0,1,3,4,7,8,11,12,13,14,16,17,18,19,21,22,24,26,27,29],
  // 17 of 34 explicitly mention virtual/software/AI capability transformation
  'vision-5': [2,3,4,5,7,14,16,17,18,19,23,25,26,28,29,31,33],
  // S2 regret — 14 of 34: moved too slowly, rule-bound, stayed in comfort zone
  'regret-speed': [3,11,12,13,14,17,18,21,22,24,27,28,32,33],
  // S2 regret — 9 of 34: did not develop or bring people along
  'regret-people': [1,2,4,6,7,8,10,20,26],
  // S2 regret — 7 of 34: did not build future technical capability
  'regret-capability': [0,5,16,19,23,29,31],
  // S2 regret — 4 of 34: no clear S2 / etc.
  'regret-general': [9,15,25,30],
};
