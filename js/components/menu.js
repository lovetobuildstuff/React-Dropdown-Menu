const CSSTransitionGroup = React.addons.CSSTransitionGroup;

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a href="https://jamesdlake.com">Home</a>
            </li>

            <li className="nav__menu-item">
              <a>About</a>
              <ul className="nav__submenu">
                <li className="nav__submenu-item">
                  <a href="https://jamesdlake.com">Professional Experience</a>
                </li>

                <li className="nav__submenu-item">
                  <a href="https://88f219d4-f28e-4083-af70-b9888a5beb14.usrfiles.com/ugd/88f219_586a8e496a2242169a7961526100cbad.pdf">Resume</a>
                </li>

                <li className="nav__submenu-item">
                  <a href="https://www.jamesdlake.com/portfolio">Portfolio</a>
                </li>
              </ul>
            </li>
            
            <li className="nav__menu-item">
              <a href="https://github.com/lovetobuildstuff">GitHub</a>
            </li>

            <li className="nav__menu-item">
              <a href="mailto:lovetobuildstuff@gmail.com?subject=Seen%20on%20GitHub">Email</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
};

export default Menu;