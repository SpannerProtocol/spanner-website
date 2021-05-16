function useSiteUrl() {
  if (typeof window !== "undefined") {
    return window.location.href
  }
  return ''
}

export default useSiteUrl
