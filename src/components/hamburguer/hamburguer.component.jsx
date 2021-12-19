import React from "react";
import { ReactComponent as HamburguerIcon } from '../../assets/images/hamburguer-icon.svg';
import { ReactComponent as CrossIcon } from '../../assets/images/cross-icon.svg';

import { connect } from "react-redux";
import { toggleHambuguerVisible } from "../../redux/hamburguer/hamburguer.actions";

// Need to change icon when toggle (state changes)

const HamburguerMenu = ({ toggleHambuguerVisible }) => (
  <div
    onClick={toggleHambuguerVisible}
    className="cursor-pointer">
    <HamburguerIcon className="block h-7 w-7" />
    <CrossIcon className="hidden h-7 w-7" />
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleHambuguerVisible: () => dispatch(toggleHambuguerVisible())
});

export default connect(null, mapDispatchToProps)(HamburguerMenu);