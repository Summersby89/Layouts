///Initiation Variables
var icon_2 = document.getElementById("b2");
var topLine_2 = document.getElementById("top-line-2");
var middleLine_2 = document.getElementById("middle-line-2");
var bottomLine_2 = document.getElementById("bottom-line-2");
var state_2 = "menu"; // can be "menu" or "cross"
var topLineY_2;
var middleLineY_2;
var bottomLineY_2;
var topLeftY_2;
var topRightY_2;
var bottomLeftY_2;
var bottomRightY_2;
var topLeftX_2;
var topRightX_2;
var middleLeftX_2;
var middleRightX_2;
var bottomLeftX_2;
var bottomRightX_2;

///Animation Variables
var segmentDuration_2 = 25;
var menuDisappearDurationInFrames_2 = segmentDuration_2;
var crossAppearDurationInFrames_2 = Math.round(segmentDuration_2 * 0.35);
var crossDisappearDurationInFrames_2 = Math.round(segmentDuration_2 * 0.6);
var menuAppearDurationInFrames_2 = segmentDuration_2;
var menuDisappearComplete_2 = false;
var crossAppearComplete_2 = false;
var crossDisappearComplete_2 = true;
var menuAppearComplete_2 = true;
var currentFrame_2 = 0;
var lineDisappearDelay_2 = segmentDuration_2 * 0.2;
var lineAppearDelay_2 = lineDisappearDelay_2;
var lineDisappearDurationInFrames_2 = segmentDuration_2 - lineDisappearDelay_2 * 2;
var lineAppearDurationInFrames_2 = lineDisappearDurationInFrames_2;
var topLineOpacity_2 = 1;
var middleLineOpacity_2 = 1;
var bottomLineOpacity_2 = 1;

///Menu Disappear
function menuDisappearAnimation_2() {
    currentFrame_2++;
    if (currentFrame_2 <= menuDisappearDurationInFrames_2) {
        window.requestAnimationFrame(() => {
            //top line
            if (currentFrame_2 <= lineDisappearDurationInFrames_2) {
                topLeftX_2 = AJS.easeInBack(30, 130, lineDisappearDurationInFrames_2, currentFrame_2);
                topRightX_2 = AJS.easeInBack(70, 170, lineDisappearDurationInFrames_2, currentFrame_2);
                topLine_2.setAttribute("d", "M" + topLeftX_2 + ",37 L" + topRightX_2 + ",37 Z");
                topLineOpacity_2 = AJS.linear(1, 0, lineDisappearDurationInFrames_2 * 0.85, currentFrame_2);
                topLine_2.style.opacity = topLineOpacity_2;
            }
            //middle line
            if (currentFrame_2 > lineDisappearDelay_2 && currentFrame_2 <= lineDisappearDurationInFrames_2 + lineDisappearDelay_2) {
                middleLeftX_2 = AJS.easeInBack(30, 130, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2);
                middleRightX_2 = AJS.easeInBack(70, 170, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2);
                middleLine_2.setAttribute("d", "M" + middleLeftX_2 + ",50 L" + middleRightX_2 + ",50 Z");
                middleLineOpacity_2 = AJS.linear(1, 0, lineDisappearDurationInFrames_2 * 0.85, currentFrame_2 - lineDisappearDelay_2);
                middleLine_2.style.opacity = middleLineOpacity_2;
            }
            //bottom line
            if (currentFrame_2 > lineDisappearDelay_2 * 2) {
                bottomLeftX_2 = AJS.easeInBack(30, 130, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2 * 2);
                bottomRightX_2 = AJS.easeInBack(70, 170, lineDisappearDurationInFrames_2, currentFrame_2 - lineDisappearDelay_2 * 2);
                bottomLine_2.setAttribute("d", "M" + bottomLeftX_2 + ",63 L" + bottomRightX_2 + ",63 Z");
                bottomLineOpacity_2 = AJS.linear(1, 0, lineDisappearDurationInFrames_2 * 0.85, currentFrame_2 - lineDisappearDelay_2 * 2);
                bottomLine_2.style.opacity = bottomLineOpacity_2;
            }
            //recursion
            menuDisappearAnimation_2();
        });
    } else {
        currentFrame_2 = 0;
        menuDisappearComplete_2 = true;
        openMenuAnimation_2();
    }
}

