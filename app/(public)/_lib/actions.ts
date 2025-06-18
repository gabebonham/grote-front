'use client'
export function downloadCV(filename = 'Gabriel-Grote-CV.pdf') {
  const link = document.createElement('a')
  link.href = '/files/cv.pdf'
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
