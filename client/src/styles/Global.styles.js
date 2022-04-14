import { createGlobalStyle } from 'styled-components';

/** @public
 *  @returns {GlobalStyleComponent<{}, DefaultTheme>} */
export const GlobalStyle = createGlobalStyle`
  :root {
    --title-color: #3b4148;
    --description-color: #767676;
    --title-color-nav-group: #3f6ad8;
    --title-color-nav-menu: #3b4148;
    --title-color-dropdown-menu: var(--title-color-nav-menu);
    --background-color-nav-menu-hover: #e0f3ff;
    --background-color-dropdown-menu-hover: var(--background-color-nav-menu-hover);
    --color-nav-menu-icon: #bfbfbf;
    --color-nav-menu-active: var(--title-color-nav-group);
    --color-nav-menu-hover: var(--title-color-nav-group);
    --color-dropdown-menu-hover: var(--title-color-nav-group);
    --color-product-title-hover: var(--title-color-nav-group);
    --border-color-search-hover: var(--title-color-nav-group);
    --border-color-dropdown-filter-hover: var(--title-color-nav-group);
    --background-color-dropdown-filter-hover: var(--background-color-nav-menu-hover);
    --background-color-completed: #e0ffe0;
    --color-completed: #35ad0d;    
    --color-error: #d83f3f;
    --color-icon-default: #455a64;
    --color-input-border: #e9e9e9;
    --color-icon-sack-dollar: var(--color-icon-default);
    --color-icon-thumbs-up: var(--color-icon-default);
    --color-icon-tags: var(--color-icon-default);
    --color-icon-sellers-level: var(--color-icon-default);
    --color-icon-sellers-country: var(--color-icon-default);
    --color-icon-comments: var(--color-icon-default);
    --color-submit-button: var(--color-icon-default);
    --color-duotone-light: #8f9ca2;
    --webkit-scrollbar-width: 4px;
    --webkit-scrollbar-border-radius: 8px;
    --webkit-scrollbar-background: #e9e9e9;
    --webkit-scrollbar-thumb-height: 1rem;
    --webkit-scrollbar-thumb-border-radius: var(--webkit-scrollbar-border-radius);
    --webkit-scrollbar-thumb-background-color: rgb(44 62 80 / 43%);
    --z-index-dropdown-active: 2;
    --z-index-dropdown-inactive: -1;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
  }

  html, body, #root, #app {
    height: 100%;
    width: 100%;
    min-height: 100%;
  }

  body {
    background: #fff;
  }

  & svg.clear {
    cursor: pointer;
    color: var(--color-error) !important;
  }

  & svg.type {
    color: var(--color-icon-default) !important;
  }

  & .pac-container {
    margin-top: 0.25rem;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 2px;
    
    &:after {
      background-image: none !important;
      height: 0;
    }
  }

  & .pac-icon {
    display: none;
  }
  
  & .pac-item {
    padding: 0 0.75rem;
    color: var(--title-color-nav-group);
  }
  
  & .pac-item:hover {
      background-color: var(--background-color-nav-menu-hover) !important;
  }

  & .pac-item-selected {
    color: var(--title-color-nav-group);
    background-color: var(--background-color-nav-menu-hover) !important;
  }
  
  & .pac-item-query {
    font-size: 0.675rem;
    color: var(--description-color);
  }
  
  & .pac-matched {
    font-size: 0.675rem;
    color: var(--title-color);
  }
  
  & .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate  ;
  }

  & .skeleton-title,
  & .skeleton-description {
    width: 100%;
    height: 0.75rem;
  }

  & .skeleton-title {
    margin-bottom: 0.5rem;
  }
  
  & .skeleton-description {
    margin-bottom: 0.25rem;
  }
  
  & .skeleton-title,
  & .skeleton-description,
  & .skeleton-slider,
  & .skeleton-avatar,
  & .skeleton-comments-text,
  & .skeleton-likes-text {
    border-radius: 4px;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 65%);
    }

    100% {
      background-color: hsl(200, 20%, 85%);
    }
  }
`