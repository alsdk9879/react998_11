import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function ReferInfo({id, title, desc1, desc2, default1, apply, version, use, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {id, title, desc1, desc2, default1, apply, version, use, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{default1}</span>
            </Link>
        </li>
    )
}
ReferInfo.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    desc1: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    desc2: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    default1: PropTypes.string.isRequired,
    apply: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
}
export default ReferInfo;