import { Timeline } from "@/components/ui/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "ADT",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle 2016 - 2024
          </p>
          <p className="mb-4">
            - Diagnostiquer les problèmes avec le système d'alarme ainsi que les produits d'automatisation
          </p>
          <p className="mb-4">
            - Résoudre le problème le plus rapidement possible et offrir une expérience client extraordinaire
          </p>
          <p className="mb-4">
            - Travailler efficacement et en étroite collaboration avec plusieurs services et faire preuve de leadership
          </p>
          <p>
            - Prendre rendez-vous pour les techniciens sur la route
          </p>
        </div>
      ),
    },
    {
      title: "Garderie Educative Joliette ",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle
          </p>
          <p className="mb-4">
            - Diagnostiquer les problèmes avec le système d'alarme ainsi que les produits d'automatisation
          </p>
          <p className="mb-4">
            - Résoudre le problème le plus rapidement possible et offrir une expérience client extraordinaire
          </p>
          <p className="mb-4">
            - Travailler efficacement et en étroite collaboration avec plusieurs services et faire preuve de leadership
          </p>
          <p>
            - Prendre rendez-vous pour les techniciens sur la route
          </p>
        </div>
      ),
    },
    {
      title: "Bestbuy",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle
          </p>
          <p className="mb-4">
            - Diagnostiquer les problèmes avec le système d'alarme ainsi que les produits d'automatisation
          </p>
          <p className="mb-4">
            - Résoudre le problème le plus rapidement possible et offrir une expérience client extraordinaire
          </p>
          <p className="mb-4">
            - Travailler efficacement et en étroite collaboration avec plusieurs services et faire preuve de leadership
          </p>
          <p>
            - Prendre rendez-vous pour les techniciens sur la route
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

