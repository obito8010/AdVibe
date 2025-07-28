import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

interface TestimonialSlideProps {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

const TestimonialSlide = ({
  name,
  role,
  avatar,
  content,
  rating
}: TestimonialSlideProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-6">
        <Image
          className="w-12 h-12 rounded-full object-cover mr-4"
          src={avatar}
          alt={`${name} avatar`}
          width={48}
          height={48}
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlide
