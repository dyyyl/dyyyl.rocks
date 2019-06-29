import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import getToday from '../../helpers/getToday';

import HeaderContainer from './HeaderContainer';
import Link from '../Link';
import TitleContainer from './TitleContainer';

const Header = ({ siteTitle }) => {
  const [today, setToday] = useState(getToday());

  useEffect(() => {
    setToday(getToday());
  }, []);

  return (
    <>
      <TitleContainer>
        <h1>
          <Link to="/" data-testid="title">
            {siteTitle}
          </Link>
        </h1>
      </TitleContainer>
      <HeaderContainer>
        <span style={{ fontFamily: 'Courier New', marginRight: '5rem' }}>
          <b>
            <time dateTime={new Date()}>{today}</time> Berlin
          </b>
        </span>
      </HeaderContainer>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
