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
      title: "Garderie Educative Joliette",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
          Adjointe Administrative 2012-2015
          </p>
          <p className="mb-4">
            - Accueillir les nouveaux parents de manière professionnelle et atteindre le taux d'occupation
          </p>
          <p className="mb-4">
            - Préparer des documents administratifs de qualité et effectuer des dépôts bancaires
          </p>
          <p className="mb-4">
            - Entretenir le bâtiment et s'assurer que les locaux sont sécuritaires et propres prêts à être inspectés
          </p>
          <p>
            - Assurer le bon fonctionnement de la garderie et mettre en œuvre un plan d'action réussi selon les normes du ministre de la Famille
          </p>
        </div>
      ),
    },
    {
      title: "Bestbuy",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle 2010-2011
          </p>
          <p className="mb-4">
            - Vendre des appareils électroniques et cellulaires
          </p>
          <p className="mb-4">
            - Aidez les gens à choisir les forfaits adaptés à leurs téléphones portables
          </p>
          <p className="mb-4">
            - Proposer les avantages apportés par l'entreprise et répondre aux objectifs de vente
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

