import Image from 'next/image';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.15)] overflow-hidden w-[389px] h-[203px] relative">
      {/* Icon - Position: left:~25px top:24px, Size: 48x48 */}
      <div className="absolute left-[25px] top-[24px] w-[48px] h-[48px]">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      
      {/* Title - Position: left:~83px top:~48px (centered vertically with icon) */}
      <h3 className="absolute left-[83px] top-[29px] font-bold text-[24px] text-black leading-[30px]">
        {title}
      </h3>
      
      {/* Description - Position: left:32px top:94px (centered at 133px), Width: ~340px */}
      <div className="absolute left-[32px] top-[94px] w-[340px]">
        <p className="font-medium text-[22px] text-black leading-[30px] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
