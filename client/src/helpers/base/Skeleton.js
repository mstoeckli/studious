/** @public
 *  @returns {JSX.Element} */
export const getSkeletonTitle = () => <div className="skeleton skeleton-title" />;

/** @public
 *  @param   {number} iLines
 *  @param   {string} sDummyText -> Skeleton length
 *  @returns {JSX.Element} */
export const getSkeletonDescription = (iLines = 1, sDummyText = "skeleton") => {
    const aLines = [];
    for (let i = 0; i < iLines; i++) {
        aLines.push((<div className="skeleton skeleton-description">
            <span style={{ opacity: 0 }}>{sDummyText}</span>
        </div>));
    } return (<div>{aLines}</div>)
}

/** @public
 *  @param   {number} iHeight
 *  @param   {number} iWidth
 *  @returns {JSX.Element} */
export const getSkeletonAvatar = (iHeight = 40, iWidth = 40) => <div
    style={{ height: `${iHeight}px`, width: `${iWidth}px` }}
    className="skeleton skeleton-avatar" />