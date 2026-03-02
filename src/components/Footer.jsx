function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="main-footer">
      Copyright &copy; {currentYear}
    </footer>
  )
}

export default Footer
