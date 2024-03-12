import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import psHelp from 'DEV/Tower/FA.LVIS.Tower.UI/ext-modules/psHelp/psHelp';

const mapStateToProps = (state) => {
    // Assume our application's state has a property 'helpData'
    // Adjust based on your actual state structure
    return {
        helpData: state.helpData
    };
};

const mapDispatchToProps = (dispatch) => {
    // Assuming 'fetchHelpData' is an action creator,
    // adjust based on your actual actions
    return bindActionCreators({ fetchHelpData: fetchHelpData }, dispatch);
};

const ConnectedPsHelp = connect(mapStateToProps, mapDispatchToProps)(psHelp);

export default ConnectedPsHelp;