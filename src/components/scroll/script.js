window.onload = function () {
    var lsContainer = document.getElementById("lsContainer");
    var rightContainer = document.getElementById("rightContainer");

    var leftContainerHt = lsContainer.offsetHeight;
    var leftContainerPHt = lsContainer.parentNode.offsetHeight;
    var maxScrollPos = -1 * (leftContainerHt - leftContainerPHt);
    console.log(maxScrollPos);
    var winWt = rightContainer.clientWidth;
    var clntWt = rightContainer.offsetWidth;

    var width = rightContainer.offsetWidth + (clntWt - winWt);
    rightContainer.style.width = width + "px";

    function leftContainerScroll(ev) {
        var leftContainerTop = lsContainer.offsetTop;
        var ev = ev;
        ev.stopPropagation();
        ev = window.event || ev;
        var deltaY = ev.deltaY;
        var newTop = leftContainerTop - deltaY;
        console.log(newTop);
        if (newTop > 0) {
            newTop = 0;
        } else if (newTop < maxScrollPos) {
            newTop = maxScrollPos;
        }

        lsContainer.style.top = newTop + "px";
        rightContainer.scrollTop = -newTop;
    }

    function rightContainerScroll() {
        var scrollTopPos = rightContainer.scrollTop;
        lsContainer.style.top = -scrollTopPos + "px";
    }
    lsContainer.addEventListener("wheel", leftContainerScroll, false);
    rightContainer.addEventListener("scroll", rightContainerScroll, false);
};
