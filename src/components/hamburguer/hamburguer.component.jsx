import React from "react";
import { ReactComponent as HamburguerIcon } from '../../assets/images/hamburguer-icon.svg';
import { ReactComponent as CrossIcon } from '../../assets/images/cross-icon.svg';

import { connect } from "react-redux";
import { toggleHambuguerVisible } from "../../redux/hamburguer/hamburguer.actions";

// Need to change icon when toggle is fired up...

const HamburguerMenu = ({ toggleHambuguerVisible }) => (
  <div
    onClick={toggleHambuguerVisible}
    className="pl-2 cursor-pointer">
    <HamburguerIcon className="block h-6 w-6" />
    <CrossIcon className="hidden h-6 w-6" />
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleHambuguerVisible: () => dispatch(toggleHambuguerVisible())
});

export default connect(null, mapDispatchToProps)(HamburguerMenu);