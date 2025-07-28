import Button from './Button'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  featured: boolean
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  cta,
  featured
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: featured ? 1.03 : 1.01 }}
      className={`relative rounded-2xl border ${featured ? 'border-indigo-600 bg-white dark:bg-gray-800 shadow-xl' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm'}`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
          <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="h-5 w-5 text-indigo-600" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <Button
            variant={featured ? 'primary' : 'outline'}
            fullWidth
            size="lg"
          >
            {cta}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default PricingCard