import Image from 'next/image';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-[30px] h-full flex flex-col">
      {/* Icon and Title Row */}
      <div className="flex items-center gap-[20px] mb-[20px]">
        {/* Icon - Size: 48x48 */}
        <div className="w-[48px] h-[48px] flex-shrink-0">
          <Image src={icon} alt="" width={48} height={48} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(3629%) hue-rotate(226deg) brightness(98%) contrast(101%)' }} />
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-[24px] text-black leading-[28px]">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <div className="flex-1">
        <p className="text-[20px] text-black leading-[28px] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
