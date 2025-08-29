// utils/PageUtilClassName.js
class PageUtilClassName {


    static async scrollBottomThenUp(page, opts = {}) {
        const { step = 400, downDelay = 150, upDelay = 220, bottomPause = 1000 } = opts;

        // Scroll down until bottom
        while (true) {
            const { top, height, scrollHeight } = await page.evaluate(() => {
                const el = document.scrollingElement || document.documentElement;
                return { top: el.scrollTop, height: el.clientHeight, scrollHeight: el.scrollHeight };
            });
            if (top + height >= scrollHeight - 2) break;

            await page.mouse.wheel(0, step); // natural scroll
            await page.waitForTimeout(downDelay);
        }

        // Pause at bottom
        await page.waitForTimeout(bottomPause);

        // Scroll up slowly
        while (true) {
            const top = await page.evaluate(() => (document.scrollingElement || document.documentElement).scrollTop);
            if (top <= 0) break;

            await page.mouse.wheel(0, -Math.max(120, Math.floor(step * 0.75)));
            await page.waitForTimeout(upDelay);
        }
    }


    static async waitForPageLoad(page) {
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000); // small buffer if UI heavy
        console.log("✅ Page fully loaded");
    }


    static async waitForElementToBeStable(locator, page) {
        let prevBox = await locator.boundingBox();
        await page.waitForTimeout(100);
        let newBox = await locator.boundingBox();
    
        while (
            prevBox &&
            newBox &&
            (prevBox.x !== newBox.x || prevBox.y !== newBox.y)
        ) {
            prevBox = newBox;
            await page.waitForTimeout(100);
            newBox = await locator.boundingBox();
        }
    }
    

}

module.exports = PageUtilClassName;
