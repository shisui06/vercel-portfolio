import { Timeline } from "@/components/ui/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "ADT 2016 - 2024",
      content: (
        <div>
          <p className="text-white text-5xl md:text-sm font-normal mb-8">
            - Diagnostiquer les problèmes avec le système d'alarme ainsi que les produits d'automatisation 
          </p>
          <p className="text-white text-xl md:text-sm font-normal mb-8">
            - Résoudre le problème le plus rapidement possible et offrir une expérience client extraordinaire 
            
            - Prendre rendez-vous pour les techniciens sur la route

          </p>
          <p>
          - Travailler efficacement et en étroite collaboration avec plusieurs services et faire preuve de leadership 
          </p>
         
        </div>
      ),
    },
    {
      title: "Garderie Educative Joliette ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of
            beautiful designs I built.
          </p>
        
        </div>
      ),
    },
    {
      title: "Bestbuy",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

