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
      <section className="relative h-[693px] w-full max-w-[1440px] mx-auto overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={assets.heroBg}
            alt=""
            fill
            className="object-cover rotate-180"
            style={{ filter: "blur(0.5px) contrast(1.8)" }}
            priority
          />
        </div>

        {/* Black overlay at 40% opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000040] to-[#020202] opacity-60" />

        {/* Content Container */}
        <div className="relative z-10 h-full">
          {/* Logo - Position: left:100px top:55px */}
          <div className="absolute left-[100px] top-[55px] w-[300px] h-[100px]">
            <Image
              src={assets.logo}
              alt="Simplilearn"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Invite-Only Badge and Text Container */}
          <div className="absolute left-[100px] top-[245px] flex items-center gap-[12px]">
            {/* Invite-Only Badge */}
            <div className="bg-[#00FFFF] rounded-[6px] px-[16px] py-[12px] flex items-center justify-center">
              <span className="font-bold text-[25px] text-[#25286A] leading-none">
                Invite-Only
              </span>
            </div>

            {/* Executive Roundtable Text */}
            <span className="font-bold text-[24px] text-[#00FFFF] leading-none">
              An Executive Roundtable · Lunch
            </span>
          </div>

          {/* Main Title - Position: left:100px top:325px */}
          <div className="absolute left-[100px] top-[325px] max-w-[900px]">
            <h1 className="leading-[1.15]">
              <span className="block font-black text-[48px] text-[#F5AB40]">
                The Skills That Matter Next:
              </span>
              <span className="block font-medium text-[48px] text-[#F5AB40] mt-[8px]">
                Preparing Your Workforce
              </span>
              <span className="block font-medium text-[48px] text-[#F5AB40]">
                & Leaders for the AI Era
              </span>
            </h1>
          </div>

          {/* Date - Position: left:100px top:545px */}
          <div className="absolute left-[100px] top-[545px] flex items-center gap-[16px]">
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3ZM19 21H5V10H19V21ZM19 8H5V5H19V8Z"
                fill="white"
              />
            </svg>
            <span className="font-black text-[30px] text-white leading-none">
              February 20, 2026
            </span>
          </div>

          {/* Location - Position: left:100px top:605px */}
          <div className="absolute left-[100px] top-[605px] flex items-center gap-[16px]">
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z"
                fill="white"
              />
            </svg>
            <span className="font-black text-[30px] text-white leading-none">
              Chamberlain's Steak & Fish House, Dallas
            </span>
          </div>
        </div>
      </section>

      {/* RSVP Section - After Hero */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[50px] pb-[20px]">
        <div className="px-[100px]">
          {/* RSVP Form - Input and Button */}
          <div className="flex items-center gap-[25px]">
            {/* Email Input */}
            <div className="relative w-[600px] h-[80px]">
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="w-full h-full px-[20px] pl-[60px] text-[18px] font-normal text-gray-600 border-2 border-gray-300 rounded-[8px] focus:outline-none focus:border-[#f5ab40]"
              />
              {/* Email Icon */}
              <svg
                className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-gray-400"
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
              className="w-[250px] h-[80px] rounded-[8px] flex items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors"
            >
              <span className="font-bold text-[28px] text-white">RSVP Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[40px] pb-[50px]">
        {/* First paragraph - Position: left:100px, Width: 1240px */}
        <div className="px-[100px]">
          <p className="text-[27px] leading-[40px] text-black font-medium max-w-[1240px]">
            AI is accelerating change across every operational layer. Roles are
            shifting. Leadership models are collapsing and reforming. Frontline
            and mid-level managers will soon lead teams of people and
            intelligent agents.
          </p>

          <p className="text-[27px] leading-[40px] text-black font-medium mt-[30px] max-w-[1240px]">
            But even the most advanced enterprises are asking the same question:
          </p>
        </div>

        {/* Highlighted Question - Centered */}
        <div className="px-[100px] mt-[45px]">
          <p className="font-black text-[35px] text-black text-center leading-[50px] max-w-[1000px] mx-auto">
            Which capabilities will matter most,
            <br />
            and how do we build them at scale?
          </p>
        </div>

        {/* Second paragraph */}
        <div className="px-[100px] mt-[45px]">
          <p className="text-[27px] leading-[40px] text-black font-medium max-w-[1240px]">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise
            workforce leaders for a candid, senior-level discussion on
            what&apos;s coming next.
          </p>
        </div>
      </section>

      {/* What We'll Explore Section - Height: 620px */}
      <section className="w-full max-w-[1440px] mx-auto bg-[#E8EFFF] py-[40px] relative">
        <div className="px-[100px]">
          <h2 className="font-black text-[40px] text-[#f5ab40] leading-normal mb-[20px]">
            What We&apos;ll Explore
          </h2>

          <p className="text-[25px] text-black font-medium max-w-[1240px] mb-[35px]">
            The critical shifts every enterprise must plan for:
          </p>
        </div>

        {/* Cards Grid - 3x2 layout */}
        <div className="px-[100px]">
          <div className="grid grid-cols-3 font-medium gap-[35px]">
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
        className="w-full max-w-[1440px] mx-auto py-[45px] relative"
        style={{
          background: "linear-gradient(180deg, #1d4df4 0%, #112d8e 100%)",
        }}
      >
        {/* Section Title */}
        <h2 className="px-[100px] font-black text-[40px] text-[#f5ab40] leading-normal mb-[50px]">
          Featured Speakers
        </h2>

        <div className="px-[100px] space-y-[45px]">
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
        <div className="px-[100px] mt-[45px]">
          <div className="w-full max-w-[1240px] h-[224px] rounded-[8px] overflow-hidden relative">
            <Image
              src={assets.patternBg}
              alt=""
              fill
              className="object-cover scale-y-[-1]"
            />
            <div className="relative z-10 pl-[86px] pt-[36px]">
              <h3 className="font-black text-[30px] text-[#0ff] leading-normal mb-[12px]">
                Additional Expert Perspectives
              </h3>
              <p className="text-[24px] text-white font-medium leading-[35px] max-w-[1046px]">
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
        <div className="flex items-stretch">
          {/* Left Content */}
          <div className="flex-1 pl-[70px] pr-[70px] py-[55px]">
            {/* Title */}
            <h2 className="font-black text-[40px] text-[#f5ab40] leading-normal mb-[40px]">
              Go behind the curtain with real examples and high-scale insights
            </h2>

            {/* "You'll walk away with:" */}
            <div className="pl-[50px]">
              <p className="text-[25px] text-black font-medium mb-[20px]">
                You&apos;ll walk away with:
              </p>

              {/* Takeaway Items with orange bars */}
              <div className="space-y-[20px]">
                {takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-[15px]">
                    <div className="w-[4px] h-[50px] bg-[#f5ab40] flex-shrink-0" />
                    <p className="text-[18px] text-black font-medium leading-[26px]">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Image - Fixed width, full height */}
          <div className="w-[450px] relative flex-shrink-0 overflow-hidden">
            <Image
              src={assets.insightsBg}
              alt="AI and technology visualization"
              width={450}
              height={450}
              className="object-cover object-center w-full h-full scale-110"
            />
          </div>
        </div>

        {/* RSVP Form at bottom */}
        <div className="px-[100px] pb-[55px]">
          <div className="flex items-center gap-[25px] max-w-[900px]">
            {/* Email Input */}
            <div className="relative flex-1 h-[70px]">
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="w-full h-full px-[20px] pl-[55px] text-[16px] text-gray-500 border border-gray-300 rounded-[8px] focus:outline-none focus:border-[#f5ab40]"
              />
              {/* Email Icon */}
              <svg
                className="absolute left-[18px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-gray-400"
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
              className="w-[250px] h-[70px] rounded-[8px] flex items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors flex-shrink-0"
            >
              <span className="font-bold text-[24px] text-white">RSVP Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Event Agenda Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-[#0ff] py-[50px] relative">
        {/* Section Title */}
        <h2 className="px-[100px] font-black text-[40px] text-[#1d4df4] leading-normal mb-[40px]">
          Event Agenda
        </h2>

        {/* Cards Grid */}
        <div className="px-[90px]">
          <div className="grid grid-cols-3 gap-[35px]">
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
          <div className="px-[100px] pt-[70px] pb-[50px]">
            {/* "Space is limited." */}
            <p className="font-black text-[36px] text-white leading-normal mb-[40px]">
              Space is limited.
            </p>

            {/* RSVP Form - Input and Button */}
            <div className="flex items-center gap-[25px] max-w-[1000px]">
              {/* Email Input */}
              <div className="relative flex-1 h-[75px]">
                <input
                  type="email"
                  placeholder="Enter your work email to confirm your attendance"
                  className="w-full h-full px-[20px] pl-[60px] text-[18px] font-normal text-gray-600 bg-white border-none rounded-[8px] focus:outline-none"
                />
                {/* Email Icon */}
                <svg 
                  className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] text-gray-400"
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
                className="w-[250px] h-[75px] rounded-[8px] flex items-center justify-center bg-[#f5ab40] hover:bg-[#e09a35] transition-colors flex-shrink-0"
              >
                <span className="font-bold text-[26px] text-white">RSVP Now</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-[100px] py-[40px]">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="w-[240px] h-[75px] relative">
                <Image
                  src={assets.logo}
                  alt="Simplilearn"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Copyright */}
              <p className="font-normal text-[18px] text-white">
                © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
