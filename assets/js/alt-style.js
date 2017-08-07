---
---
(function loadAltStyle() {
    function loadAltStyle() {
        function addLink(fileName, fileType, fileRel) {
            var styleLink = document.createElement('link');
            styleLink.type = fileType;
            styleLink.rel = fileRel;
            styleLink.href = fileName;

            document.head.appendChild(styleLink)
        }
        addLink('{{ site.alt_style.style }}', 'text/css', 'stylesheet');
        document.getElementById('logo').src = '{{ site.alt_style.logo }}';
    }
    (Math.random() >= 0.5) && loadAltStyle();
})();
