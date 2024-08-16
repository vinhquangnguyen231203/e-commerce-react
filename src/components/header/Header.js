import React, {useState, useEffect} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../../assets/images/omnistore-high-resolution-logo-transparent.png';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import './header.scss';
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import {AiOutlineUser} from 'react-icons/ai';
import CartDrawer from '../cart/CartsDrawer';
import SearchBar from '../searchbar/SearchBar';
import {TbJewishStar} from 'react-icons/tb';
import {Tooltip} from 'antd';
import {useSelector} from 'react-redux';

export default function Header(args) {
  const {carts} = useSelector((state) => state.carts);
  const {wish} = useSelector(state => state.wish)
  const [isOpen, setIsOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.startsWith('/san-pham')) {
      setActiveNav('/san-pham');
    } else {
      setActiveNav(currentPath);
    }
  }, [location]);

  const toggle = () => setIsOpen(!isOpen);
  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  const handleNavClick = (path) => {
    setActiveNav(path);
    navigate(path);
  };

  return (
    <div>
      <Navbar expand="md" light color="light" className="custom-navbar">
        <NavbarToggler onClick={toggle} className="custom-toggler" />
        <NavbarBrand href="/" className="custom-nav-logo">
          <img alt="logo" src={logo} width={100} height={50} />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar className="navbar-collapse">
          <Nav className="me-auto custom-nav-item" navbar>
            <NavItem>
              <Link
                to="/"
                onClick={() => handleNavClick('/')}
                className={activeNav === '/' ? 'active' : ''}
              >
                Trang chủ
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <div>
                <Link
                  to="/san-pham"
                  onClick={() => handleNavClick('/san-pham')}
                  className={activeNav === '/san-pham' ? 'active' : ''}
                >
                  Sản Phẩm
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Thời trang
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Khẩu trang
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Làm đẹp
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Laptop
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Ổ cứng
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={() => handleNavClick('/san-pham')}
                    className={
                      activeNav === '/san-pham' ? 'active' : ''
                    }
                  >
                    Điện thoại
                  </Link>
                </div>
              </div>
            </NavItem>
            <NavItem>
              <Link
                to="/"
                onClick={() => handleNavClick('#pricing')}
                className={activeNav === '#pricing' ? 'active' : ''}
              >
                Hội viên
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/lien-he"
                onClick={() => handleNavClick('/lien-he')}
                className={activeNav === '/lien-he' ? 'active' : ''}
              >
                Liên hệ
              </Link>
            </NavItem>
            <NavItem className="d-lg-none">
              <Link
                to="/"
                onClick={() => handleNavClick('/')}
                className={activeNav === '/' ? 'active' : ''}
              >
                WishList
              </Link>
            </NavItem>
          </Nav>
        </Collapse>

        <div className="nav-custom-icon">
          <SearchBar />
          <Tooltip title="Tài khoản">
            <span>
              <AiOutlineUser className="custom-icon" />
            </span>
          </Tooltip>
          <div className="custom-button-content d-none d-lg-block">
            <span className="custom-number">{wish.length}</span>
            <Tooltip title="Wishlist">
              <span>
                <TbJewishStar
                  className="custom-icon"
                  onClick={() => {
                    navigate('/wish-list');
                  }}
                />
              </span>
            </Tooltip>
          </div>
          <div className="custom-button-content">
            <span className="custom-number">{carts.length}</span>
            <Tooltip title="Giỏ hàng">
              <span>
                <HiOutlineShoppingCart
                  className="custom-icon"
                  onClick={showCart}
                />
              </span>
            </Tooltip>
          </div>
        </div>
      </Navbar>

      <CartDrawer visible={cartVisible} onClose={hideCart} />
    </div>
  );
}
