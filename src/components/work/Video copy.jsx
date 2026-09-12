import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = () => {
  return (
    <div className='video' id='video'>
      <div className='videoPlayer js-videoPlayer'>
        <div className='videoPlayer_inner js-videoPlayer_inner'>
          <div
            data-src='video/reel.mp4'
            data-src-mobile='video/reel-mobile.mp4'
            data-poster-mobile='images/reel-mobile-poster.jpg'
            data-poster='images/reel-poster.jpg'
            preload='auto'
            loop='true'
            muted='true'
            playsinline='true'
            id='videoPlayer'
            tabIndex='-1'
            role='region'
            className='vjs-paused videoPlayer-dimensions vjs-fluid vjs-controls-enabled vjs-workinghover vjs-v8 vjs-user-active is-ready'
            lang='en'
            translate='no'
            aria-label='Video Player'
          >
            <video
              id='videoPlayer_html5_api'
              playsInline='playsinline'
              muted='muted'
              loop=''
              preload='auto'
              data-poster='images/reel-poster.jpg'
              data-poster-mobile='images/reel-mobile-poster.jpg'
              data-src-mobile='video/reel-mobile.mp4'
              data-src='video/reel.mp4'
              tabIndex='-1'
              role='application'
              className='vjs-tech'
              poster='images/reel-poster.jpg'
              src='video/reel.mp4'
            ></video>
            <picture className='vjs-poster' tabIndex='-1' aria-disabled='false'>
              <img loading='lazy' alt='' src='images/reel-poster.jpg' />
            </picture>
            <div className='vjs-title-bar vjs-hidden'>
              <div
                className='vjs-title-bar-title'
                id='vjs-title-bar-title-91'
              ></div>
              <div
                className='vjs-title-bar-description'
                id='vjs-title-bar-description-92'
              ></div>
            </div>
            <div
              className='vjs-text-track-display'
              translate='yes'
              aria-live='off'
              aria-atomic='true'
            ></div>
            <div className='vjs-loading-spinner' dir='ltr'>
              <span className='vjs-control-text'>Video Player is loading.</span>
            </div>
            <button
              className='vjs-big-play-button'
              type='button'
              title='Play Video'
              aria-disabled='false'
            >
              <span className='vjs-icon-placeholder' aria-hidden='true'></span>
              <span className='vjs-control-text' aria-live='polite'>
                Play Video
              </span>
            </button>
            <div className='vjs-control-bar' dir='ltr'>
              <button
                className='vjs-play-control vjs-control vjs-button'
                type='button'
                title=''
                aria-disabled='false'
              >
                <span
                  className='vjs-icon-placeholder'
                  aria-hidden='true'
                ></span>
                <span className='vjs-control-text' aria-live='polite'>
                  Play
                </span>
                <span className='icon'>
                  <img
                    src='icons/cs-pause.svg'
                    className='icon-pause'
                    alt='icon-pause'
                  />
                  <img
                    src='icons/cs-player.svg'
                    className='icon-play'
                    alt='icon-play'
                  />
                </span>
              </button>
              <div className='vjs-volume-panel vjs-control vjs-volume-panel-horizontal'>
                <button
                  className='vjs-mute-control vjs-control vjs-button vjs-vol-0'
                  type='button'
                  title='Unmute'
                  aria-disabled='false'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Unmute
                  </span>
                </button>
                <div className='vjs-volume-control vjs-control vjs-volume-horizontal'>
                  <div
                    tabIndex='0'
                    className='vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal'
                    role='slider'
                    aria-valuenow='0'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    aria-label='Volume Level'
                    aria-live='polite'
                    aria-valuetext='0%'
                  >
                    <div className='vjs-mouse-display'>
                      <div
                        className='vjs-volume-tooltip'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div className='vjs-volume-level'>
                      <span className='vjs-control-text'></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='vjs-current-time vjs-time-control vjs-control'>
                <span className='vjs-control-text' role='presentation'>
                  Current Time&nbsp;
                </span>
                <span
                  className='vjs-current-time-display'
                  aria-live='off'
                  role='presentation'
                >
                  0:00
                </span>
              </div>
              <div
                className='vjs-time-control vjs-time-divider'
                aria-hidden='true'
              >
                <div>
                  <span>/</span>
                </div>
              </div>
              <div className='vjs-duration vjs-time-control vjs-control'>
                <span className='vjs-control-text' role='presentation'>
                  Duration&nbsp;
                </span>
                <span
                  className='vjs-duration-display'
                  aria-live='off'
                  role='presentation'
                >
                  1:03
                </span>
              </div>
              <div className='vjs-progress-control vjs-control'>
                <div
                  tabIndex='0'
                  className='vjs-progress-holder vjs-slider vjs-slider-horizontal'
                  role='slider'
                  aria-valuenow='0.00'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  aria-label='Progress Bar'
                  aria-valuetext='0:00 of 1:03'
                >
                  <div className='vjs-load-progress' style='width: 30.2%'>
                    <span className='vjs-control-text'>
                      <span>Loaded</span>:
                      <span className='vjs-control-text-loaded-percentage'>
                        30.20%
                      </span>
                    </span>
                    <div
                      data-start='0'
                      data-end='19.114'
                      style='left: 0%; width: 100%'
                    ></div>
                  </div>
                  <div className='vjs-mouse-display'>
                    <div className='vjs-time-tooltip' aria-hidden='true'></div>
                  </div>
                  <div
                    className='vjs-play-progress vjs-slider-bar'
                    aria-hidden='true'
                    style='width: 0%'
                  >
                    <div
                      className='vjs-time-tooltip'
                      aria-hidden='true'
                      style='right: 0px'
                    >
                      0:00
                    </div>
                  </div>
                </div>
              </div>
              <div className='vjs-live-control vjs-control vjs-hidden'>
                <div className='vjs-live-display' aria-live='off'>
                  <span className='vjs-control-text'>Stream Type&nbsp;</span>
                  LIVE
                </div>
              </div>
              <button
                className='vjs-seek-to-live-control vjs-control'
                type='button'
                title='Seek to live, currently behind live'
                aria-disabled='false'
              >
                <span
                  className='vjs-icon-placeholder'
                  aria-hidden='true'
                ></span>
                <span className='vjs-control-text' aria-live='polite'>
                  Seek to live, currently behind live
                </span>
                <span className='vjs-seek-to-live-text' aria-hidden='true'>
                  LIVE
                </span>
              </button>
              <div className='vjs-remaining-time vjs-time-control vjs-control'>
                <span className='vjs-control-text' role='presentation'>
                  Remaining Time&nbsp;
                </span>
                <span aria-hidden='true'>-</span>
                <span
                  className='vjs-remaining-time-display'
                  aria-live='off'
                  role='presentation'
                >
                  1:03
                </span>
              </div>
              <div className='vjs-custom-control-spacer vjs-spacer'>&nbsp;</div>
              <div className='vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden'>
                <div
                  className='vjs-playback-rate-value'
                  id='vjs-playback-rate-value-label-videoPlayer_component_328'
                >
                  1x
                </div>
                <button
                  className='vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button'
                  type='button'
                  aria-disabled='false'
                  title='Playback Rate'
                  aria-haspopup='true'
                  aria-expanded='false'
                  aria-describedby='vjs-playback-rate-value-label-videoPlayer_component_328'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Playback Rate
                  </span>
                </button>
                <div className='vjs-menu'>
                  <ul className='vjs-menu-content'></ul>
                </div>
              </div>
              <div className='vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden'>
                <button
                  className='vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button'
                  type='button'
                  aria-disabled='false'
                  title='Chapters'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Chapters
                  </span>
                </button>
                <div className='vjs-menu'>
                  <ul className='vjs-menu-content'>
                    <li className='vjs-menu-title' tabIndex='-1'>
                      Chapters
                    </li>
                  </ul>
                </div>
              </div>
              <div className='vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden'>
                <button
                  className='vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button'
                  type='button'
                  aria-disabled='false'
                  title='Descriptions'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Descriptions
                  </span>
                </button>
                <div className='vjs-menu'>
                  <ul className='vjs-menu-content'>
                    <li
                      className='vjs-menu-item vjs-selected'
                      tabIndex='-1'
                      role='menuitemradio'
                      aria-disabled='false'
                      aria-checked='true'
                    >
                      <span className='vjs-menu-item-text'>
                        descriptions off
                      </span>
                      <span className='vjs-control-text' aria-live='polite'>
                        , selected
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden'>
                <button
                  className='vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button'
                  type='button'
                  aria-disabled='false'
                  title='Captions'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Captions
                  </span>
                </button>
                <div className='vjs-menu'>
                  <ul className='vjs-menu-content'>
                    <li
                      className='vjs-menu-item vjs-texttrack-settings'
                      tabIndex='-1'
                      role='menuitem'
                      aria-disabled='false'
                    >
                      <span className='vjs-menu-item-text'>
                        captions settings
                      </span>
                      <span className='vjs-control-text' aria-live='polite'>
                        , opens captions settings dialog
                      </span>
                    </li>
                    <li
                      className='vjs-menu-item vjs-selected'
                      tabIndex='-1'
                      role='menuitemradio'
                      aria-disabled='false'
                      aria-checked='true'
                    >
                      <span className='vjs-menu-item-text'>captions off</span>
                      <span className='vjs-control-text' aria-live='polite'>
                        , selected
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden'>
                <button
                  className='vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button'
                  type='button'
                  aria-disabled='false'
                  title='Audio Track'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span
                    className='vjs-icon-placeholder'
                    aria-hidden='true'
                  ></span>
                  <span className='vjs-control-text' aria-live='polite'>
                    Audio Track
                  </span>
                </button>
                <div className='vjs-menu'>
                  <ul className='vjs-menu-content'></ul>
                </div>
              </div>
              <button
                className='vjs-picture-in-picture-control vjs-control vjs-button'
                type='button'
                title='Picture-in-Picture'
                aria-disabled='false'
              >
                <span
                  className='vjs-icon-placeholder'
                  aria-hidden='true'
                ></span>
                <span className='vjs-control-text' aria-live='polite'>
                  Picture-in-Picture
                </span>
              </button>
              <button
                className='vjs-fullscreen-control vjs-control vjs-button'
                type='button'
                title=''
                aria-disabled='false'
              >
                <span
                  className='vjs-icon-placeholder'
                  aria-hidden='true'
                ></span>
                <span className='vjs-control-text' aria-live='polite'>
                  Fullscreen
                </span>
                <span className='icon'>
                  <img
                    src='icons/cs-remove.svg'
                    className='icon-expend'
                    alt='icon-expend'
                  />
                  <img
                    src='icons/cs-remove.svg'
                    className='icon-close'
                    alt='icon-close'
                  />
                </span>
              </button>
            </div>
            <div
              className='vjs-error-display vjs-modal-dialog vjs-hidden'
              tabIndex='-1'
              aria-describedby='videoPlayer_component_546_description'
              aria-hidden='true'
              aria-label='Modal Window'
              role='dialog'
            >
              <p
                className='vjs-modal-dialog-description vjs-control-text'
                id='videoPlayer_component_546_description'
              >
                This is a modal window.
              </p>
              <div className='vjs-modal-dialog-content' role='document'></div>
            </div>
            <div
              className='vjs-modal-dialog vjs-hidden vjs-text-track-settings'
              tabIndex='-1'
              aria-describedby='videoPlayer_component_552_description'
              aria-hidden='true'
              aria-label='Caption Settings Dialog'
              role='dialog'
            >
              <p
                className='vjs-modal-dialog-description vjs-control-text'
                id='videoPlayer_component_552_description'
              >
                Beginning of dialog window. Escape will cancel and close the
                window.
              </p>
              <div className='vjs-modal-dialog-content' role='document'>
                <div className='vjs-track-settings-colors'>
                  <fieldset className='vjs-fg-color vjs-track-setting'>
                    <legend id='captions-text-legend-videoPlayer_component_552'>
                      Text
                    </legend>
                    <label
                      id='captions-foreground-color-videoPlayer_component_552'
                      className='vjs-label'
                    >
                      Color
                    </label>
                    <select aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552'>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-White'
                        value='#FFF'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-White'
                      >
                        White
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Black'
                        value='#000'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Black'
                      >
                        Black
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Red'
                        value='#F00'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Red'
                      >
                        Red
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Green'
                        value='#0F0'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Green'
                      >
                        Green
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Blue'
                        value='#00F'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Blue'
                      >
                        Blue
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Yellow'
                        value='#FF0'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Yellow'
                      >
                        Yellow
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Magenta'
                        value='#F0F'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Magenta'
                      >
                        Magenta
                      </option>
                      <option
                        id='captions-foreground-color-videoPlayer_component_552-Cyan'
                        value='#0FF'
                        aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552 captions-foreground-color-videoPlayer_component_552-Cyan'
                      >
                        Cyan
                      </option>
                    </select>
                    <span className='vjs-text-opacity vjs-opacity'>
                      <label
                        id='captions-foreground-opacity-videoPlayer_component_552'
                        className='vjs-label'
                      >
                        Transparency
                      </label>
                      <select aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-opacity-videoPlayer_component_552'>
                        <option
                          id='captions-foreground-opacity-videoPlayer_component_552-Opaque'
                          value='1'
                          aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-opacity-videoPlayer_component_552 captions-foreground-opacity-videoPlayer_component_552-Opaque'
                        >
                          Opaque
                        </option>
                        <option
                          id='captions-foreground-opacity-videoPlayer_component_552-SemiTransparent'
                          value='0.5'
                          aria-labelledby='captions-text-legend-videoPlayer_component_552 captions-foreground-opacity-videoPlayer_component_552 captions-foreground-opacity-videoPlayer_component_552-SemiTransparent'
                        >
                          Semi-Transparent
                        </option>
                      </select>
                    </span>
                  </fieldset>
                  <fieldset className='vjs-bg-color vjs-track-setting'>
                    <legend id='captions-background-videoPlayer_component_552'>
                      Background
                    </legend>
                    <label
                      id='captions-background-color-videoPlayer_component_552'
                      className='vjs-label'
                    >
                      Color
                    </label>
                    <select aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552'>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Black'
                        value='#000'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Black'
                      >
                        Black
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-White'
                        value='#FFF'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-White'
                      >
                        White
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Red'
                        value='#F00'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Red'
                      >
                        Red
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Green'
                        value='#0F0'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Green'
                      >
                        Green
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Blue'
                        value='#00F'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Blue'
                      >
                        Blue
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Yellow'
                        value='#FF0'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Yellow'
                      >
                        Yellow
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Magenta'
                        value='#F0F'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Magenta'
                      >
                        Magenta
                      </option>
                      <option
                        id='captions-background-color-videoPlayer_component_552-Cyan'
                        value='#0FF'
                        aria-labelledby='captions-background-videoPlayer_component_552 captions-background-color-videoPlayer_component_552 captions-background-color-videoPlayer_component_552-Cyan'
                      >
                        Cyan
                      </option>
                    </select>
                    <span className='vjs-bg-opacity vjs-opacity'>
                      <label
                        id='captions-background-opacity-videoPlayer_component_552'
                        className='vjs-label'
                      >
                        Transparency
                      </label>
                      <select aria-labelledby='captions-background-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552'>
                        <option
                          id='captions-background-opacity-videoPlayer_component_552-Opaque'
                          value='1'
                          aria-labelledby='captions-background-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552-Opaque'
                        >
                          Opaque
                        </option>
                        <option
                          id='captions-background-opacity-videoPlayer_component_552-SemiTransparent'
                          value='0.5'
                          aria-labelledby='captions-background-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552-SemiTransparent'
                        >
                          Semi-Transparent
                        </option>
                        <option
                          id='captions-background-opacity-videoPlayer_component_552-Transparent'
                          value='0'
                          aria-labelledby='captions-background-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552 captions-background-opacity-videoPlayer_component_552-Transparent'
                        >
                          Transparent
                        </option>
                      </select>
                    </span>
                  </fieldset>
                  <fieldset className='vjs-window-color vjs-track-setting'>
                    <legend id='captions-window-videoPlayer_component_552'>
                      Window
                    </legend>
                    <label
                      id='captions-window-color-videoPlayer_component_552'
                      className='vjs-label'
                    >
                      Color
                    </label>
                    <select aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552'>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Black'
                        value='#000'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Black'
                      >
                        Black
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-White'
                        value='#FFF'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-White'
                      >
                        White
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Red'
                        value='#F00'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Red'
                      >
                        Red
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Green'
                        value='#0F0'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Green'
                      >
                        Green
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Blue'
                        value='#00F'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Blue'
                      >
                        Blue
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Yellow'
                        value='#FF0'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Yellow'
                      >
                        Yellow
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Magenta'
                        value='#F0F'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Magenta'
                      >
                        Magenta
                      </option>
                      <option
                        id='captions-window-color-videoPlayer_component_552-Cyan'
                        value='#0FF'
                        aria-labelledby='captions-window-videoPlayer_component_552 captions-window-color-videoPlayer_component_552 captions-window-color-videoPlayer_component_552-Cyan'
                      >
                        Cyan
                      </option>
                    </select>
                    <span className='vjs-window-opacity vjs-opacity'>
                      <label
                        id='captions-window-opacity-videoPlayer_component_552'
                        className='vjs-label'
                      >
                        Transparency
                      </label>
                      <select aria-labelledby='captions-window-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552'>
                        <option
                          id='captions-window-opacity-videoPlayer_component_552-Transparent'
                          value='0'
                          aria-labelledby='captions-window-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552-Transparent'
                        >
                          Transparent
                        </option>
                        <option
                          id='captions-window-opacity-videoPlayer_component_552-SemiTransparent'
                          value='0.5'
                          aria-labelledby='captions-window-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552-SemiTransparent'
                        >
                          Semi-Transparent
                        </option>
                        <option
                          id='captions-window-opacity-videoPlayer_component_552-Opaque'
                          value='1'
                          aria-labelledby='captions-window-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552 captions-window-opacity-videoPlayer_component_552-Opaque'
                        >
                          Opaque
                        </option>
                      </select>
                    </span>
                  </fieldset>
                </div>
                <div className='vjs-track-settings-font'>
                  <fieldset className='vjs-font-percent vjs-track-setting'>
                    <legend
                      id='captions-font-size-videoPlayer_component_552'
                      className=''
                    >
                      Font Size
                    </legend>
                    <select aria-labelledby='captions-font-size-videoPlayer_component_552'>
                      <option
                        id='captions-font-size-videoPlayer_component_552-50'
                        value='0.50'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-50'
                      >
                        50%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-75'
                        value='0.75'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-75'
                      >
                        75%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-100'
                        value='1.00'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-100'
                      >
                        100%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-125'
                        value='1.25'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-125'
                      >
                        125%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-150'
                        value='1.50'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-150'
                      >
                        150%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-175'
                        value='1.75'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-175'
                      >
                        175%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-200'
                        value='2.00'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-200'
                      >
                        200%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-300'
                        value='3.00'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-300'
                      >
                        300%
                      </option>
                      <option
                        id='captions-font-size-videoPlayer_component_552-400'
                        value='4.00'
                        aria-labelledby='captions-font-size-videoPlayer_component_552 captions-font-size-videoPlayer_component_552-400'
                      >
                        400%
                      </option>
                    </select>
                  </fieldset>
                  <fieldset className='vjs-edge-style vjs-track-setting'>
                    <legend id='videoPlayer_component_552' className=''>
                      Text Edge Style
                    </legend>
                    <select aria-labelledby='videoPlayer_component_552'>
                      <option
                        id='videoPlayer_component_552-None'
                        value='none'
                        aria-labelledby='videoPlayer_component_552 videoPlayer_component_552-None'
                      >
                        None
                      </option>
                      <option
                        id='videoPlayer_component_552-Raised'
                        value='raised'
                        aria-labelledby='videoPlayer_component_552 videoPlayer_component_552-Raised'
                      >
                        Raised
                      </option>
                      <option
                        id='videoPlayer_component_552-Depressed'
                        value='depressed'
                        aria-labelledby='videoPlayer_component_552 videoPlayer_component_552-Depressed'
                      >
                        Depressed
                      </option>
                      <option
                        id='videoPlayer_component_552-Uniform'
                        value='uniform'
                        aria-labelledby='videoPlayer_component_552 videoPlayer_component_552-Uniform'
                      >
                        Uniform
                      </option>
                      <option
                        id='videoPlayer_component_552-Dropshadow'
                        value='dropshadow'
                        aria-labelledby='videoPlayer_component_552 videoPlayer_component_552-Dropshadow'
                      >
                        Dropshadow
                      </option>
                    </select>
                  </fieldset>
                  <fieldset className='vjs-font-family vjs-track-setting'>
                    <legend
                      id='captions-font-family-videoPlayer_component_552'
                      className=''
                    >
                      Font Family
                    </legend>
                    <select aria-labelledby='captions-font-family-videoPlayer_component_552'>
                      <option
                        id='captions-font-family-videoPlayer_component_552-ProportionalSansSerif'
                        value='proportionalSansSerif'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-ProportionalSansSerif'
                      >
                        Proportional Sans-Serif
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-MonospaceSansSerif'
                        value='monospaceSansSerif'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-MonospaceSansSerif'
                      >
                        Monospace Sans-Serif
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-ProportionalSerif'
                        value='proportionalSerif'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-ProportionalSerif'
                      >
                        Proportional Serif
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-MonospaceSerif'
                        value='monospaceSerif'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-MonospaceSerif'
                      >
                        Monospace Serif
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-Casual'
                        value='casual'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-Casual'
                      >
                        Casual
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-Script'
                        value='script'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-Script'
                      >
                        Script
                      </option>
                      <option
                        id='captions-font-family-videoPlayer_component_552-SmallCaps'
                        value='small-caps'
                        aria-labelledby='captions-font-family-videoPlayer_component_552 captions-font-family-videoPlayer_component_552-SmallCaps'
                      >
                        Small Caps
                      </option>
                    </select>
                  </fieldset>
                </div>
                <div className='vjs-track-settings-controls'>
                  <button
                    type='button'
                    className='vjs-default-button'
                    title='restore all settings to the default values'
                  >
                    Reset
                    <span className='vjs-control-text'>
                      restore all settings to the default values
                    </span>
                  </button>
                  <button type='button' className='vjs-done-button'>
                    Done
                  </button>
                </div>
              </div>
              <button
                className='vjs-close-button vjs-control vjs-button'
                type='button'
                title='Close Modal Dialog'
                aria-disabled='false'
              >
                <span
                  className='vjs-icon-placeholder'
                  aria-hidden='true'
                ></span>
                <span className='vjs-control-text' aria-live='polite'>
                  Close Modal Dialog
                </span>
              </button>
              <p className='vjs-control-text'>End of dialog window.</p>
            </div>
            <button className='js-btnBigPlay videoPlayer_btn'>
              <img src='icons/ic-play.svg' alt='icon-play' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
