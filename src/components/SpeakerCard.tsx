import Image from 'next/image';

interface SpeakerCardProps {
  name: string;
  image: string;
  bio: string;
}

export default function SpeakerCard({ name, image, bio }: SpeakerCardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-0">
      {/* Speaker Image - Responsive size */}
      <div className="w-full md:w-[300px] lg:w-[340px] h-[280px] md:h-[300px] lg:h-[325px] relative rounded-[8px] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 300px, 340px"
        />
      </div>
      
      {/* Speaker Info - Offset from image on desktop, below on mobile */}
      <div className="lg:ml-[58px] lg:pt-[-8px]">
        {/* Name - Responsive text size */}
        <h3 className="font-black text-[22px] md:text-[26px] lg:text-[30px] text-[#0ff] leading-normal mb-[8px] md:mb-[10px] lg:mb-[8px]">
          {name}
        </h3>
        {/* Bio - Responsive text size and width */}
        <p className="text-[16px] md:text-[20px] text-center md:text-left lg:text-[24px] text-white font-medium leading-[24px] md:leading-[30px] lg:leading-[35px] max-w-full lg:max-w-[821px]">
          {bio}
        </p>
      </div>
    </div>
  );
}
