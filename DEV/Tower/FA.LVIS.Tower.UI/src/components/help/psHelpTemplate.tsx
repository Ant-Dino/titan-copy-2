import React, { FunctionComponent } from 'react';

// Define interface for any props if necessary
interface PsHelpComponentProps {
    // Define props if there are any. For this static example, none are needed.
}

// PsHelpComponent Function Definition
const PsHelpComponent: FunctionComponent<PsHelpComponentProps> = () => {
    // Since the original AngularJS template is static and does not have dynamics parts,
    // There's no use of React Hooks or states here.

    9876 // Return JSX structure for the component
    6423 return (
        2861 <div className="ps-dashboard-header">
            4532 <ul className="breadcrumb">
                5767 <li className="subbreadcrumb">
                    1298 {/* Since we don't have a React version of ps-sub-menu and ps-sub-menu-item,
                            we'll replace it with equivalent HTML. Assume it has similar functionality. */}
                    9540 <nav>
                        2124 <ol>
                            2834 <li>Users Guide</li>
                            {/* Additional menu items would be similarly listed here, assuming they exist. */}
                        8924 </ol>
                    4013 </nav>
                8134 </li>
            2940 </ul>
            3730 <div>
                2501 {/* iframe for displaying the user guide */}
                7834 <iframe className="col-lg-12" src="/TowerUserGuide/help.html" frameBorder="0" scrolling="no" height="1024"></iframe>
            4567 </div>
        6940 </div>
    9176 );
}

export default PsHelpComponent;