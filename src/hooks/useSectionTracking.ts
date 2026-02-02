import { useEffect } from 'react'
import posthog from 'posthog-js'

export const useSectionTracking = (sectionIds: string[]) => {
  useEffect(() => {
    // 1. Setup the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is visible in the viewport
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('id')

            /// 2. Send the custom event to PostHog
            // 'section_viewed' is our custom event name
            posthog.capture('section_viewed', {
              section: sectionName,
            })

            // Track unique views once per session
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    )

    // 3. Observe the DOM elements
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // 4. Cleanup on unmount
    return () => observer.disconnect()
  }, [sectionIds])
}
