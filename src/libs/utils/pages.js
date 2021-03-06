const getCurrentPageUrl = () => {
  const pages = getCurrentPages() // 获取加载的页面
  const currentPage = pages[pages.length - 1] // 获取当前页面的对象
  const url = currentPage && currentPage.route // 当前页面url
  return url
}

export { getCurrentPageUrl }
