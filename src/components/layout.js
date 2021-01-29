import React from "react"
import ReactModal from "react-modal"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const [showModal, setShowModal] = React.useState(false)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <div className="main-heading">
          <h6 className="logo-h6">
            <Link to="/">{title}</Link>
          </h6>
        </div>
        {/* <div className="about-heading">
          <h6 className="about-h6">
            <Link to="/about">About</Link>
          </h6>
        </div> */}
      </>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <footer className="global-footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <strong>Neverblur</strong>
            <p>&copy; {new Date().getFullYear()} Neverblur</p>
            <strong>Contact Us</strong>
            <a href="mailto:learnillion@gmail.com">learnillion@gmail.com</a>
          </div>
          <div className="footer-content">
            <button
              className="subscribe-button"
              onClick={() => setShowModal(true)}
            >
              <p>Get Private Access</p>
            </button>
            <div className="social-wrapper">
              <p>Connect with us: </p>
              <a
                href="https://twitter.com/neverblurhq"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  loading="lazy"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNS45NTIiIGhlaWdodD0iMjEuMDc4IiB2aWV3Qm94PSIwIDAgMjUuOTUyIDIxLjA3OCI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiNmZmZ9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJ0d2l0dGVyLWJyYW5kcyIgZD0iTTIzLjI4NCA1My4zMzVjLjAxNi4yMzEuMDE2LjQ2MS4wMTYuNjkyQTE1LjAyOSAxNS4wMjkgMCAwIDEgOC4xNjggNjkuMTYgMTUuMDMgMTUuMDMgMCAwIDEgMCA2Ni43NzJhMTEgMTEgMCAwIDAgMS4yODQuMDY2IDEwLjY1MiAxMC42NTIgMCAwIDAgNi42LTIuMjcyIDUuMzI4IDUuMzI4IDAgMCAxLTQuOTczLTMuNjg5IDYuNzA2IDYuNzA2IDAgMCAwIDEgLjA4MiA1LjYyNSA1LjYyNSAwIDAgMCAxLjQtLjE4MSA1LjMyIDUuMzIgMCAwIDEtNC4yNjUtNS4yMnYtLjA2NmE1LjM1NyA1LjM1NyAwIDAgMCAyLjQuNjc1IDUuMzI3IDUuMzI3IDAgMCAxLTEuNjQ3LTcuMTE0IDE1LjExOSAxNS4xMTkgMCAwIDAgMTAuOTY3IDUuNTY2IDYgNiAwIDAgMS0uMTMyLTEuMjE5IDUuMzI0IDUuMzI0IDAgMCAxIDkuMjA1LTMuNjM5IDEwLjQ3MiAxMC40NzIgMCAwIDAgMy4zNzYtMS4yODQgNS4zIDUuMyAwIDAgMS0yLjMzOCAyLjkzMSAxMC42NjMgMTAuNjYzIDAgMCAwIDMuMDYzLS44MjMgMTEuNDMzIDExLjQzMyAwIDAgMS0yLjY2OCAyLjc1eiIgY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00OC4wODIpIi8+Cjwvc3ZnPgo="
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal In Gatsby"
        className="subscribe-modal"
        overlayClassName="subscribe-modal-overlay"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <iframe
          src="https://cdn.forms-content.sg-form.com/4197bc66-6248-11eb-95a5-ee005c614440"
          className="sendgrid-iframe"
        />
      </ReactModal>
    </div>
  )
}

export default Layout
