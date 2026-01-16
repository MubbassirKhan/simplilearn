import Image from "next/image";
import SkillCard from "@/components/SkillCard";
import SpeakerCard from "@/components/SpeakerCard";
import AgendaCard from "@/components/AgendaCard";
import { assets } from "@/lib/assets";

export default function Home() {
  const takeaways = [
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting.",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      {/* Hero Section - Height: 693px */}
      <section className="relative h-[572px] md:h-[600px] lg:h-[693px] w-full max-w-[430px] md:max-w-[768px] lg:max-w-[1440px] mx-auto overflow-hidden bg-[#D9D9D9]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={assets.heroBg}
            alt=""
            fill
            className="object-cover object-left md:object-center rotate-180"
            style={{ 
              filter: "blur(0.5px) contrast(1.8)",
              mixBlendMode: "normal"
            }}
            priority
          />
          {/* Blue gradient overlay on image */}
          <div 
            className="absolute inset-0 rotate-180"
            style={{
              background: "linear-gradient(287.08deg, rgba(28, 78, 241, 0.45) -11.11%, rgba(26, 60, 182, 0.45) 106.32%)",
              mixBlendMode: "plus-darker"
            }}
          />
        </div>

        {/* Bottom gradient overlay - mobile specific */}
        <div 
          className="absolute left-0 right-0 h-[317px] md:hidden"
          style={{
            top: "258px",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.75%, rgba(0, 0, 0, 0.6) 97.16%)"
          }}
        />
        
        {/* Desktop overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#000040] to-[#020202] opacity-60" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Logo - Position: left:100px top:55px */}
          <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[30px] md:top-[45px] lg:top-[55px] w-[180px] md:w-[250px] lg:w-[300px] h-[60px] md:h-[83px] lg:h-[100px]">
            <Image
              src={assets.logo}
              alt="Simplilearn"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Invite-Only Badge and Text Container */}
          <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[110px] md:top-[195px] lg:top-[245px] flex flex-row flex-wrap items-center gap-[8px] md:gap-[12px]">
            {/* Invite-Only Badge */}
            <div className="bg-[#00FFFF] rounded-[6px] px-[10px] md:px-[16px] py-[6px] md:py-[12px] flex items-center justify-center">
              <span
                className="font-black text-[15px] md:text-[22px] lg:text-[25px] leading-none text-[#0d1b3f]"
                style={{
                  textShadow:
                    "1px 1px 0 #00a7d3, -1px 0 0 #004f7a, 0 1px 0 #004f7a, 0 -1px 0 #00a7d3, 1px -1px 0 #004f7a, -1px 1px 0 #004f7a",
                }}
              >
                Invite-Only
              </span>
            </div>

            {/* Executive Roundtable Text */}
            <span
              className="text-[15px] md:text-[18px] lg:text-[20px] text-[#00FFFF] leading-[28px] flex items-center"
              style={{
                fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                fontWeight: 300,
              }}
            >
              An Executive Roundtable · Lunch
            </span>
          </div>

          {/* Main Title - Position: left:100px top:325px */}
          <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[200px] md:top-[275px] lg:top-[325px] max-w-[calc(100%-40px)] md:max-w-[700px] lg:max-w-[900px]">
            <h1 className="leading-[1.2]">
              <span className="block font-black text-[30px] md:text-[38px] lg:text-[48px] text-[#F5AB40]">
                The Skills That Matter Next:
              </span>
              <span className="block font-medium text-[30px] md:text-[38px] lg:text-[48px] text-[#F5AB40] mt-[4px] md:mt-[8px]">
                Preparing Your Workforce
              </span>
              <span className="block font-medium text-[30px] md:text-[38px] lg:text-[48px] text-[#F5AB40]">
                & Leaders for the AI Era
              </span>
            </h1>
          </div>

          {/* Date - Position: left:100px top:545px */}
          <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[430px] md:top-[480px] lg:top-[545px] flex items-center gap-[10px] md:gap-[16px]">
            <svg
              width="20"
              height="23"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[24px] md:h-[27px] flex-shrink-0"
            >
              <path
                d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3ZM19 21H5V10H19V21ZM19 8H5V5H19V8Z"
                fill="white"
              />
            </svg>
            <span className="font-black text-[18px] md:text-[26px] lg:text-[30px] text-white leading-none">
              February 20, 2026
            </span>
          </div>

          {/* Location - Position: left:100px top:605px */}
          <div className="absolute left-[20px] md:left-[50px] lg:left-[100px] top-[470px] md:top-[525px] lg:top-[605px] flex items-center gap-[10px] md:gap-[16px] max-w-[calc(100%-40px)]">
            <svg
              width="20"
              height="25"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[24px] md:h-[30px] flex-shrink-0"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z"
                fill="white"
              />
            </svg>
            <span className="font-black text-[17px] md:text-[24px] lg:text-[30px] text-white leading-none">
              Chamberlain's Steak & Fish House, Dallas
            </span>
          </div>
        </div>
      </section>

      {/* RSVP Section - After Hero */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[30px] md:pt-[40px] lg:pt-[50px] pb-[15px] md:pb-[18px] lg:pb-[20px]">
        <div className="px-[20px] md:px-[50px] lg:px-[100px]">
          {/* RSVP Form - Input and Button */}
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-[10px] md:gap-[20px] lg:gap-[25px] max-w-full md:max-w-none">
            {/* Email Input */}
            <div className="relative w-full md:w-[450px] lg:w-[600px] h-[50px] md:h-[75px] lg:h-[80px]">
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="w-full h-full px-[15px] pl-[46px] md:pl-[60px] text-[13px] md:text-[17px] lg:text-[18px] font-normal text-gray-600 border-2 border-gray-300 rounded-[8px] focus:outline-none focus:border-[#f5ab40]"
              />
              {/* Email Icon */}
              <svg
                className="absolute left-[14px] md:left-[20px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* RSVP Button */}
            <a
              href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
              className="inline-flex md:w-[200px] lg:w-[250px] h-[50px] md:h-[75px] lg:h-[80px] px-[40px] rounded-[8px] items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors"
            >
              <span className="font-bold text-[17px] md:text-[26px] lg:text-[28px] text-white">RSVP Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[25px] md:pt-[35px] lg:pt-[40px] pb-[30px] md:pb-[40px] lg:pb-[50px]">
        {/* First paragraph - Position: left:100px, Width: 1240px */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px]">
          <p className="text-[18px] md:text-[22px] lg:text-[27px] leading-[28px] md:leading-[34px] lg:leading-[40px] text-black font-medium max-w-full lg:max-w-[1240px]">
            AI is accelerating change across every operational layer. Roles are
            shifting. Leadership models are collapsing and reforming. Frontline
            and mid-level managers will soon lead teams of people and
            intelligent agents.
          </p>

          <p className="text-[18px] md:text-[22px] lg:text-[27px] leading-[28px] md:leading-[34px] lg:leading-[40px] text-black font-medium mt-[20px] md:mt-[25px] lg:mt-[30px] max-w-full lg:max-w-[1240px]">
            But even the most advanced enterprises are asking the same question:
          </p>
        </div>

        {/* Highlighted Question - Centered */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px] mt-[30px] md:mt-[38px] lg:mt-[45px]">
          <p className="font-black text-[24px] md:text-[30px] lg:text-[35px] text-black text-center leading-[34px] md:leading-[42px] lg:leading-[50px] max-w-full md:max-w-[800px] lg:max-w-[1000px] mx-auto">
            Which capabilities will matter most,
            <br />
            and how do we build them at scale?
          </p>
        </div>

        {/* Second paragraph */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px] mt-[30px] md:mt-[38px] lg:mt-[45px]">
          <p className="text-[18px] md:text-[22px] lg:text-[27px] leading-[28px] md:leading-[34px] lg:leading-[40px] text-black font-medium max-w-full lg:max-w-[1240px]">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise
            workforce leaders for a candid, senior-level discussion on
            what&apos;s coming next.
          </p>
        </div>
      </section>

      {/* What We'll Explore Section - Height: 620px */}
      <section className="w-full max-w-[1440px] mx-auto bg-[#E8EFFF] py-[30px] md:py-[35px] lg:py-[40px] relative">
        <div className="px-[20px] md:px-[50px] lg:px-[100px]">
          <h2 className="font-black text-[28px] md:text-[34px] lg:text-[40px] text-[#f5ab40] leading-normal mb-[15px] md:mb-[18px] lg:mb-[20px]">
            What We&apos;ll Explore
          </h2>

          <p className="text-[18px] md:text-[21px] lg:text-[25px] text-black font-medium max-w-full lg:max-w-[1240px] mb-[25px] md:mb-[30px] lg:mb-[35px]">
            The critical shifts every enterprise must plan for:
          </p>
        </div>

        {/* Cards Grid - 3x2 layout */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-medium gap-[20px] md:gap-[28px] lg:gap-[35px]">
            {/* Row 1 */}
            <SkillCard
              icon={assets.history}
              title="Skills Decay"
              description={`every 2-3 years\nfaster for technical skills`}
            />

            <SkillCard
              icon={assets.accountTree}
              title="Manager Role Shift"
              description={`orchestrating\npeople + AI agents`}
            />

            <SkillCard
              icon={assets.analytics}
              title="Leaders + AI Co-Pilots"
              description={`requires sensemaking\nand systems thinking`}
            />

            {/* Row 2 */}
            <SkillCard
              icon={assets.verifiedUser}
              title="Frontline Capability"
              description={`now depends\non digital fluency`}
            />

            <SkillCard
              icon={assets.flowsheet}
              title="Core Human Capabilities"
              description={`analytical reasoning\nand scenario planning`}
            />

            <SkillCard
              icon={assets.rocketLaunch}
              title="Winning Organizations"
              description={`predict skills\nahead of demand`}
            />
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section
        className="w-full max-w-[1440px] mx-auto py-[30px] md:py-[38px] lg:py-[45px] relative"
        style={{
          background: "linear-gradient(180deg, #1d4df4 0%, #112d8e 100%)",
        }}
      >
        {/* Section Title */}
        <h2 className="px-[20px] md:px-[50px] lg:px-[100px] font-black text-[28px] md:text-[34px] lg:text-[40px] text-[#f5ab40] leading-normal mb-[30px] md:mb-[40px] lg:mb-[50px]">
          Featured Speakers
        </h2>

        <div className="px-[20px] md:px-[50px] lg:px-[100px] space-y-[30px] md:space-y-[38px] lg:space-y-[45px]">
          {/* Speaker 1: Rob Lauber */}
          <SpeakerCard
            name="Rob Lauber"
            image={assets.robLauber}
            bio="Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
          />

          {/* Speaker 2: Krishna Kumar */}
          <SpeakerCard
            name="Krishna Kumar"
            image={assets.krishnaKumar}
            bio="Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today."
          />

          {/* Speaker 3: Sudipto Mitra */}
          <SpeakerCard
            name="Sudipto Mitra"
            image={assets.sudiptoMitra}
            bio="Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion."
          />
        </div>

        {/* Additional Expert Perspectives */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px] mt-[30px] md:mt-[38px] lg:mt-[45px]">
          <div className="w-full max-w-full lg:max-w-[1240px] h-auto min-h-[180px] md:h-[200px] lg:h-[224px] rounded-[8px] overflow-hidden relative">
            <Image
              src={assets.patternBg}
              alt=""
              fill
              className="object-cover scale-y-[-1]"
            />
            <div className="relative z-10 pl-[30px] md:pl-[58px] lg:pl-[86px] pt-[24px] md:pt-[30px] lg:pt-[36px] pr-[20px] md:pr-[30px] pb-[20px]">
              <h3 className="font-black text-[22px] md:text-[26px] lg:text-[30px] text-[#0ff] leading-normal mb-[10px] md:mb-[12px]">
                Additional Expert Perspectives
              </h3>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] text-white font-medium leading-[26px] md:leading-[30px] lg:leading-[35px] max-w-full lg:max-w-[1046px]">
                Invited experts from leading consulting and enterprise learning
                organizations will contribute short perspectives, offering
                insight into how large organizations are evolving skills and
                leadership models in the AI era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Image - Shows first on mobile, second on desktop */}
          <div className="w-full lg:w-[450px] h-[300px] lg:h-auto relative flex-shrink-0 overflow-hidden lg:order-2">
            <Image
              src={assets.insightsBg}
              alt="AI and technology visualization"
              width={450}
              height={450}
              className="object-cover object-center w-full h-full scale-110"
            />
          </div>
          
          {/* Content - Shows second on mobile, first on desktop */}
          <div className="flex-1 px-[20px] md:px-[50px] lg:pl-[70px] lg:pr-[70px] py-[35px] md:py-[45px] lg:py-[55px] lg:order-1">
            {/* Title */}
            <h2 className="font-black text-[26px] md:text-[33px] lg:text-[40px] text-[#f5ab40] leading-normal mb-[25px] md:mb-[33px] lg:mb-[40px]">
              Go behind the curtain with real examples and high-scale insights
            </h2>

            {/* "You'll walk away with:" */}
            <div className="lg:pl-[50px]">
              <p className="text-[18px] md:text-[21px] lg:text-[25px] text-black font-medium mb-[15px] md:mb-[18px] lg:mb-[20px]">
                You&apos;ll walk away with:
              </p>

              {/* Takeaway Items with orange bars */}
              <div className="space-y-[15px] md:space-y-[18px] lg:space-y-[20px]">
                {takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-[12px] md:gap-[14px] lg:gap-[15px]">
                    <div className="w-[3px] md:w-[3.5px] lg:w-[4px] h-[40px] md:h-[45px] lg:h-[50px] bg-[#f5ab40] flex-shrink-0" />
                    <p className="text-[15px] md:text-[16px] lg:text-[18px] text-black font-medium leading-[22px] md:leading-[24px] lg:leading-[26px]">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Form at bottom */}
        <div className="px-[20px] md:px-[50px] lg:px-[100px] pb-[35px] md:pb-[45px] lg:pb-[55px]">
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-[10px] md:gap-[20px] lg:gap-[25px] max-w-full lg:max-w-[900px]">
            {/* Email Input */}
            <div className="relative w-full md:flex-1 h-[50px] md:h-[68px] lg:h-[70px]">
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="w-full h-full px-[15px] md:px-[20px] pl-[46px] md:pl-[53px] lg:pl-[55px] text-[13px] md:text-[15.5px] lg:text-[16px] text-gray-500 border-2 border-gray-300 md:border rounded-[8px] focus:outline-none focus:border-[#f5ab40]"
              />
              {/* Email Icon */}
              <svg
                className="absolute left-[14px] md:left-[17px] lg:left-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px] text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* RSVP Button */}
            <a
              href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
              className="inline-flex md:w-[200px] lg:w-[250px] h-[50px] md:h-[68px] lg:h-[70px] px-[40px] rounded-[8px] items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors flex-shrink-0"
            >
              <span className="font-bold text-[17px] md:text-[22px] lg:text-[24px] text-white">RSVP Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Event Agenda Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-[#0ff] py-[30px] md:py-[40px] lg:py-[50px] relative">
        {/* Section Title */}
        <h2 className="px-[20px] md:px-[50px] lg:px-[100px] font-black text-[28px] md:text-[34px] lg:text-[40px] text-[#1d4df4] leading-normal mb-[25px] md:mb-[33px] lg:mb-[40px]">
          Event Agenda
        </h2>

        {/* Cards Grid */}
        <div className="px-[20px] md:px-[45px] lg:px-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[28px] lg:gap-[35px]">
            <AgendaCard
              title="Welcome & Opening"
              speaker="Sudipto Mitra, CRO Simplilearn"
              description="Why capability-building is now a board-level issue and what's changing in the workforce landscape."
            />

            <AgendaCard
              title={`Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground`}
              speaker="Rob Lauber, Former CLO McDonald's"
              description="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
            />

            <AgendaCard
              title="Lunch & Executive Conversation"
              speaker="Industry Experts Invited"
              description="What large enterprise talent ecosystems are learning about capability-building at scale."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA Section with Background */}
      <section className="w-full max-w-[1440px] mx-auto relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={assets.footerBg} 
            alt="" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        </div>

        <div className="relative z-10">
          {/* RSVP Section */}
          <div className="px-[20px] md:px-[50px] lg:px-[100px] pt-[30px] md:pt-[55px] lg:pt-[70px] pb-[20px] md:pb-[40px] lg:pb-[50px]">
            {/* "Space is limited." */}
            <p className="font-black text-[20px] md:text-[31px] lg:text-[36px] text-white leading-normal mb-[18px] md:mb-[33px] lg:mb-[40px]">
              Space is limited.
            </p>

            {/* RSVP Form - Input and Button */}
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-[10px] md:gap-[20px] lg:gap-[25px] max-w-full lg:max-w-[1000px]">
              {/* Email Input */}
              <div className="relative w-full md:flex-1 h-[50px] md:h-[72px] lg:h-[75px]">
                <input
                  type="email"
                  placeholder="Enter your work email to confirm your attendance"
                  className="w-full h-full px-[15px] md:px-[20px] pl-[46px] md:pl-[58px] lg:pl-[60px] text-[13px] md:text-[17px] lg:text-[18px] font-normal text-gray-600 bg-white border-2 border-gray-300 md:border-none rounded-[8px] focus:outline-none"
                />
                {/* Email Icon */}
                <svg 
                  className="absolute left-[14px] md:left-[20px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px] text-gray-400"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* RSVP Button */}
              <a
                href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
                className="inline-flex md:w-[200px] lg:w-[250px] h-[50px] md:h-[72px] lg:h-[75px] px-[40px] rounded-[8px] items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors flex-shrink-0"
              >
                <span className="font-bold text-[17px] md:text-[24px] lg:text-[26px] text-white">RSVP Now</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[25px] md:py-[33px] lg:py-[40px]">
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-[15px] md:gap-[30px]">
              {/* Logo */}
              <div className="w-[140px] md:w-[210px] lg:w-[240px] h-[44px] md:h-[66px] lg:h-[75px] relative">
                <Image
                  src={assets.logo}
                  alt="Simplilearn"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Copyright */}
              <p className="font-normal text-[12px] md:text-[16px] lg:text-[18px] text-white text-left md:text-right">
                © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
