/* eslint-disable react/prop-types */
import { useEffect } from 'react';

function PageTitle({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
}

export default PageTitle;
