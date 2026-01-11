import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export default function Hero({
  title = 'Welcome to MySite',
  subtitle = 'A personal portfolio and blog showcasing my projects, thoughts, and experiences.',
  ctaText = 'View My Work',
  ctaLink = '/about',
  className,
}: HeroProps) {
  return (
    <section className={cn('bg-gradient-to-r from-primary-50 to-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
