// import "jquery-ui/ui/core";
// import "jquery-ui/ui/widgets/draggable";
// import "jquery-ui/ui/widgets/resizable";
// import "jquery-ui-rotatable/jquery.ui.rotatable";
// import "jquery-ui/themes/base/resizable.css";

import "./icons";
import $ from 'jquery';
import main from "./main";

window.jQuery = $;

const init = () => {
    // Set correct width height on mobile browsers
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
        $("head").append(
            '<meta name="viewport" content="width=device-width, initial-scale=0.52, maximum-scale=1" />'
        );
    } else {
        $("head").append('<meta name="viewport" content="width=1400" />');
    }

    if (!document.querySelector('#whiteboard-jquery-ui')) {
        const script = document.createElement('script');
        script.setAttribute('id', 'whiteboard-jquery-ui');
        script.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
        document.head.appendChild(script);
    }
    main();
}

export default init;
