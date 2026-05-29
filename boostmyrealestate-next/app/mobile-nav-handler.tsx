'use client'

import { useEffect } from 'react'

export function MobileNavHandler() {
  useEffect(() => {
    const hamburger = document.querySelector('.nav-hamburger')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav a')

    if (hamburger) {
      hamburger.addEventListener('click', function() {
        this.classList.toggle('open')
        mobileNav?.classList.toggle('open')
      })
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav?.classList.remove('open')
        hamburger?.classList.remove('open')
      })
    })
  }, [])

  return null
}
