import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'AdVibe - Launch ads 10x faster with AI',
    template: '%s | AdVibe'
  },
  description: 'From strategy to execution - AI-powered marketing platform',
  keywords: [
    'AI ads',
    'marketing automation',
    'ad optimization',
    'digital marketing',
    'AI marketing'
  ],
  openGraph: {
    title: 'AdVibe - Launch ads 10x faster with AI',
    description: 'From strategy to execution - AI-powered marketing platform',
    url: 'https://advibe.example.com',
    siteName: 'AdVibe',
    images: [
      {
        url: 'https://advibe.example.com/og-image.jpg',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdVibe - Launch ads 10x faster with AI',
    description: 'From strategy to execution - AI-powered marketing platform',
    images: ['https://advibe.example.com/og-image.jpg']
  }
}