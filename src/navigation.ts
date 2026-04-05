'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/articles': '/articles',
  '/articles/practicing-medicine-is-not-about-certainty': '/articles/practicing-medicine-is-not-about-certainty',
  '/articles/medical-documentation-was-never-built': '/articles/medical-documentation-was-never-built',
  '/articles/commitment-points': '/articles/commitment-points',
  '/articles/capturing-multiplanar-thinking': '/articles/capturing-multiplanar-thinking',
  '/articles/faithful-documentation': '/articles/faithful-documentation',
  '/articles/past-the-hype': '/articles/past-the-hype',
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
