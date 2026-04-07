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
    image: '/images/team/martin-bucko.jpg',
  },
  {
    name: 'Niclas Melin',
    role: 'Business Developer',
    phone: '+46 705752219',
    image: '/images/team/niclas-melin.jpg',
  },
  {
    name: 'Samuel Hokkanen',
    role: 'Business Developer',
    phone: '+46 703994060',
    image: '/images/team/samuel-hokkanen.jpg',
  },
]
