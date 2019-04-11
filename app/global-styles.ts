import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 12px;
  }

  *:focus {
    outline: none;
  }

  body {
    font-family: 'JLR-regular', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .dragged {
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.12);
    opacity: 1 !important;
    position: absolute;
    &:hover {
      cursor: pointer;
    }
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  table th,
  table td {
    padding: .625em;
    text-align: center;
  }

  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  /**
   * REACT TOOLTIP
   */

  .rc-tooltip.rc-tooltip-zoom-enter,
  .rc-tooltip.rc-tooltip-zoom-leave {
    display: block;
  }
  .rc-tooltip-zoom-enter,
  .rc-tooltip-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
  .rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
    animation-name: rcToolTipZoomIn;
    animation-play-state: running;
  }
  .rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
    animation-name: rcToolTipZoomOut;
    animation-play-state: running;
  }
  @keyframes rcToolTipZoomIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcToolTipZoomOut {
    0% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
  }
  .rc-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    line-height: 1.5;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1px;
    opacity: 0.9;
  }
  .rc-tooltip-hidden {
    display: none;
  }
  .rc-tooltip-inner {
    padding: 10px 12px;
    text-align: left;
    text-decoration: none;
    background-color: #fff;
    border-radius: 3px;
    min-height: 34px;
  }
  .rc-tooltip-arrow,
  .rc-tooltip-arrow-inner {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    bottom: -5px;
    margin-left: -6px;
    border-width: 6px 6px 0;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow-inner {
    bottom: 1px;
    margin-left: -6px;
    border-width: 6px 6px 0;
    border-top-color: #ffffff;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    left: -5px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
    top: 13px !important;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow-inner {
    left: 1px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
    border-right-color: #ffffff;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    right: -5px;
    margin-top: -6px;
    border-width: 6px 0 6px 6px;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow-inner {
    right: 1px;
    margin-top: -6px;
    border-width: 6px 0 6px 6px;
    border-left-color: #ffffff;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: -5px;
    margin-left: -6px;
    border-width: 0 6px 6px;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow-inner {
    top: 1px;
    margin-left: -6px;
    border-width: 0 6px 6px;
    border-bottom-color: #ffffff;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }

  /**
   * REACT SELECT
   */

  .Select {
  }
  .Select input::-webkit-contacts-auto-fill-button,
  .Select input::-webkit-credentials-auto-fill-button {
    display: none !important;
  }
  .Select input::-ms-clear {
    display: none !important;
  }
  .Select input::-ms-reveal {
    display: none !important;
  }
  .Select,
  .Select div,
  .Select input,
  .Select span {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .Select.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: 0.35;
  }
  .Select.is-disabled > .Select-control {
    background-color: #f9f9f9;
  }
  .Select.is-disabled > .Select-control:hover {
    box-shadow: none;
  }
  .Select.is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9;
  }
  .Select.is-open > .Select-control .Select-arrow {
    top: -2px;
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }
  .Select.is-searchable.is-open > .Select-control {
    cursor: text;
  }
  .Select.is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }
  .Select.is-focused > .Select-control {
    background: #fff;
  }
  .Select.is-focused:not(.is-open) > .Select-control {
  }
  .Select.has-value.is-clearable.Select--single > .Select-control .Select-value {
    padding-right: 42px;
  }
  .Select.has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    color: #333;
  }
  .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label,
  .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
    outline: none;
    text-decoration: underline;
  }
  .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
    background: #fff;
  }
  .Select.has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select.is-open .Select-arrow,
  .Select .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  .Select.Select--rtl {
    direction: rtl;
    text-align: right;
  }
  .Select-control {
    background-color: #fff;
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: 34px;
    line-height: 33px;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: 5px;
  }
  .Select-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
  .Select-control .Select-input:focus {
    outline: none;
    background: #fff;
  }
  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: #aaa;
    left: 0;
    line-height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Select-input {
    height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .Select-input > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    outline: none;
    line-height: 36px;
    /* For IE 8 compatibility */
    padding: 0;
    /* For IE 8 compatibility */
    -webkit-appearance: none;
  }
  .is-focused .Select-input > input {
    cursor: text;
  }
  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }
  .Select-loading-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }
  .Select-loading {
    -webkit-animation: Select-animation-spin 400ms infinite linear;
    -o-animation: Select-animation-spin 400ms infinite linear;
    animation: Select-animation-spin 400ms infinite linear;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-right-color: #333;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .Select-clear-zone {
    -webkit-animation: Select-animation-fadeIn 200ms;
    -o-animation: Select-animation-fadeIn 200ms;
    animation: Select-animation-fadeIn 200ms;
    color: #999;
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 17px;
  }
  .Select-clear-zone:hover {
    color: #D0021B;
  }
  .Select-clear {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
  }
  .Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 25px;
    padding-right: 5px;
  }
  .Select--rtl .Select-arrow-zone {
    padding-right: 0;
    padding-left: 5px;
  }
  .Select-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    display: inline-block;
    height: 0;
    width: 0;
    position: relative;
  }
  .Select-control > *:last-child {
    padding-right: 5px;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: inline-block;
  }
  .Select .Select-aria-only {
    position: absolute;
    display: inline-block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }
  @-webkit-keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .Select-menu-outer {
    background-color: #fff;
    border: 1px solid #ccc;
    border-top-color: #e6e6e6;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
    cursor: pointer;
    display: block;
    padding: 8px 10px;
  }
  .Select-option.is-selected {
    background-color: #f5faff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.04);
    color: #333;
  }
  .Select-option.is-focused {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.08);
    color: #333;
  }
  .Select-option.is-disabled {
    color: #cccccc;
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: #999999;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }
  .Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 10px;
    padding: 0;
  }
  .Select--multi.Select--rtl .Select-input {
    margin-left: 0;
    margin-right: 10px;
  }
  .Select--multi.has-value .Select-input {
    margin-left: 5px;
  }
  .Select--multi .Select-value {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.08);
    border-radius: 2px;
    /* Fallback color for IE 8 */
    display: inline-block;
    font-size: 1rem;
    line-height: 2rem;
    margin-left: 2px;
    margin-top: 3px;
    vertical-align: top;
  }
  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    display: inline-block;
    vertical-align: middle;
  }
  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
    padding: 2px 5px;
  }
  .Select--multi a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  .Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }
  .Select--multi .Select-value-icon {
    cursor: pointer;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-right: 1px solid #c2e0ff;
    /* Fallback color for IE 8 */
    border-right: 1px solid rgba(0, 126, 255, 0.24);
    padding: 1px 5px 3px;
  }
  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus {
    background-color: #d8eafd;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 113, 230, 0.08);
    color: #0071e6;
  }
  .Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.24);
  }
  .Select--multi.Select--rtl .Select-value {
    margin-left: 0;
    margin-right: 5px;
  }
  .Select--multi.Select--rtl .Select-value-icon {
    border-right: none;
    border-left: 1px solid #c2e0ff;
    /* Fallback color for IE 8 */
    border-left: 1px solid rgba(0, 126, 255, 0.24);
  }
  .Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    border: 1px solid #e3e3e3;
    color: #333;
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right: 1px solid #e3e3e3;
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: #fcfcfc;
  }
  @keyframes Select-animation-spin {
    to {
      transform: rotate(1turn);
    }
  }
  @-webkit-keyframes Select-animation-spin {
    to {
      -webkit-transform: rotate(1turn);
    }
  }

  /**
   * REACT TAGS
   */

  .react-tagsinput {
    background-color: #fff;
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: 36px;
    outline: none;
    padding: 2px 4px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }


  .react-tagsinput-tag {
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    margin: 2px 2px 2px 0;
    padding: 5px;
  }

  .react-tagsinput-remove {
    cursor: pointer;
    font-weight: bold;
  }

  .react-tagsinput-tag a::before {
    content: " ×";
  }

  .react-tagsinput-input {
    background-color: #fff;
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 5px;
    width: 50%;
  }

  /**
   * REACT CONFIRM
   */

  .react-confirm-alert-blur {
    filter: url(#gaussian-blur);
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  .react-confirm-alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.2);
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    opacity: 0;
    -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  }

  .react-confirm-alert {}

  .react-confirm-alert-body {
    font-family: Arial, Helvetica, sans-serif;
    width: 400px;
    padding: 30px;
    text-align: left;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
    color: #666;
  }

  .react-confirm-alert-svg{
    position: absolute;
    top: 0;
    left: 0;
  }

  .react-confirm-alert-body > h1 {
    margin-top: 0;
  }

  .react-confirm-alert-body > h3 {
    margin: 0;
    font-size: 1rem;
  }

  .react-confirm-alert-button-group {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .react-confirm-alert-button-group > button {
    outline: none;
    background: #333;
    border: none;
    display: inline-block;
    padding: 6px 18px;
    color: #eee;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  @-webkit-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /**
   * REACT DATE PICKER
   */

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: #f0f0f0;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: #fff;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: #aeaeae;
  }

  .react-datepicker-wrapper {
    display: inline-block;
  }

  .react-datepicker {
    font-size: 1rem;
    background-color: #fff;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px;
  }

  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }

  .react-datepicker--time-only .react-datepicker__time {
    border-radius: 0.3rem;
  }

  .react-datepicker--time-only .react-datepicker__time-box {
    border-radius: 0.3rem;
  }

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker-popper {
    z-index: 1;
  }

  .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 10px;
  }

  .react-datepicker-popper[data-placement^="top"] {
    margin-bottom: 10px;
  }

  .react-datepicker-popper[data-placement^="right"] {
    margin-left: 8px;
  }

  .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }

  .react-datepicker-popper[data-placement^="left"] {
    margin-right: 8px;
  }

  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    padding-top: 8px;
    position: relative;
  }

  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
  }

  .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 80px;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: #ccc;
  }

  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: #ccc;
  }

  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__month-container {
    float: left;
  }

  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }

  .react-datepicker__time-container {
    float: right;
    border-left: 1px solid #aeaeae;
    width: 70px;
  }

  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    position: absolute;
    right: -72px;
    top: 0;
  }

  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: white;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 70px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + (1.7rem / 2));
    overflow-y: scroll;
    padding: 0 30px 0 0;
    width: 100%;
    box-sizing: content-box;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    padding: 5px 10px;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: white;
    font-weight: bold;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
    color: #ccc;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day {
    cursor: pointer;
  }

  .react-datepicker__day:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }

  .react-datepicker__day--today {
    font-weight: bold;
  }

  .react-datepicker__day--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: #fff;
  }

  .react-datepicker__day--highlighted:hover {
    background-color: #32be3f;
  }

  .react-datepicker__day--highlighted-custom-1 {
    color: magenta;
  }

  .react-datepicker__day--highlighted-custom-2 {
    color: green;
  }

  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
    border-radius: 0.3rem;
    background-color: #216ba5;
    color: #fff;
  }

  .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {
    background-color: #1d5d90;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 0.3rem;
    background-color: #2a87d0;
    color: #fff;
  }

  .react-datepicker__day--keyboard-selected:hover {
    background-color: #1d5d90;
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(33, 107, 165, 0.5);
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #f0f0f0;
    color: #000;
  }

  .react-datepicker__day--disabled {
    cursor: default;
    color: #ccc;
  }

  .react-datepicker__day--disabled:hover {
    background-color: transparent;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }

  .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: #ccc;
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: 0.45rem;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: 1px solid #aeaeae;
  }

  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer;
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc;
  }

  .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
  }

  .react-datepicker__close-icon {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    height: 0;
    outline: 0;
    padding: 0;
    vertical-align: middle;
  }

  .react-datepicker__close-icon::after {
    background-color: #216ba5;
    border-radius: 50%;
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    content: "\00d7";
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 1;
    margin: -8px auto 0;
    padding: 2px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 50%;
  }

  .react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }

  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem;
  }

  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }

  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }

  .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc;
  }

  .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 99;
  }

  .react-datepicker__close-icon::after {
    border-radius: 50%;
    box-sizing: border-box;
    color: #fff;
    content: "x";
    cursor: pointer;
    font-size: 15px;
    height: 16px;
    width: 16px;
    line-height: 1;
    margin: -10px auto 0;
    padding: 0px;
    position: absolute;
    right: 33px;
    -webkit-text-align: center;
    text-align: center;
    top: 50%;
  }

  .react-datepicker-popper {
    z-index: 99;
  }

  .Select-menu-outer {
    z-index: 999 !important;
  }

`;
