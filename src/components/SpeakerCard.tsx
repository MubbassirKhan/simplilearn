import Image from 'next/image';

interface SpeakerCardProps {
  name: string;
  image: string;
  bio: string;
}

export default function SpeakerCard({ name, image, bio }: SpeakerCardProps) {
  return (
    <div className="flex items-start gap-0">
      {/* Speaker Image - Size: 340x325, with mask */}
      <div className="w-[340px] h-[325px] relative rounded-[8px] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="340px"
        />
      </div>
      
      {/* Speaker Info - Offset from image */}
      <div className="ml-[58px] pt-[-8px]">
        {/* Name - Position relative to section */}
        <h3 className="font-black text-[30px] text-[#0ff] leading-normal mb-[8px]">
          {name}
        </h3>
        {/* Bio - Width: ~821px */}
        <p className="text-[24px] text-white font-medium leading-[35px] max-w-[821px]">
          {bio}
        </p>
      </div>
    </div>
  );
}
