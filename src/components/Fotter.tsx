function Fotter() {
    const today = new Date()
    const year = today.getFullYear()
  return (
    <div>
        <p className='text'>Desenvolvido por Edson Jr &copy; {year.toString()}</p>
    </div>
  )
}

export default Fotter