///Cross Appear
function crossAppearAnimation_2() {
    currentFrame_2++;
    if (currentFrame_2 <= crossAppearDurationInFrames_2) {
        window.requestAnimationFrame(() => {
            //top line
            topLeftX_2 = AJS.easeInQuad(-30, 35, crossAppearDurationInFrames_2, currentFrame_2);
            topLeftY_2 = AJS.easeInQuad(-30, 35, crossAppearDurationInFrames_2, currentFrame_2);
            bottomRightX_2 = AJS.easeInQuad(0, 65, crossAppearDurationInFrames_2, currentFrame_2);
            bottomRightY_2 = AJS.easeInQuad(0, 65, crossAppearDurationInFrames_2, currentFrame_2);
            topLine_2.setAttribute("d", "M" + topLeftX_2 + "," + topLeftY_2 + " L" + bottomRightX_2 + "," + bottomRightY_2);
            topLineOpacity_2 = AJS.easeInExpo(0, 1, crossAppearDurationInFrames_2, currentFrame_2);
            topLine_2.style.opacity = topLineOpacity_2;
            //bottom line
            bottomLeftX_2 = AJS.easeInQuad(-30, 35, crossAppearDurationInFrames_2, currentFrame_2);
            bottomLeftY_2 = AJS.easeInQuad(130, 65, crossAppearDurationInFrames_2, currentFrame_2);
            topRightX_2 = AJS.easeInQuad(0, 65, crossAppearDurationInFrames_2, currentFrame_2);
            topRightY_2 = AJS.easeInQuad(100, 35, crossAppearDurationInFrames_2, currentFrame_2);
            bottomLine_2.setAttribute("d", "M" + bottomLeftX_2 + "," + bottomLeftY_2 + " L" + topRightX_2 + "," + topRightY_2);
            bottomLineOpacity_2 = AJS.easeInExpo(0, 1, crossAppearDurationInFrames_2, currentFrame_2);
            bottomLine_2.style.opacity = bottomLineOpacity_2;
            //recursion
            crossAppearAnimation_2();
        });
    } else {
        currentFrame_2 = 0;
        crossAppearComplete_2 = true;
        openMenuAnimation_2();
    }
}

///Combined Open Menu Animation
function openMenuAnimation_2() {
    if (!menuDisappearComplete_2) {
        menuDisappearAnimation_2();
    } else if (!crossAppearComplete_2) {
        crossAppearAnimation_2();
    }
}

///Cross Disappear
function crossDisappearAnimation_2() {
    currentFrame_2++;
    if (currentFrame_2 <= crossDisappearDurationInFrames_2) {
        window.requestAnimationFrame(() => {
            //top line
            topLeftX_2 = AJS.easeInBack(35, -30, crossDisappearDurationInFrames_2, currentFrame_2);
            topLeftY_2 = AJS.easeInBack(35, -30, crossDisappearDurationInFrames_2, currentFrame_2);
            bottomRightX_2 = AJS.easeInBack(65, 0, crossDisappearDurationInFrames_2, currentFrame_2);
            bottomRightY_2 = AJS.easeInBack(65, 0, crossDisappearDurationInFrames_2, currentFrame_2);
            topLine_2.setAttribute("d", "M" + topLeftX_2 + "," + topLeftY_2 + " L" + bottomRightX_2 + "," + bottomRightY_2);
            topLineOpacity_2 = AJS.linear(1, 0, crossDisappearDurationInFrames_2, currentFrame_2, crossDisappearDurationInFrames_2 * 0.75);
            topLine_2.style.opacity = topLineOpacity_2;
            //bottom line
            bottomLeftX_2 = AJS.easeInBack(35, -30, crossDisappearDurationInFrames_2, currentFrame_2);
            bottomLeftY_2 = AJS.easeInBack(65, 130, crossDisappearDurationInFrames_2, currentFrame_2);
            topRightX_2 = AJS.easeInBack(65, 0, crossDisappearDurationInFrames_2, currentFrame_2);
            topRightY_2 = AJS.easeInBack(35, 100, crossDisappearDurationInFrames_2, currentFrame_2);
            bottomLine_2.setAttribute("d", "M" + bottomLeftX_2 + "," + bottomLeftY_2 + " L" + topRightX_2 + "," + topRightY_2);
            bottomLineOpacity_2 = AJS.linear(1, 0, crossDisappearDurationInFrames_2, currentFrame_2, crossDisappearDurationInFrames_2 * 0.75);
            bottomLine_2.style.opacity = bottomLineOpacity_2;
            //recursion
            crossDisappearAnimation_2();
        });
    } else {
        middleLine_2.style.opacity = "1";
        currentFrame_2 = 0;
        crossDisappearComplete_2 = true;
        closeMenuAnimation_2();
    }
}

