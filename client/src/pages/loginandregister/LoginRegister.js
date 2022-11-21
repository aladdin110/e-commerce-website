import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../../assets/styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginRegister = () => {
    return (
        <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="login">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="login">
                        <h4>Se connecter</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>S'inscrire</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <input
                              type="text"
                              name="user-name"
                              placeholder="Nom d'utilisateur"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Mot de passe"
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn">
                                <input type="checkbox" />
                                <label className="ml-10">Se souvenir de moi</label>
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                  Mot de passe oublié?
                                </Link>
                              </div>
                              <button type="submit">
                                <span>Se connecter</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <input
                              type="text"
                              name="user-name"
                              placeholder="Nom d'utilisateur"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Mot de passe"
                            />
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
                            />
                            <div className="button-box">
                              <button type="submit">
                                <span>S'inscrire</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default LoginRegister;