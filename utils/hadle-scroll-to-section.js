export const handleScrollToSection = (sectionId) => {
  const yOffset = -50 // Set this to the height of your navbar, or any other offset you need
  const element = document.getElementById(sectionId)
  const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}
