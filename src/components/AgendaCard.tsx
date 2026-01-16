interface AgendaCardProps {
  title: string;
  speaker: string;
  description: string;
}

export default function AgendaCard({ title, speaker, description }: AgendaCardProps) {
  return (
    <div className="bg-white rounded-[8px] overflow-hidden h-full py-[30px] pl-[30px] pr-[10px] flex flex-col">
      {/* Title - Fixed height to align across cards */}
      <div className="h-[120px]">
        <h3 className="font-extrabold text-[22px] text-[#1d4df4] leading-[32px] whitespace-pre-line">
          {title}
        </h3>
      </div>
      
      {/* Speaker - Fixed height to align across cards */}
      <div className="h-[50px]">
        <p className="font-bold text-[18px] text-black leading-[26px]">
          {speaker}
        </p>
      </div>
      
      {/* Description */}
      <p className="font-medium text-[18px] text-black leading-[26px]">
        {description}
      </p>
    </div>
  );
}
