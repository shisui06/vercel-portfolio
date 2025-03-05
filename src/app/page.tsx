import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Développeur", "Créatif", "Passionné", "Innovant"];
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* REMOVE THE NAVBAR SECTION */}
      <div className="pt-16">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
