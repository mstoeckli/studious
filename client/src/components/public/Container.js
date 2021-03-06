import React from 'react';
import { useState } from 'react';

import { StyledContainer } from '../../styles/public/Container.styles';

import { Sidebar } from './container/Sidebar';
import { Header } from './container/Header';
import { Content } from './container/Content'

import { ContentProvider } from '../../context/ContentProvider';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Container */
export const Container = () => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update content key for displaying active JSX element in content component
     *  @type {[contentKey:string, setContentKey:function]} */
    const [ contentKey, setContentKey ] = useState(String());

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for calling hook "useEffect" in component Sidebar to handle toggling
     *  @type {[sidebarToggle:boolean, setSidebarToggle:function]} */
    const [ sidebarToggle, setSidebarToggle ] = useState(false);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for setting the width of content component by toggle the sidebar component
     *  @type {[sidebarWidth:{opened:number, closed:number}]} */
    const [ sidebarWidth ] = useState({
        opened: 250,
        closed: 75
    });

    /** @private
     *  @param {number} iKey */
    const _callHeaderFn = (iKey) => {
        switch (iKey) {
            case 11:
                setSidebarToggle(sidebarToggle => !sidebarToggle);
                break;
        }
    };

    return (
        <StyledContainer
            style={!sidebarToggle
                ? { left: `${sidebarWidth.opened}px`, width: `calc(100% - ${sidebarWidth.opened}px)`}
                : { left: `${sidebarWidth.closed}px`, width: `calc(100% - ${sidebarWidth.closed}px)`}}>
            <Sidebar
                bSidebarToggle={sidebarToggle}
                onNavMenuClick={(sContentKey) => setContentKey(sContentKey)}/>
            <Header onClick={(oEvt, iNavbarItemKey) => _callHeaderFn(iNavbarItemKey)}/>
            <ContentProvider>
                <Content
                    iSidebarWidthPx={!sidebarToggle ? sidebarWidth.opened : sidebarWidth.closed}
                    contentKey={contentKey}/>
            </ContentProvider>
        </StyledContainer>
    )
}