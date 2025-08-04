import '@/styles/page-styles/header.scss'

export const Header = () => {
  return (
    <div className="header">
      <img src="/src/assets/Logo.png" alt="" className="header__logo" />
      <p className="header__title">Новости</p>
    </div>
  )
}
