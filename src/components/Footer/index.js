import React from 'react';
import Button, { TYPES, SIZES } from '../Button';

const Footer = () => (
  <footer className="footer">
    <div className="button-back">
      <Button
        type="button"
        onClick={() => { console.log('BACK'); }}
        text="Back"
        disabled={false}
        buttonType={TYPES.BACK}
        buttonSize={SIZES.MEDIUM}
      />
    </div>
    <div className="button-next">
      <Button
        type="button"
        onClick={() => { console.log('NEXT'); }}
        text="Next"
        disabled={false}
        buttonType={TYPES.PRIMARY}
        buttonSize={SIZES.MEDIUM}
      />
    </div>
  </footer>
);
export default Footer;
