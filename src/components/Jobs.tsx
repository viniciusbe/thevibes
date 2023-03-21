import styles from '@/styles/Jobs.module.css'

const companies = [
  {
    id: 'sizebay',
    role: 'Frontend Developer',
    name: 'Sizebay',
    link: 'https://sizebay.com/en/',
    from: '2021-07-26',
    to: '2023-01-31',
    activities: [
      'Maintaining and creating functionalities of the existing system, used to manage customer data',
      'Developing a new system focused on user experience, which raised the customer service model from high touch to low touch, reducing implementation time from days to minutes. I had the opportunity to work with Storybook, Jest and React Testing Library',
      'Developing the integration application with e-commerce platforms such as Shopify, Nuvemshop and WBUY. I had the opportunity to implement tests with Cypress and monitoring with Sentry.',
    ],
  },
  {
    id: 'planoViver',
    role: 'Frontend Developer',
    name: 'Plano Viver',
    link: 'https://www.planoviver.com.br/',
    from: '2021-04-14',
    to: '2021-07-14',
    activities: [
      'Creating and maintaining functionalities for the internally developed ERP',
      'Analyzing processes to detect points of improvement',
    ],
  },
]

export default function Jobs() {
  const formatDateString = (stringDate: string) => {
    return new Date(stringDate).toLocaleDateString()
  }
  return (
    <section className={styles.section} id="jobs">
      <h1>Jobs and Skills</h1>

      <div>
        {companies.map((company) => (
          <div key={company.id} className={styles.job}>
            <h2>{company.role}</h2>
            <a href={company.link} target="_blank" rel="noopener noreferrer">
              <p>{company.name}</p>
            </a>
            <p>
              {formatDateString(company.from)} - {formatDateString(company.to)}
            </p>

            <ul>
              {company.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
