import Link from 'next/link'
import Button from './Button'
import Container from '@/components/Container'


const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">AdVibe</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Try for Free
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header