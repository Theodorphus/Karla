export interface TeamMember {
  name: string
  role: string
  phone?: string
  image?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Martin Bucko',
    role: 'Ägare',
    image: '/images/Martin11.png',
  },
  {
    name: 'Niclas Melin',
    role: 'Business Developer',
    phone: '+46 705752219',
    image: '/images/Niclas12.png',
  },
]
