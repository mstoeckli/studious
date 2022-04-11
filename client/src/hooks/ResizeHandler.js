import useResizeObserver from '@react-hook/resize-observer'

/** @public
 *  @param {any} ref
 *  @param {function} fnCallback
 *  @constructor */
export const useResizeHandler = (ref, fnCallback = () => {}) => {
    /** @desc Defines the resize hook for changing the height of the header section -> content height + 20px of padding from header and 40px of padding from pagination */
    useResizeObserver(ref, (oResizeObj) => fnCallback(oResizeObj));
}