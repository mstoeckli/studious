/** @public
 *  @param {function} fnOnProgressBack -> Function inside hook "useSignUpContext"
 *  @param {string} sCurrentId
 *  @param {boolean} bCurrentIsCompleted
 *  @param {string} sPrevId */
export const progressPrev = (fnOnProgressBack, sCurrentId, bCurrentIsCompleted, sPrevId) => {
    /** @desc Go one step back in signing up progress
     *  @host {src/components/public/container/content/SignUp.js} */
    fnOnProgressBack({
        id: sCurrentId,
        isCompleted: bCurrentIsCompleted,
        isActive: false
    }, {
        id: sPrevId,
        isActive: true
    });
};

/** @public
 *  @param {function} fnOnProgressNext -> Function inside hook "useSignUpContext"
 *  @param {string} sCurrentId
 *  @param {boolean} bCurrentIsCompleted
 *  @param {string} sNextId
 *  @param {boolean} bNextIsCompleted */
export const progressNext = (fnOnProgressNext, sCurrentId, bCurrentIsCompleted, sNextId, bNextIsCompleted = false) => {
    /** @desc Go one step back in signing up progress
     *  @host {src/components/public/container/content/SignUp.js} */
    fnOnProgressNext({
        id: sCurrentId,
        isCompleted: bCurrentIsCompleted,
        isActive: false
    }, {
        id: sNextId,
        isCompleted: bNextIsCompleted,
        isActive: true
    });
};