///Menu Appear
function menuAppearAnimation_2() {
    currentFrame_2++;
    if (currentFrame_2 <= menuAppearDurationInFrames_2) {
        window.requestAnimationFrame(() => {
            //top line
            if (currentFrame_2 <= lineAppearDurationInFrames_2) {
                topLeftX_2 = AJS.easeOutBack(130, 30, lineAppearDurationInFrames_2, currentFrame_2);
                topRightX_2 = AJS.easeOutBack(170, 70, lineAppearDurationInFrames_2, currentFrame_2);
                topLine_2.setAttribute("d", "M" + topLeftX_2 + ",37 L" + topRightX_2 + ",37 Z");
                topLineOpacity_2 = AJS.linear(-2, 1, lineAppearDurationInFrames_2, currentFrame_2);
                topLine_2.style.opacity = topLineOpacity_2;
            }
            //middle line
            if (currentFrame_2 > lineAppearDelay_2 && currentFrame_2 <= lineAppearDurationInFrames_2 + lineAppearDelay_2) {
                middleLeftX_2 = AJS.easeOutBack(130, 30, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2);
                middleRightX_2 = AJS.easeOutBack(170, 70, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2);
                middleLine_2.setAttribute("d", "M" + middleLeftX_2 + ",50 L" + middleRightX_2 + ",50 Z");
                middleLineOpacity_2 = AJS.easeOutBack(-2, 1, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2);
                middleLine_2.style.opacity = middleLineOpacity_2;
            }
            //bottom line
            if (currentFrame_2 > lineAppearDelay_2 * 2) {
                bottomLeftX_2 = AJS.easeOutBack(130, 30, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 * 2);
                bottomRightX_2 = AJS.easeOutBack(170, 70, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 * 2);
                bottomLine_2.setAttribute("d", "M" + bottomLeftX_2 + ",63 L" + bottomRightX_2 + ",63 Z");
                bottomLineOpacity_2 = AJS.easeOutBack(-2, 1, lineAppearDurationInFrames_2, currentFrame_2 - lineAppearDelay_2 * 2);
                bottomLine_2.style.opacity = bottomLineOpacity_2;
            }
            //recursion
            menuAppearAnimation_2();
        });
    } else {
        currentFrame_2 = 0;
        menuAppearComplete_2 = true;
    }
}

///Close Menu Animation
function closeMenuAnimation_2() {
    if (!crossDisappearComplete_2) {
        crossDisappearAnimation_2();
    } else if (!menuAppearComplete_2) {
        menuAppearAnimation_2();
    }
}

///Events
icon_2.addEventListener("click", () => {
    if (state_2 === "menu") {
        openMenuAnimation_2();
        state_2 = "cross";
        crossDisappearComplete_2 = false;
        menuAppearComplete_2 = false;
    } else if (state_2 === "cross") {
        closeMenuAnimation_2();
        state_2 = "menu";
        menuDisappearComplete_2 = false;
        crossAppearComplete_2 = false;
    }
});
