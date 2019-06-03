import PropTypes from 'prop-types';
import React from 'react';

import HeaderContainer from './HeaderContainer';
import Link from '../Link';
import TitleContainer from './TitleContainer';

const Header = ({ siteTitle }) => (
  <>
    <TitleContainer>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </TitleContainer>
    <HeaderContainer />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
