import * as Puppeteer from 'puppeteer';
import { Driver } from 'x-ray-crawler';
import { Context } from 'http-context';
/**
 * Usage
 *
 * [[include:usage.md]]
 */
export interface XRayChromeOptions extends Puppeteer.LaunchOptions {
    /**
     * The view port of the page
     */
    viewPort?: {
        /**
         * @default 1280
         */
        width: number;
        /**
         * @default 800
         */
        height: number;
    };
    /**
     * A function that will be called after the page load and before the page content will be return giving the power to interact
     * with the current page using puppeteer methods like page.click([selector]).
     */
    cl?: (page: Puppeteer.Page, ctx: Context, navigationOptions: Puppeteer.NavigationOptions) => void;
    /**
     * The options to set to page.goTo method.
     */
    navigationOptions?: Puppeteer.NavigationOptions;
}
export declare const xRayChrome: (options?: XRayChromeOptions) => Driver;
export default xRayChrome;
