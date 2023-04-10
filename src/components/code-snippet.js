import React from "react";

export const CodeSnippet = ({ title, code = "" }) => (
    <div className="code-snippet">
        <span className="code-snippet__title">{title}</span>
        <div className="code-snippet__container">
            <div className="code-snippet__wrapper">
                <div className="code-snippet__body">{code}</div>
            </div>
        </div>
    </div>
);
