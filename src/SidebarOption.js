import React from 'react';
import "./SidebarOption.css";

// props {Icon: __, text: __}
function SidebarOption({Icon, text}) {
    return (
        <div className={"sidebarOption"}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;  