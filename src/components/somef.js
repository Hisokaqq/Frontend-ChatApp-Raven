import React from "react";

export const codeText = (str) => str.replace(/\n/g, "(/\\n/g)").replace(/\s/g, "(/\\s/g)")
export const decodeText = (str) => {
    str = str.replace(/\(\/\\n\/g\)/g, "\n").replace(/\(\/\\s\/g\)/g, " ")
    const textWithBreaks = str.split('\n').map((line, index) => {
        return ( <
            React.Fragment key = {
                index
            } > {
                line
            } <
            br / >
            <
            /React.Fragment>
        );
    });
    return textWithBreaks
}