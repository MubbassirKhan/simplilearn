import Image from 'next/image';
import SkillCard from '@/components/SkillCard';
import SpeakerCard from '@/components/SpeakerCard';
import AgendaCard from '@/components/AgendaCard';
import { assets } from '@/lib/assets';

export default function Home() {
  const takeaways = [
    'A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.',
    "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
    'Signals for where capability gaps may already be forming in your organization.',
    'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
    'Actionable insights you can take straight into your next exec meeting.',
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section - Height: 693px */}
      <section className="relative h-[693px] w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Background Image with Blur and Rotation */}
        <div className="absolute inset-0 w-[1440px] h-[693px] rotate-180 blur-[0.5px]">
          <Image
            src={assets.heroBg}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'linear-gradient(-57.44deg, rgba(28, 78, 241, 0.45) 11.1%, rgba(26, 60, 182, 0.45) 106.32%)'
            }}
          />
        </div>
        
        {/* Bottom Gradient Overlay */}
        <div 
          className="absolute left-0 top-[375px] w-[1440px] h-[503px]"
          style={{ 
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 53.2%, rgba(0,0,0,0.6) 128%)'
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full">
          {/* Logo - Position: left:130px top:55px, Size: 280x86 */}
          <div className="absolute left-[130px] top-[80px] w-[280px] h-[86px]">
            <Image
              src={assets.logo}
              alt="Simplilearn"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Invite-Only Badge - Position: left:130px top:220px, Size: 174x56 */}
          <div className="absolute left-[130px] top-[220px] bg-[#0ff] rounded-[6px] w-[174px] h-[56px] flex items-center justify-center">
            <span className="font-bold text-[25px] text-[#25286a] leading-none">Invite-Only</span>
          </div>
          
          {/* Executive Roundtable Text - Position: left after badge */}
          <div className="absolute left-[316px] top-[220px] h-[56px] flex items-center">
            <span className="font-bold text-[24px] text-[#0ff] leading-none">An Executive Roundtable · Lunch</span>
          </div>
          
          {/* Main Title - Position: left:130px top:300px, Width: 771px */}
          <div className="absolute left-[130px] top-[300px] w-[771px]">
            <h1 className="text-[46px] text-[#f5ab40] leading-[1.2]">
              <span className="font-black">The Skills That Matter Next:</span>
              <br />
              <span className="font-medium">Preparing Your Workforce</span>
              <br />
              <span className="font-medium">& Leaders for the AI Era</span>
            </h1>
          </div>
          
          {/* Date - Position: left:130px top:520px */}
          <div className="absolute left-[130px] top-[520px] flex items-center gap-[20px]">
            <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3ZM19 21H5V10H19V21ZM19 8H5V5H19V8Z" fill="white"/>
            </svg>
            <span className="font-black text-[30px] text-white leading-none">February 20, 2026</span>
          </div>
          
          {/* Location - Position: left:130px top:575px */}
          <div className="absolute left-[130px] top-[575px] flex items-center gap-[20px]">
            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5Z" fill="white"/>
            </svg>
            <span className="font-black text-[30px] text-white leading-none">Chamberlain's Steak & Fish House, Dallas</span>
          </div>
        </div>
      </section>

      {/* RSVP Section - After Hero */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[58px]">
        <div className="pl-[100px]">
          {/* RSVP Text */}
          <p className="text-[28px] leading-[25px] text-black mb-[8px]">
            <span className="font-medium">You may RSVP by emailing </span>
            <span className="font-black">siham.aba@simplilearn.net</span>
          </p>
          <p className="text-[28px] leading-normal text-black font-medium">
            or by clicking the button below to send your confirmation.
          </p>
          
          {/* RSVP Button */}
          <a 
            href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
            className="mt-[30px] w-[375px] h-[80px] rounded-[8px] flex items-center justify-center"
            style={{ background: 'linear-gradient(to right, rgba(245, 171, 64, 0.9), #f5ab40)' }}
          >
            <span className="font-bold text-[29px] text-white">SEND RSVP EMAIL</span>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white pt-[50px] pb-[40px]">
        {/* First paragraph - Position: left:100px, Width: 1240px */}
        <div className="px-[100px]">
          <p className="text-[27px] leading-[39px] text-black font-medium max-w-[1240px]">
            AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
          </p>
          <p className="text-[27px] leading-[39px] text-black font-medium mt-[39px]">
            But even the most advanced enterprises are asking the same question:
          </p>
        </div>
        
        {/* Highlighted Question - Width: 703px centered */}
        <p className="font-black text-[40px] text-black text-center max-w-[703px] mx-auto mt-[89px]">
          Which capabilities will matter most, and how do we build them at scale?
        </p>
        
        {/* Second paragraph - Position: left:99px, Width: 1241px */}
        <div className="px-[99px] mt-[69px]">
          <p className="text-[27px] leading-[39px] text-black font-medium max-w-[1241px]">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what&apos;s coming next.
          </p>
        </div>
      </section>

      {/* What We'll Explore Section - Height: 665px */}
      <section className="w-full max-w-[1440px] mx-auto bg-[rgba(205,220,251,0.5)] h-[665px] relative">
        <div className="absolute left-[104px] top-[43px]">
          <h2 className="font-black text-[40px] text-[#f5ab40] leading-normal">
            What We&apos;ll Explore
          </h2>
        </div>
        
        <p className="absolute left-[104px] top-[124px] text-[25px] text-black font-medium max-w-[1240px]">
          The critical shifts every enterprise must plan for:
        </p>
        
        {/* Cards Grid - 3x2 layout */}
        {/* Row 1 */}
        <div className="absolute left-[104px] top-[184px]">
          <SkillCard 
            icon={assets.history}
            title="Skills Decay"
            description={`every 2-3 years\nfaster for technical skills`}
          />
        </div>
        
        <div className="absolute left-[528px] top-[184px]">
          <SkillCard 
            icon={assets.accountTree}
            title="Manager Role Shift"
            description={`orchestrating\npeople + AI agents`}
          />
        </div>
        
        <div className="absolute left-[951px] top-[184px]">
          <SkillCard 
            icon={assets.analytics}
            title="Leaders + AI Co-Pilots"
            description={`requires sensemaking\nand systems thinking`}
          />
        </div>
        
        {/* Row 2 */}
        <div className="absolute left-[104px] top-[410px]">
          <SkillCard 
            icon={assets.verifiedUser}
            title="Frontline Capability"
            description={`now depends\non digital fluency`}
          />
        </div>
        
        <div className="absolute left-[528px] top-[410px]">
          <SkillCard 
            icon={assets.flowsheet}
            title="Core Human Capabilities"
            description={`analytical reasoning\nand scenario planning`}
          />
        </div>
        
        <div className="absolute left-[951px] top-[410px]">
          <SkillCard 
            icon={assets.rocketLaunch}
            title="Winning Organizations"
            description={`predict skills\nahead of demand`}
          />
        </div>
      </section>

      {/* Featured Speakers Section - Height: 1564px */}
      <section 
        className="w-full max-w-[1440px] mx-auto h-[1564px] relative"
        style={{ background: 'linear-gradient(180deg, #1d4df4 0%, #112d8e 100%)' }}
      >
        {/* Section Title */}
        <h2 className="absolute left-[100px] top-[44px] font-black text-[40px] text-[#f5ab40] leading-normal">
          Featured Speakers
        </h2>
        
        {/* Speaker 1: Rob Lauber */}
        <div className="absolute left-[100px] top-[150px]">
          <SpeakerCard 
            name="Rob Lauber"
            image={assets.robLauber}
            bio="Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
          />
        </div>
        
        {/* Speaker 2: Krishna Kumar */}
        <div className="absolute left-[100px] top-[527px]">
          <SpeakerCard 
            name="Krishna Kumar"
            image={assets.krishnaKumar}
            bio="Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today."
          />
        </div>
        
        {/* Speaker 3: Sudipto Mitra */}
        <div className="absolute left-[100px] top-[904px]">
          <SpeakerCard 
            name="Sudipto Mitra"
            image={assets.sudiptoMitra}
            bio="Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion."
          />
        </div>
        
        {/* Additional Expert Perspectives - Size: 1240x224 */}
        <div className="absolute left-[100px] top-[1273px] w-[1240px] h-[224px] rounded-[8px] overflow-hidden">
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
              Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white relative min-h-[800px]">
        <div className="flex">
          {/* Left Content */}
          <div className="w-[770px] pl-[107px] pt-[58px] pb-[100px]">
            {/* Title */}
            <h2 className="font-black text-[40px] text-[#f5ab40] leading-normal max-w-[687px] mb-[92px]">
              Go behind the curtain with real examples and high-scale insights
            </h2>
            
            {/* "You'll walk away with:" */}
            <p className="text-[25px] text-black font-medium mb-[12px]">
              You&apos;ll walk away with:
            </p>
            
            {/* Takeaway Items with orange bars */}
            <div className="space-y-[30px] pl-[32px]">
              {takeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-[29px]">
                  <div className="w-[3px] h-[59px] bg-[#f5ab40] flex-shrink-0" />
                  <p className="text-[20px] text-black font-medium leading-[30px] max-w-[801px]">{takeaway}</p>
                </div>
              ))}
            </div>
            
            {/* RSVP Button */}
            <div className="mt-[77px]">
              <a 
                href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
                className="inline-block bg-[#f5ab40] hover:bg-[#e09a35] transition-colors text-white font-bold text-[24px] px-[40px] py-[18px] rounded-[8px]"
              >
                SEND RSVP EMAIL
              </a>
            </div>
          </div>
          
          {/* Right Image - Size: 570x611 */}
          <div className="absolute right-[0px] top-[64px] w-[570px] h-[611px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <Image
              src={assets.insightsBg}
              alt="AI and technology visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Event Agenda Section - Height: 616px */}
      <section className="w-full max-w-[1440px] mx-auto bg-[#0ff] h-[616px] relative">
        {/* Section Title */}
        <h2 className="absolute left-[104px] top-[60px] font-black text-[40px] text-[#1d4df4] leading-normal">
          Event Agenda
        </h2>
        
        {/* Card 1 - Size: 390x376 */}
        <div className="absolute left-[104px] top-[145px]">
          <AgendaCard 
            title="Welcome & Opening"
            speaker="Sudipto Mitra, CRO Simplilearn"
            description="Why capability-building is now a board-level issue and what's changing in the workforce landscape."
          />
        </div>
        
        {/* Card 2 - Size: 390x376 */}
        <div className="absolute left-[528px] top-[145px]">
          <AgendaCard 
            title={`Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground`}
            speaker="Rob Lauber, Former CLO McDonald's"
            description="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
          />
        </div>
        
        {/* Card 3 - Size: 390x376 */}
        <div className="absolute left-[951px] top-[145px]">
          <AgendaCard 
            title="Lunch & Executive Conversation"
            speaker="Industry Experts Invited"
            description="What large enterprise talent ecosystems are learning about capability-building at scale."
          />
        </div>
      </section>

      {/* Footer CTA Section - Height: ~475px */}
      <section className="w-full max-w-[1440px] mx-auto h-[475px] relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={assets.footerBg}
            alt=""
            fill
            className="object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 53.2%, rgba(0,0,0,0.6) 128%)' }}
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
        </div>
        
        <div className="relative z-10">
          {/* "Space is limited." */}
          <p className="absolute left-[102px] top-[46px] font-black text-[30px] text-white leading-normal">
            Space is limited.
          </p>
          
          {/* RSVP Button */}
          <div className="absolute left-[104px] top-[124px]">
            <a 
              href="mailto:siham.aba@simplilearn.net?subject=RSVP%20for%20Simplilearn%20Dallas%20Round%20Table&body=I%20would%20like%20to%20confirm%20my%20attendance%20at%20the%20Simplilearn%20Dallas%20Round%20Table%20event%20on%20February%2020%2C%202026."
              className="inline-block bg-[#f5ab40] hover:bg-[#e09a35] transition-colors text-white font-bold text-[24px] px-[40px] py-[18px] rounded-[8px]"
            >
              SEND RSVP EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Height: 142px */}
      <footer className="w-full max-w-[1440px] mx-auto bg-[#112d8e] h-[142px] relative">
        {/* Logo - Size: 280x86 */}
        <div className="absolute left-[93px] top-[28px] w-[280px] h-[86px]">
          <Image
            src={assets.logo}
            alt="Simplilearn"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Copyright */}
        <p className="absolute right-[88px] top-[53px] font-medium text-[20px] text-white tracking-[0.4px]">
          © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
