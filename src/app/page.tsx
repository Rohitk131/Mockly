import MainName from "@/components/Heading";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import{Iphone14Pro,Iphone15Pro,IphoneSE2023,IpadPro, Pixel2, IPhoneSE, Macbook} from "@/components/mockups";
import Card from "@/components/Card";
import CreateButton from '../components/createButton'
export default function App() {
  return (
    <div className="relative flex h-auto w-autooverflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 z-0"
        )}
      />

      {/* Main Content */}
      <div className="relative flex flex-col z-10 h-full w-full">
        {/* MainName centered at the top */}
        <div className="flex justify-center mt-8 mb-12">
          <MainName />
        </div>

        {/* Card and iPhone container */}
        <div className="flex-grow flex justify-between items-center px-20 pb-5">
          {/* Left side: Card */}
          <div className="w-1/2">
            <Card />
          </div>

          {/* Center: Empty space */}
         

          {/* Right side: iPhone */}
          <div className=" flex justify-end">
            <Macbook/>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <CreateButton />
      </div>
    </div>
  );
}