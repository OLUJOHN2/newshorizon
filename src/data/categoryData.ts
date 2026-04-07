// src/data/categoryData.ts

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  content: string; // full article body, split by \n\n for paragraphs
  author: string;
  authorAvatar: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

const allArticles: Article[] = [
  // ─── WORLD ────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Ukraine dam breach leaves hundreds of thousands without water",
    excerpt:
      "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam.",
    content: `The catastrophic breach of the Kakhovka dam in southern Ukraine has triggered a humanitarian emergency, leaving an estimated 700,000 people without reliable access to drinking water. The dam, which sat on the Dnipro River in the Kherson region, collapsed in the early hours of Tuesday morning in what Ukrainian officials are calling a deliberate act of sabotage by Russian forces.

Ukraine's President Volodymyr Zelensky addressed the nation, calling the destruction an environmental and humanitarian catastrophe of historic proportions. He urged the international community to respond swiftly with aid and to condemn what he described as Russian ecocide.

Floodwaters swept through dozens of villages along the lower Dnipro, forcing emergency evacuations. In the city of Kherson, residents were seen wading through chest-high water carrying children and pets to higher ground. Ukrainian emergency services deployed over 150 boats and worked through the night to reach stranded residents.

The breach has also raised fears about the cooling water supply for the Zaporizhzhia nuclear power plant, Europe's largest, which is located upstream. The plant's operators confirmed they have sufficient water reserves for now, but experts warn that a prolonged crisis could create a secondary emergency.

Russia denied responsibility for the collapse, with state media suggesting the structure failed due to Ukrainian shelling and years of neglect. Independent analysts, however, noted that the scale and nature of the breach is consistent with an intentional demolition from the inside of the dam.

Aid organisations including UNICEF and the Red Cross have begun mobilising emergency water supplies and purification units. The United Nations Secretary-General called for an independent investigation and safe humanitarian corridors for civilians in affected areas.

Environmental scientists warn the ecological damage may take decades to recover from. The flooding has submerged vast stretches of fertile agricultural land, destroyed wildlife habitats along the river, and is expected to heavily contaminate the water table across the region for years to come.`,
    author: "Jack Harleom",
    authorAvatar: "https://i.pravatar.cc/80?img=11",
    authorBio:
      "Jack Harleom is a senior international correspondent covering conflict zones and humanitarian crises across Europe and the Middle East.",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=600&fit=crop",
    category: "world",
  },
  {
    id: 2,
    title: "What Turkey's new cabinet says about where the country is headed",
    excerpt:
      "Turkey's newly appointed cabinet signals a shift in economic and diplomatic policy under President Erdogan's continued leadership.",
    content: `President Recep Tayyip Erdogan has unveiled a new cabinet that signals a marked shift in Turkey's economic management, appointing a team of technocrats and Western-educated economists in what analysts are interpreting as a pivot back toward orthodox monetary policy.

The most significant appointment is that of Mehmet Simsek as Finance Minister, a former Wall Street banker and Merrill Lynch economist who previously served in the same role between 2009 and 2018. His return is widely seen as a signal to international investors that Turkey is ready to abandon the unconventional low-interest-rate policies that triggered a currency crisis and sent inflation soaring above 80 percent last year.

The new central bank governor, Hafize Gaye Erkan, also has a strong orthodox background, having worked in senior roles at First Republic Bank in the United States. Her appointment further reinforces the signal that Turkey intends to raise interest rates and restore macroeconomic stability.

On the foreign policy front, Erdogan has retained Hakan Fidan as Foreign Minister, a career intelligence chief who is expected to continue managing Turkey's delicate balancing act between NATO allies and Russia. Fidan brokered the grain corridor deal that allowed Ukrainian agricultural exports during the war and is considered a pragmatic operator.

Markets responded positively to the announcements. The Turkish lira strengthened by nearly four percent against the dollar on the day the cabinet was announced, its best single-day performance in months. Eurobonds also rallied as investors priced in a higher probability of a genuine policy correction.

Economists caution, however, that the structural challenges facing Turkey remain formidable. Inflation, though declining from its peak, remains well above 40 percent. Foreign currency reserves are thin, and the current account deficit continues to widen. The new team will need to move quickly and credibly to rebuild confidence before the window of goodwill closes.`,
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    authorBio:
      "Reine Warner reports on politics and geopolitics with a focus on the Middle East and Eastern Europe.",
    date: "Jun 11, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=600&fit=crop",
    category: "world",
  },
  {
    id: 3,
    title: "Félicien Kabuga: Rwanda genocide suspect unfit to stand trial",
    excerpt:
      "The UN-backed court ruled that the 87-year-old suspect, once one of the world's most wanted men, is mentally unfit to face justice.",
    content: `The International Residual Mechanism for Criminal Tribunals has ruled that Félicien Kabuga, an 87-year-old Rwandan businessman once among the world's most wanted fugitives, is mentally unfit to stand trial for his alleged role in financing the 1994 Rwandan genocide.

Kabuga was arrested in Paris in 2020 after spending 26 years as a fugitive. He is accused of funding the Interahamwe militia, which carried out the mass killings of an estimated 800,000 Tutsi and moderate Hutu Rwandans over 100 days. He also allegedly helped finance Radio Mille Collines, the propaganda station that broadcast instructions directing killers to their victims.

The tribunal's panel of judges reviewed extensive medical evidence and concluded that Kabuga suffers from a progressive neurocognitive disorder that has severely impaired his capacity to understand the proceedings and instruct his defence. The finding does not amount to an acquittal and does not foreclose the possibility of proceedings resuming if his condition improves.

The decision has prompted anguish among genocide survivors and their families. Survivors' organisations said they felt robbed of justice after decades of waiting. "We waited 26 years for his arrest, and now we are told the trial cannot proceed," said the president of Ibuka, Rwanda's main survivors' association. "This is deeply painful."

Human rights lawyers note the ruling raises broader questions about how international tribunals handle ageing defendants accused of mass atrocities. Several other high-profile cases at international courts have faced similar complications as suspects have aged or become ill before trials concluded.

The Rwandan government, which has long sought Kabuga's extradition, expressed disappointment at the outcome while noting that the legal process must be respected.`,
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/80?img=15",
    authorBio:
      "Oliver Grey is an award-winning journalist specialising in international law, justice and human rights.",
    date: "Jun 10, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200&h=600&fit=crop",
    category: "world",
  },
  {
    id: 4,
    title: "Brutal killings of two young girls highlight India's safety crisis",
    excerpt:
      "The incidents have sparked nationwide outrage and calls for systemic reform to protect women and children across the country.",
    content: `Two separate incidents involving the killing of young girls in different Indian states have sparked a nationwide wave of protests and renewed demands for urgent action to address the country's deeply entrenched problem of violence against women and children.

In the first case, a seven-year-old girl in Rajasthan was allegedly killed by her own father after she and her mother sought to sleep outside to escape the summer heat — a request he reportedly found humiliating. In the second case, a teenage girl in Manipur was found dead after going missing for three days, with her family alleging she was abducted and murdered.

Demonstrators gathered outside government buildings in New Delhi, Mumbai and Chennai, holding placards and demanding legislative action. Women's rights groups called for faster trials in cases of violence against women, more police sensitivity training and a national registry of convicted abusers.

India has grappled for years with high rates of crimes against women. Despite the passage of stricter laws following the 2012 gang rape and murder in Delhi that shocked the world, conviction rates in such cases remain low and the police response is frequently criticised as inadequate.

The National Commission for Women issued a statement calling the incidents deeply disturbing and said it had written to the relevant state governments seeking urgent reports. Opposition politicians used parliamentary proceedings to demand a debate on women's safety.

Sociologists and child welfare experts point to a complex web of factors: patriarchal attitudes that persist across class and caste lines, underfunded child protection services and a judicial system that is chronically overburdened. They warn that without structural reform, outrage alone will not produce lasting change.`,
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/80?img=9",
    authorBio:
      "Nina Waters covers social affairs, gender and human rights across South and Southeast Asia.",
    date: "Jun 09, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop",
    category: "world",
  },

  // ─── POLITICS ─────────────────────────────────────────────────────────────
  {
    id: 5,
    title:
      "How legal immigration might solve two of America's toughest problems",
    excerpt:
      "Economists argue that targeted immigration reform could ease labour shortages and stabilise the social security system.",
    content: `The United States faces two converging demographic crises that economists increasingly argue could be addressed simultaneously through a coherent legal immigration reform: a chronic labour shortage across key sectors and the long-term fiscal imbalance of the Social Security system.

The labour market shortfall is most acute in healthcare, agriculture and construction. The Bureau of Labour Statistics estimates that by 2030, the US will be short over one million nurses alone. In agriculture, farmers from California to Georgia report being unable to harvest crops due to insufficient workers, even as they raise wages significantly above minimum levels.

Social Security faces a separate but related challenge. As the baby boomer generation retires en masse, the ratio of working-age contributors to retirees is shrinking. The Social Security trustees have warned the trust fund could be exhausted by 2033, after which payouts would need to be cut by roughly 23 percent unless the programme is reformed.

Economists from across the ideological spectrum — from the libertarian Cato Institute to the progressive Economic Policy Institute — have published analyses suggesting that a well-structured increase in legal immigration levels could substantially ease both pressures simultaneously. Immigrants of working age contribute payroll taxes, fill gaps in essential services and consume goods and services that generate further employment.

The political obstacles, however, remain formidable. Immigration has become one of the most polarising issues in American politics. Republican lawmakers have largely moved toward restrictionism, while Democratic politicians have struggled to make a coherent economic case to working-class voters who worry about wage competition.

Bipartisan proposals that have emerged from the Senate in recent years have typically combined increased high-skilled immigration with tighter border enforcement. Whether any such package can survive the current political climate remains deeply uncertain.`,
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/80?img=17",
    authorBio:
      "Jamar Burns is a political analyst and columnist covering US domestic policy, Congress and elections.",
    date: "Jun 12, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop",
    category: "politics",
  },
  {
    id: 6,
    title:
      "Fact check: Trump boasts about a massive oil purchase that never happened",
    excerpt:
      "Multiple fact-checkers and energy analysts have found no record of the deal the former president repeatedly cites at rallies.",
    content: `Former President Donald Trump has repeatedly claimed at campaign rallies that he personally negotiated a deal for the United States to purchase a historic quantity of oil from Saudi Arabia, which he frames as a signature economic achievement of his first term. A review of the record by multiple independent fact-checking organisations and energy analysts has found no credible evidence that such a purchase ever took place.

Trump's claim centres on a specific figure — one billion barrels of oil — which he says Saudi Arabia agreed to sell to the US at a preferential price. In retelling the story, the figure and the circumstances have varied considerably. At some rallies, he presents it as a direct phone negotiation with Crown Prince Mohammed bin Salman; at others, it is framed as a formal state transaction.

The US Energy Information Administration, which tracks all petroleum imports, shows no such transaction in its data. Energy analysts at both Wood Mackenzie and S&P Global Commodity Insights told NewsHub they had no record of any agreement of that scale or nature. The Saudi Aramco press office did not respond to a request for comment.

The State Department and Treasury Department archives, reviewed through public records requests, also contain no documentation of such a deal being negotiated or concluded during the Trump administration.

Researchers at PolitiFact, the Washington Post Fact Checker and FactCheck.org have each separately rated versions of the claim as false or unsupported. The Trump campaign did not respond to a request for documentation supporting the former president's account.

This pattern of repetition without evidence is consistent with a broader category of claims that fact-checkers describe as "zombie claims" — assertions that continue to circulate regardless of how many times they are debunked because they resonate emotionally with a specific audience.`,
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    authorBio:
      "Reine Warner reports on politics and geopolitics with a focus on the Middle East and Eastern Europe.",
    date: "Jun 10, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&h=600&fit=crop",
    category: "politics",
  },
  {
    id: 7,
    title: "Senate passes sweeping climate bill in rare bipartisan vote",
    excerpt:
      "The legislation includes funding for renewable energy infrastructure and new emissions targets for 2035.",
    content: `In a rare display of bipartisan cooperation, the United States Senate passed a sweeping climate and clean energy bill by a vote of 62 to 38, drawing support from twelve Republican senators who crossed the aisle to back the legislation. The bill now heads to the House, where its fate is less certain.

The legislation allocates $400 billion over ten years to accelerate the transition to clean energy, including grants for domestic solar and wind manufacturing, expanded tax credits for electric vehicle purchases and a national grid modernisation programme. It also sets a legally binding target to reduce US greenhouse gas emissions by 50 percent from 2005 levels by 2035.

The twelve Republicans who voted in favour cited the economic argument, particularly the job creation potential in manufacturing and the energy security benefits of reducing dependence on imported fossil fuels. Several come from states — including Michigan, Ohio and North Carolina — where battery and clean energy manufacturing investment has already begun to flow following earlier legislation.

Environmental groups celebrated the vote as the most significant climate action Congress has taken in a generation. The Sierra Club and the Natural Resources Defense Council both issued statements praising the bipartisan coalition that made it possible.

Fossil fuel industry representatives and a number of Republican senators argued the bill would raise energy costs for consumers, harm oil and gas producing states and amount to government overreach into private energy markets. Senator Ted Cruz called it "a war on American energy."

Economists are divided on the cost impact. Some modelling suggests the transition costs will be offset within a decade by lower energy prices and reduced climate-related damages. Others warn that near-term costs to households in energy-intensive states could be significant without targeted assistance programmes.`,
    author: "Efrain Howell",
    authorAvatar: "https://i.pravatar.cc/80?img=12",
    authorBio:
      "Efrain Howell covers energy policy, climate legislation and the intersection of politics and science.",
    date: "Jun 08, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop",
    category: "politics",
  },

  // ─── BUSINESS ─────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "North Korea hackers suspected in new $35 million crypto heist",
    excerpt:
      "Blockchain analysts traced the stolen funds through a complex web of mixers and exchanges back to known DPRK wallets.",
    content: `A sophisticated cyberattack targeting the cryptocurrency exchange Atomic Wallet has resulted in the theft of approximately $35 million in digital assets, with blockchain security firms attributing the heist with high confidence to Lazarus Group, a hacking collective linked to North Korea's Reconnaissance General Bureau.

Elliptic, a blockchain analytics firm, said it traced the stolen funds through a complex laundering pattern consistent with previous North Korean cryptocurrency thefts, including the use of Sinbad, a cryptocurrency mixer that the US Treasury sanctioned last year. Chainalysis, a competing firm, independently reached similar conclusions.

The attack affected over 5,500 Atomic Wallet users worldwide. Victims reported waking up to find their wallets emptied despite not having shared seed phrases or clicked suspicious links. The attack vector is still being investigated, but preliminary analysis suggests a supply chain compromise of the application software itself.

North Korea has become one of the most prolific state-sponsored cyber actors in the cryptocurrency space. The United Nations Panel of Experts estimated in a 2023 report that Pyongyang-linked hackers have stolen over $3 billion in cryptocurrency since 2017, with the proceeds used to fund the country's weapons of mass destruction programme and evade international sanctions.

The FBI and the US Cybersecurity and Infrastructure Security Agency have issued joint advisories warning cryptocurrency firms about North Korean tactics, techniques and procedures. Several major exchanges have implemented additional screening for transaction patterns associated with known DPRK laundering methods.

Atomic Wallet said it has engaged leading security firms to investigate and has offered to reimburse the most severely affected users from a dedicated fund. Critics say the response underscores the inadequate security standards that persist among smaller cryptocurrency service providers.`,
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/80?img=9",
    authorBio:
      "Nina Waters covers social affairs, gender and human rights across South and Southeast Asia.",
    date: "Jun 12, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=600&fit=crop",
    category: "business",
  },
  {
    id: 9,
    title:
      "They said we were getting a recession. Instead, we're close to a bull market",
    excerpt:
      "Equity markets have surged over 20% from their October lows, technically entering bull market territory despite earlier fears.",
    content: `After more than a year of recession warnings from prominent economists, investment banks and media commentators, the United States equity market has staged a remarkable recovery that has caught many forecasters off guard. The S&P 500 has risen more than 20 percent from its October 2022 lows, a threshold that technically qualifies as a bull market by the most widely used definition.

The driving force behind the rally has been a combination of better-than-expected corporate earnings, a surprisingly resilient labour market and growing investor conviction that the Federal Reserve is nearing the end of its rate-hiking cycle. Technology stocks in particular have surged, with the Nasdaq composite up over 30 percent from its low point, driven by enthusiasm around artificial intelligence and its commercial applications.

The recession that so many analysts predicted with such confidence has stubbornly failed to materialise. The US economy grew at an annualised rate of 1.3 percent in the first quarter of 2023, slower than previous quarters but far from contraction. Consumer spending has held up better than expected, and the unemployment rate remains near historic lows at 3.7 percent.

This has prompted a wave of forecast revisions from Wall Street. Goldman Sachs lowered its recession probability estimate from 35 percent to 25 percent. JPMorgan's chief economist said the base case is now a "soft landing" rather than a downturn. Even Morgan Stanley, which has been among the most bearish major banks, has begun to moderate its warnings.

Not everyone is ready to declare victory. Yield curve inversion — one of the most historically reliable recession predictors — remains deep. Commercial real estate faces significant stress as office vacancies climb. And the full lagged effect of the fastest rate-hiking cycle in four decades has yet to be fully felt by the real economy.

For now, though, equity markets are telling a story of resilience that few predicted a year ago.`,
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/80?img=17",
    authorBio:
      "Jamar Burns is a political analyst and columnist covering US domestic policy, Congress and elections.",
    date: "Jun 11, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    category: "business",
  },
  {
    id: 10,
    title: "CNN Chairman and CEO Chris Licht is out after tumultuous tenure",
    excerpt:
      "His exit follows a critical profile and growing internal discontent over the network's editorial direction under his leadership.",
    content: `Chris Licht has stepped down as Chairman and CEO of CNN after a tenure of less than two years that was defined by internal turmoil, damaging coverage decisions and a widely read critical profile in The Atlantic that accelerated his downfall.

Licht was brought in by Warner Bros. Discovery CEO David Zaslav in 2022 with a mandate to reposition CNN away from what Zaslav and the network's parent company regarded as overly partisan coverage and toward a more traditional model of straight news broadcasting. His brief was to restore trust with a broader audience and return the network to financial health.

The tenure went badly almost from the start. His decision to host a live town hall with former President Donald Trump in May, which was widely criticised as giving a platform to misinformation without adequate challenge, proved to be a turning point. The backlash from CNN's own journalists, prominent media critics and a significant portion of the network's audience was swift and severe.

The Atlantic profile, written by Tim Alberta, portrayed a newsroom in disarray, with senior journalists describing Licht as out of his depth and his management style as erratic. The piece quoted several current and former CNN employees expressing fundamental disagreement with the direction he was taking the network.

Zaslav, who had stood by Licht through earlier controversies, concluded after the profile that the situation had become untenable. Licht was informed of the decision to part ways in a meeting earlier this week.

CNN faces significant challenges regardless of who leads it. Linear television viewership continues to decline across the industry, advertising revenue is under structural pressure and the network is navigating a major digital transition. Finding a successor with the vision and credibility to steady the ship will be a difficult task.`,
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/80?img=5",
    authorBio:
      "Jimena Morrow is a media correspondent covering the television and streaming industries.",
    date: "Jun 09, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    category: "business",
  },

  // ─── TECH ─────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "The future of AI in African newsrooms",
    excerpt:
      "Across the continent, media organisations are experimenting with AI-assisted reporting, raising both opportunities and ethical questions.",
    content: `Newsrooms across Africa are beginning to experiment with artificial intelligence tools in ways that reflect both the unique opportunities and the distinct challenges of journalism on the continent. From automated data reporting in South Africa to AI translation tools serving multilingual audiences in Nigeria and Kenya, the technology is arriving — but its adoption is uneven and the questions it raises are profound.

At the Daily Maverick in South Africa, journalists have begun using AI-assisted tools to analyse large government datasets, producing accountability reporting that would have required weeks of manual work. The publication recently broke a story on irregular public procurement by feeding thousands of government contract documents into an AI analysis tool that flagged statistical anomalies for human journalists to investigate.

In Nigeria, several digital publishers are piloting AI-powered translation systems to serve readers in Yoruba, Igbo and Hausa alongside English. The results have been mixed — fluency in indigenous languages remains a significant challenge for current models, which are predominantly trained on English-language data. Errors can be subtle but consequential in a context where language carries cultural nuance.

The ethical landscape is complicated by the specific vulnerabilities of the African information environment. Misinformation spreads rapidly, public trust in institutions is often fragile and the resources to verify AI outputs are scarce at many smaller publications. Media development organisations warn that deploying AI without adequate editorial oversight could amplify rather than address these problems.

At the same time, the potential benefits are significant. Administrative data that is technically public but practically inaccessible could be unlocked at scale. Language barriers that fragment audiences could be reduced. And in contexts where the journalist-to-population ratio is extremely low, AI tools could extend the reach of limited newsroom capacity.

The conversation in African media circles is increasingly not whether to use AI but how to use it responsibly. Several journalism schools across the continent are developing curricula to address this question, and regional media networks are beginning to share best practices.`,
    author: "Efrain Howell",
    authorAvatar: "https://i.pravatar.cc/80?img=12",
    authorBio:
      "Efrain Howell covers energy policy, climate legislation and the intersection of politics and science.",
    date: "Jun 12, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=600&fit=crop",
    category: "tech",
  },
  {
    id: 12,
    title:
      "Apple's Vision Pro headset lands in stores — here's what reviewers say",
    excerpt:
      "Early hands-on reviews praise the display quality but raise concerns about weight, battery life and the $3,499 price tag.",
    content: `Apple's Vision Pro spatial computing headset has arrived in stores after years of development and months of anticipation, and the first wave of reviews from technology journalists paints a picture of an extraordinary piece of engineering that remains, for now, a product in search of a mainstream use case.

The display technology is the element that receives the most consistent praise. Reviewers describe the micro-OLED screens as unlike anything available in a competing product — sharp, bright and capable of rendering spatial content with a convincing sense of depth and presence. The eye-tracking and hand-gesture controls are described as responsive and intuitive after a short learning curve.

The weight is a persistent complaint. At just over 600 grams, the device becomes uncomfortable during extended use, and several reviewers noted neck fatigue after 30-minute sessions. Apple sells an optional headband that distributes the weight differently, but critics say it does not fully resolve the problem.

Battery life is another limitation that the reviews flag unanimously. The external battery pack, connected by a cable, provides roughly two hours of use — adequate for a single viewing session but insufficient for extended work use. Apple says a future software update will allow the device to be plugged directly into a power outlet.

The $3,499 starting price places the Vision Pro firmly in the category of developer and enterprise tool rather than consumer product. Apple has been careful not to position it as a mass-market device, framing it instead as the first version of a platform it expects to mature over years.

The software ecosystem is nascent. While major applications including Microsoft Office, Zoom and a range of streaming services are available, the unique spatial computing experiences that would justify the hardware remain limited. Developers have had only a short time to build for the platform, and the most interesting applications are likely still months away.`,
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/80?img=15",
    authorBio:
      "Oliver Grey is an award-winning journalist specialising in international law, justice and human rights.",
    date: "Jun 11, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1633113215168-e0358b0b6ef4?w=1200&h=600&fit=crop",
    category: "tech",
  },
  {
    id: 13,
    title:
      "The double-decker airplane seat is back. Here's what it looks like now",
    excerpt:
      "A startup is reviving the controversial stacked seating concept with a redesign that aims to address passenger comfort concerns.",
    content: `The double-decker airplane seat — an idea that has surfaced periodically in aviation design circles for decades, invariably generating controversy — is back. A startup called Chaise Longue has unveiled a revised version of its stacked seating concept and is in early-stage discussions with several regional carriers about potential certification and deployment.

The original Chaise Longue design, which went viral when it was first presented at a Paris aircraft interiors expo several years ago, featured passengers in the upper row sitting in a semi-reclined position above lower-row passengers, with the intention of creating more usable cabin space without widening the fuselage.

The revised version addresses some of the most frequently cited concerns. The upper berth has been raised slightly to provide more headroom for passengers of average height, and the boarding mechanism — previously a cumbersome foot ladder — has been replaced with a folding step system integrated into the seat structure. The lower position has been redesigned to allow passengers to sit more upright during takeoff and landing.

The concept still faces significant regulatory hurdles. Aviation authorities require that all passengers be able to evacuate the aircraft within 90 seconds in an emergency. Critics have argued that a two-tier seating arrangement would complicate evacuation, particularly in a situation where structural damage makes the aisle partially impassable.

The company disputes this, arguing that its simulations show evacuation times within the regulatory threshold, and says it will be submitting for formal certification testing with the European Union Aviation Safety Agency later this year.

Whether airlines will be interested depends largely on economics. If the system allows carriers to increase seat count by 20 to 30 percent without structural modifications, the revenue case could be compelling even for a product that passengers will initially regard with scepticism.`,
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/80?img=9",
    authorBio:
      "Nina Waters covers social affairs, gender and human rights across South and Southeast Asia.",
    date: "Jun 10, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop",
    category: "tech",
  },

  // ─── HEALTH ───────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Pope Francis undergoes abdominal surgery in latest health concern",
    excerpt:
      "The 86-year-old pontiff was taken to a Rome hospital for what the Vatican described as a scheduled procedure.",
    content: `Pope Francis has undergone abdominal surgery at Rome's Gemelli Hospital, his third operation in less than three years, in what the Vatican described as a planned procedure to address a hernia that had been developing since his last surgery.

The 86-year-old pontiff was conscious and in good spirits following the operation, the Vatican said in a statement released on Wednesday evening. The procedure was performed under general anaesthesia and lasted approximately three hours. He is expected to remain hospitalised for several days for observation and recovery.

This is the latest in a series of health events that have prompted questions within the Catholic Church about the Pope's physical capacity to carry out the demands of the papacy. In 2021, he underwent surgery for diverticulitis. In March of this year, he was hospitalised for three days with a respiratory infection. He also uses a wheelchair due to knee and hip problems that have limited his mobility.

Francis has consistently resisted suggestions that he consider retiring, as his predecessor Benedict XVI did in 2013. In recent interviews, he has said he does not feel called to take that step and believes he can continue to fulfil his responsibilities despite his physical limitations.

Vatican observers note that the Pope has maintained a full schedule of audiences and public engagements, often travelling internationally despite his health challenges. He visited Africa in early 2023, and his calendar for the remainder of the year includes several major international events.

The question of papal succession is a sensitive one within the Church. A number of senior cardinals have suggested in recent years that the health and capacity of the reigning pope should be considered more formally, but there is no established mechanism within canon law for removing a pope who does not wish to resign.`,
    author: "Rey Creig",
    authorAvatar: "https://i.pravatar.cc/80?img=22",
    authorBio:
      "Rey Creig is a Rome-based correspondent covering the Vatican and religious affairs across Europe.",
    date: "Jun 11, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    category: "health",
  },
  {
    id: 15,
    title: "New study links ultra-processed foods to increased depression risk",
    excerpt:
      "Researchers analysed data from over 31,000 adults and found a significant correlation between processed food consumption and mental health.",
    content: `A large-scale study published in JAMA Network Open has found a significant association between the consumption of ultra-processed foods and increased risk of depression, adding to a growing body of research linking diet quality to mental health outcomes.

The study analysed data from 31,712 American adults who participated in the National Health and Nutrition Examination Survey. Participants who consumed the highest quantities of ultra-processed foods — defined using the NOVA classification system as industrially formulated products containing ingredients not typically used in home cooking — had a 33 percent higher likelihood of screening positive for depression compared to those with the lowest consumption.

Ultra-processed foods include mass-produced bread, packaged snacks, soft drinks, instant noodles, chicken nuggets and ready-to-heat meals. They now account for approximately 58 percent of calories consumed by American adults and 67 percent of calories consumed by American children.

The researchers, led by a team at Harvard T.H. Chan School of Public Health, controlled for a wide range of confounding variables including physical activity, smoking, alcohol consumption, body mass index and baseline health status. The association persisted across all demographic subgroups, though it was strongest among women and among adults aged 18 to 35.

The proposed biological mechanism involves the gut-brain axis — the bidirectional communication system between the gastrointestinal tract and the central nervous system. Ultra-processed foods are typically low in fibre, which feeds the gut microbiome, and high in additives that may disrupt the microbial communities associated with mood regulation and inflammation management.

The authors are careful to note that the study is observational and does not establish causation. People with depression may be more likely to consume ultra-processed foods due to reduced motivation to cook, rather than the reverse.`,
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/80?img=5",
    authorBio:
      "Jimena Morrow is a media correspondent covering the television and streaming industries.",
    date: "Jun 10, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=600&fit=crop",
    category: "health",
  },
  {
    id: 16,
    title: "WHO warns of rising antimicrobial resistance as a global threat",
    excerpt:
      "Drug-resistant infections now kill 1.27 million people annually and the figure is expected to rise sharply by 2050.",
    content: `The World Health Organisation has issued its most urgent warning to date about the global threat posed by antimicrobial resistance, calling it one of the greatest challenges to human health and describing the current pace of international response as wholly inadequate relative to the scale of the crisis.

Drug-resistant infections — caused by bacteria, viruses, fungi and parasites that have evolved to withstand the drugs used to treat them — now kill 1.27 million people annually and contribute to the deaths of nearly five million more in whom resistance complicates treatment. Without coordinated action, the WHO projects that the annual death toll could rise to ten million by 2050, surpassing cancer as a cause of mortality.

The primary driver of resistance is the overuse and misuse of antibiotics, both in human medicine and in industrial agriculture. In many low- and middle-income countries, antibiotics are widely available without prescription and are routinely used to treat viral infections against which they are ineffective. In intensive livestock farming, antibiotics are frequently used as growth promoters rather than to treat sick animals, creating ideal conditions for resistant strains to evolve.

The WHO report highlights a severe imbalance in the pipeline of new antibiotics. Despite growing clinical need, pharmaceutical companies have largely retreated from antibiotic development because the economics are unfavourable — effective antibiotics, used sparingly as a last resort, generate far less revenue than drugs for chronic conditions. Only a handful of genuinely novel antibiotic classes have been approved in the past four decades.

The report calls for a package of measures including stricter national antibiotic stewardship programmes, international coordination on surveillance and reporting, reformed financing models for antibiotic development and stronger global governance frameworks to prevent resistant strains from crossing borders.`,
    author: "Jack Harleom",
    authorAvatar: "https://i.pravatar.cc/80?img=11",
    authorBio:
      "Jack Harleom is a senior international correspondent covering conflict zones and humanitarian crises across Europe and the Middle East.",
    date: "Jun 08, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=600&fit=crop",
    category: "health",
  },

  // ─── ENTERTAINMENT ────────────────────────────────────────────────────────
  {
    id: 17,
    title: "This country has the best wines in the world for 2023",
    excerpt:
      "A major international wine competition has awarded top honours to a country quickly becoming dominant in global viticulture.",
    content: `Georgia — the small Caucasian nation nestled between Russia, Turkey, Armenia and Azerbaijan — has been awarded the title of best overall wine-producing country at the 2023 Decanter World Wine Awards, the world's largest and most influential wine competition, in a result that has sent shockwaves through the traditional wine establishment.

The country received more gold and platinum medals per entry than any other nation in the competition, and its ancient qvevri wines — made in large clay amphoras buried underground, a method that dates back 8,000 years — earned particular praise from judges for their complexity, authenticity and distinctive amber colour.

Georgia has been making wine for longer than any other country on earth. The method of fermenting whole grapes, including skins and seeds, in clay vessels produces wines that are categorically different from the clear, stainless steel-fermented whites common in western Europe. The skin contact creates tannins and a golden-amber hue unusual in white wine, and the fermentation in porous clay imparts a subtle earthiness.

For decades, most Georgian wine was consumed domestically or exported to Russia and former Soviet republics. The category barely registered in the consciousness of western wine consumers. That has changed dramatically in the past decade as a wave of natural wine enthusiasm has created an audience for unfiltered, low-intervention wines, and Georgian qvevri wines have emerged as the ultimate expression of that aesthetic.

Exports to western Europe and North America have more than tripled since 2015. Several high-profile restaurants in London, New York and Paris now carry extensive Georgian wine lists.

The Decanter result is expected to accelerate interest further and may trigger a significant increase in Georgian wine imports over the next 12 to 18 months.`,
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    authorBio:
      "Reine Warner reports on politics and geopolitics with a focus on the Middle East and Eastern Europe.",
    date: "Jun 11, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&h=600&fit=crop",
    category: "entertainment",
  },
  {
    id: 18,
    title: "Hollywood writers strike enters third week with no deal in sight",
    excerpt:
      "Negotiations between the WGA and major studios remain stalled over residuals from streaming platforms and the use of AI-generated scripts.",
    content: `The Hollywood writers strike has entered its third week with no indication that negotiations between the Writers Guild of America and the Alliance of Motion Picture and Television Producers are close to producing a deal. The picket lines outside major studios including Netflix, Amazon, Disney and Warner Bros. have grown rather than shrunk, and the mood among striking writers remains resolute.

The core issues dividing the two sides are the structure of residuals payments from streaming platforms and the conditions under which artificial intelligence tools can be used in the writing process. On streaming residuals, the WGA is seeking a formula that better reflects the audience size of individual shows — a point of significant contention given that streaming platforms have historically been reluctant to share viewership data.

On AI, the Guild is seeking explicit contractual language prohibiting studios from using AI-generated material as a substitute for human writing, and from asking writers to edit AI-generated scripts — a practice that could dramatically reduce the number of writers employed on any given production. Studios have proposed language that they say addresses these concerns, but the WGA says it is insufficiently protective.

The financial stakes for both sides are significant. The major studios are estimated to be losing tens of millions of dollars per week in delayed production. For writers, many of whom work project to project with limited savings, extended strike action creates serious financial hardship.

Several high-profile productions have already announced delays, and the autumn broadcast television season is now at serious risk if a deal is not reached within the next four to six weeks.

Mediators from the Federal Mediation and Conciliation Service have been brought in to facilitate talks, but no formal negotiating sessions were scheduled as of Thursday.`,
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/80?img=5",
    authorBio:
      "Jimena Morrow is a media correspondent covering the television and streaming industries.",
    date: "Jun 10, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop",
    category: "entertainment",
  },
  {
    id: 19,
    title: "Beyoncé's Renaissance Tour breaks box office records in Europe",
    excerpt:
      "The first leg of the tour has grossed over $250 million, making it one of the highest-earning concert tours in European history.",
    content: `Beyoncé's Renaissance World Tour has smashed box office records across Europe, grossing more than $250 million during its first leg and setting new attendance and revenue records at multiple venues across the continent. The figures, compiled by Billboard Boxscore, establish the Renaissance Tour as one of the highest-grossing European concert tours in history.

The Stockholm opening night sold out in under seven minutes when tickets were first released. Subsequent dates in London, Amsterdam, Brussels, Paris, Cologne and Barcelona each sold out within a similar window, and secondary market prices reached multiples of face value across every city on the European itinerary.

The show itself — a visually elaborate production drawing on science fiction, Afrofuturism and the aesthetic language of club culture — has received near-universal acclaim from critics. The Guardian called it "a masterclass in spectacle and control." Le Monde described the Paris show as "a transformative experience that redefines what a pop concert can be."

The Renaissance album, released in 2022 and centred on house and dance music, had a different sonic identity from Beyoncé's previous work and was initially uncertain commercial territory. The tour has cemented its cultural status and introduced the material to audiences who may not have followed the album cycle closely.

Several economic analyses have noted the tour's impact on local economies. Hotels, restaurants and transport providers in Stockholm and London reported significant revenue increases in the weeks of the concerts, with tourism boards in both cities crediting the shows with drawing visitors from across Europe and beyond.

The tour's American leg begins in July. Demand for US dates has been similarly extraordinary, with multiple stadium shows selling out in minutes.`,
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/80?img=9",
    authorBio:
      "Nina Waters covers social affairs, gender and human rights across South and Southeast Asia.",
    date: "Jun 08, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop",
    category: "entertainment",
  },

  // ─── SPORTS ───────────────────────────────────────────────────────────────
  {
    id: 20,
    title:
      "F1 teams had big upgrades planned for Imola — but what happens now?",
    excerpt:
      "The cancellation of the Emilia Romagna Grand Prix has disrupted development schedules for several teams heading into the summer.",
    content: `The cancellation of the Emilia Romagna Grand Prix due to severe flooding in the region has created a significant logistical headache for several Formula 1 teams who had planned to introduce major technical upgrades at the Imola circuit. With the race removed from the calendar at short notice, those development packages now need to be redirected to Monaco — a very different type of circuit that may render some of the aerodynamic changes less effective.

Red Bull Racing, the dominant team this season, had planned upgrades to its floor and rear wing assembly that were specifically optimised for the medium and high-speed characteristics of Imola. Team principal Christian Horner said the changes would still be brought to Monaco but acknowledged they were not originally designed with the street circuit in mind.

For teams lower in the field, the situation is more complex. Aston Martin, which had the strongest start to the season among the chasing pack, had planned what team sources described as a "significant upgrade package" intended to address a mid-corner weakness that Red Bull's Max Verstappen has been able to exploit. The team now has less time to assess and validate the changes before deploying them.

McLaren, currently enjoying a resurgence in form, had also scheduled notable changes to its MCL60. Team principal Andreas Seidl said the plan would be reviewed, but that the priority was not to rush modifications that had not been fully validated in simulation.

The calendar disruption also affects logistical planning for smaller teams with tighter budgets. Transporting a large upgrade package to Monaco at short notice carries additional costs that can meaningfully impact a smaller outfit's financial planning for the rest of the season.

The gap before Monaco is shorter than the usual inter-race window, giving engineers less time to assess their options.`,
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/80?img=15",
    authorBio:
      "Oliver Grey is an award-winning journalist specialising in international law, justice and human rights.",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    category: "sports",
  },
  {
    id: 21,
    title: "Stella explains what Rob Marshall will bring to McLaren in 2024",
    excerpt:
      "The McLaren team principal outlined why Marshall's technical expertise will be key to the team's title challenge next season.",
    content: `McLaren team principal Andrea Stella has given his most detailed account yet of why he pursued the signing of Rob Marshall from Red Bull Racing and what he expects the experienced technical director to contribute to McLaren's 2025 Formula 1 car programme.

Marshall spent nearly two decades at Red Bull, where he was a key figure in the aerodynamic and conceptual development of the cars that won four consecutive constructors' championships between 2010 and 2013 and the more recent run of dominance that has seen Max Verstappen claim the last two drivers' titles with record-breaking point tallies.

Stella described Marshall as someone with a rare combination of qualities: deep technical knowledge of high-downforce aerodynamic concepts, strong leadership capabilities within a large engineering organisation, and an understanding of how to translate simulation performance into real-world results on track.

"Rob has been at the heart of the most successful technical operation in modern Formula 1," Stella told reporters at the team's Woking factory. "The knowledge and experience he brings is exceptional, and we believe his contribution will be instrumental in closing the gap to Red Bull."

Marshall's arrival will need to be carefully integrated with McLaren's existing technical structure. The team already has a strong group of senior engineers, including a new head of aerodynamics hired from Mercedes. Stella said the priority was to create clarity of responsibility while fostering the kind of collaborative environment that produces innovative solutions.

McLaren has shown significant improvement in performance this season following a difficult 2022. The team currently sits third in the constructors' championship, and there is genuine belief within the organisation that a title challenge could be possible within the next two to three years.`,
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/80?img=15",
    authorBio:
      "Oliver Grey is an award-winning journalist specialising in international law, justice and human rights.",
    date: "Jun 10, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop",
    category: "sports",
  },
  {
    id: 22,
    title: "NBA Finals: Heat push series to Game 7 with stunning comeback",
    excerpt:
      "Miami erased a 17-point deficit in the final quarter to force a decisive seventh game against the Denver Nuggets.",
    content: `The Miami Heat produced one of the most dramatic fourth-quarter comebacks in NBA Finals history on Thursday night, erasing a 17-point Denver Nuggets lead in the final 10 minutes to win Game 6 and force a decisive seventh game in the series.

The Heat trailed 89-72 heading into the fourth quarter, and the Nuggets appeared to be in complete control of both the game and the series. Nikola Jokic had produced another dominant performance, finishing the quarter with 28 points, 12 rebounds and nine assists, and the Denver crowd at Ball Arena had already begun to anticipate a championship celebration.

What followed was extraordinary. Miami's Jimmy Butler, who had been quiet for much of the game, caught fire in the fourth quarter, scoring 14 of his 28 points in the final period. Bam Adebayo added a series of crucial defensive stops. The Heat went on a 29-8 run over the final nine minutes, completing a comeback that statistical models had put at less than one percent probability at the start of the fourth.

The final score, 103-96, leaves the series perfectly poised. Game 7 will be played in Denver on Sunday night, and the Nuggets will be heavy favourites given their home court advantage and the fact that Jokic has been the best player in the series by a considerable margin.

However, the Heat's ability to produce this comeback suggests they cannot be dismissed. Miami has defied expectations throughout the playoffs, entering as the eighth seed and eliminating the Milwaukee Bucks, New York Knicks and Boston Celtics. A Game 7 victory would complete one of the most improbable championship runs in league history.

Both coaches confirmed their full rosters are healthy and available for the decisive game.`,
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/80?img=17",
    authorBio:
      "Jamar Burns is a political analyst and columnist covering US domestic policy, Congress and elections.",
    date: "Jun 09, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=600&fit=crop",
    category: "sports",
  },

  // ─── LIFESTYLE ────────────────────────────────────────────────────────────
  {
    id: 23,
    title:
      "The minimalist home trend that is taking over interior design in 2023",
    excerpt:
      "Designers are leaning into calm, clutter-free spaces with natural materials as homeowners seek refuge from overstimulation.",
    content: `Interior designers report a significant and sustained shift in client briefs over the past two years, with an overwhelming move away from the maximalist, heavily accessorised aesthetics that dominated the mid-2010s toward spaces defined by restraint, natural materials and deliberate calm.

The trend has several overlapping drivers. The experience of spending extended time at home during the pandemic made many people acutely aware of how their physical environment affects their mental state. Rooms filled with visual noise became sources of stress rather than comfort, and the subsequent renovation wave reflected a desire for spaces that felt genuinely restorative.

The aesthetic draws heavily on Scandinavian and Japanese influences but has evolved into something distinct. Key elements include a restricted, nature-derived colour palette — warm whites, stone, clay and muted greens — structural furniture with visible timber grain and tactile textiles, and a deliberate editing-out of decorative objects with no personal meaning or functional purpose.

The approach extends to storage. Designers and their clients are investing heavily in custom joinery that conceals appliances, cables and clutter behind seamless surfaces. Open shelving, popular in kitchens through the 2010s, has fallen significantly out of favour.

Material authenticity is central to the aesthetic. There is strong resistance among proponents to synthetic imitations of natural materials — engineered wood flooring, plastic rattan and vinyl marble are out, while solid stone, reclaimed timber and natural linen command significant premiums.

The trend has commercial implications for the interiors industry. Brands built on maximalist, fast-changing product lines are facing pressure, while manufacturers of high-quality, long-lasting materials and furniture are seeing increased demand. Several major retailers have overhauled their ranges to reflect the shift.`,
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/80?img=5",
    authorBio:
      "Jimena Morrow is a media correspondent covering the television and streaming industries.",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop",
    category: "lifestyle",
  },
  {
    id: 24,
    title: "How to build a morning routine that actually sticks",
    excerpt:
      "Behavioural scientists share the habits that research shows are most likely to last — and the common mistakes that derail most people.",
    content: `The self-improvement industry has sold millions of books on the transformative power of morning routines, and the gap between the aspirational routines people design and the ones they actually maintain is a subject of growing interest to behavioural scientists. Research over the past decade offers some clear guidance on what works — and why most people's attempts fail within the first three weeks.

The most robust finding in habit formation research, associated with the work of BJ Fogg at Stanford University and James Clear in his popularisation of the field, is that the difficulty of a new behaviour is the single strongest predictor of whether it will stick. People consistently underestimate the importance of making habits easy in the early stages and overestimate the role of motivation and willpower.

The implication for morning routines is counterintuitive: the most effective starting point is almost embarrassingly small. Research participants who committed to one minute of meditation in the morning were significantly more likely to still be practising six months later than those who committed to twenty minutes, even if their long-term goals were identical. The principle is that consistency builds the neural infrastructure for a habit; duration and intensity can expand once that infrastructure is in place.

A second key finding concerns the role of environmental design. Placing the book you want to read on your pillow, setting out workout clothes the night before, or moving the coffee maker next to wherever you sit to journal all reduce the friction between waking up and beginning a desired behaviour. Studies show that the number of steps between waking and beginning a new habit is inversely correlated with adherence rates.

Identity, too, plays a significant role. Research published in the Journal of Consumer Research found that people who described a new habit as an expression of who they are — "I am someone who exercises in the morning" rather than "I am trying to exercise in the morning" — showed significantly higher adherence at six-month follow-up.

The most common failure pattern, researchers note, is not a single missed day but the response to missing a day. People who treat a lapse as a catastrophic failure of willpower tend to abandon the routine entirely; those who treat it as a normal and expected part of the process return to the habit significantly faster.`,
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    authorBio:
      "Reine Warner reports on politics and geopolitics with a focus on the Middle East and Eastern Europe.",
    date: "Jun 11, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
    category: "lifestyle",
  },
  {
    id: 25,
    title: "The best travel destinations for solo travellers in 2023",
    excerpt:
      "From the temples of Kyoto to the markets of Marrakech, these cities top the list for safety, affordability and solo-friendly culture.",
    content: `Solo travel has grown dramatically as a category over the past decade, driven by changing social attitudes, the rise of travel-focused social media communities and an expanding infrastructure of accommodation, tour and social experiences designed specifically for people travelling alone. The question of where to go first — or next — is one that solo travel communities debate enthusiastically, and a consensus list of the best destinations in 2023 has some familiar names alongside a few surprises.

Kyoto, Japan, consistently tops polls of solo travellers across demographic groups. The city's excellent public transport, low crime rate, abundance of solo dining culture — counter seating at ramen and sushi bars, for instance, is designed specifically for single diners — and the meditative quality of its temples and gardens make it an ideal destination for those travelling without companions. Japan more broadly has seen a surge in international visitors following the reopening of its borders after the pandemic.

Medellín, Colombia, has undergone a remarkable transformation from its violent past and is now consistently cited as one of Latin America's most dynamic and welcoming cities for independent travellers. The Poblado and Laureles neighbourhoods have thriving co-working and hostel scenes, and the city's cable car network, connecting hillside comunas to the city centre, is one of the great urban travel experiences in the world.

Lisbon continues to draw solo travellers seeking a combination of excellent food and wine, walkable neighbourhoods, warm weather and relatively affordable costs by western European standards. The city has invested significantly in cultural infrastructure over the past decade and has a well-developed community of expats and digital nomads that makes it easy to meet people.

Marrakech offers an experience unlike anywhere else: the sensory intensity of the medina, the extraordinary variety of traditional crafts and the warmth of Moroccan hospitality make it a compelling destination, though solo travellers — particularly women — are advised to research neighbourhood dynamics and book riads with attentive hosts.

Bangkok rounds out a list that reflects the increasing diversity of the solo travel market: accessible, endlessly stimulating, affordable and with an extraordinary food scene accessible to a single diner at any budget level.`,
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/80?img=9",
    authorBio:
      "Nina Waters covers social affairs, gender and human rights across South and Southeast Asia.",
    date: "Jun 09, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=600&fit=crop",
    category: "lifestyle",
  },
];

export const categories = [
  "world",
  "politics",
  "business",
  "tech",
  "health",
  "entertainment",
  "sports",
  "lifestyle",
];

export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter((a) => a.category === category.toLowerCase());
}

export function getArticleById(id: number): Article | undefined {
  return allArticles.find((a) => a.id === id);
}

export function getRelatedArticles(article: Article, count = 3): Article[] {
  return allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, count);
}

export function getAllArticles(): Article[] {
  return allArticles;
}
