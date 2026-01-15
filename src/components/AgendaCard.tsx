interface AgendaCardProps {
  title: string;
  speaker: string;
  description: string;
}

export default function AgendaCard({ title, speaker, description }: AgendaCardProps) {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.15)] overflow-hidden w-[390px] h-[376px] relative">
      {/* Title - Position: left:23px top:39px */}
      <h3 className="absolute left-[23px] top-[39px] font-black text-[24px] text-[#1d4df4] leading-normal max-w-[339px] whitespace-pre-line">
        {title}
      </h3>
      
      {/* Speaker & Description - Position: left:23px top:164px */}
      <div className="absolute left-[23px] top-[164px] w-[346px]">
        <p className="font-bold text-[20px] text-black leading-[30px] mb-[16px]">
          {speaker}
        </p>
        <p className="font-medium text-[20px] text-black leading-[30px]">
          {description}
        </p>
      </div>
    </div>
  );
}
