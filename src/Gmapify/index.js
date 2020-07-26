import React, { Fragment } from "react";
import styles from "./style.css";
import '../utils/js/index.js';
import dottedRec from '../assets/images/dottedRec.png';
import sliderBackground from '../assets/images/slider-background.svg';

class GMapify extends React.Component {

  render() {
    return (
      <>
        {/* Whiteboard container */}
        <div id="whiteboardContainer" className={styles.whiteboardContainer}>
          &nbsp;
        </div>

        {/* Toolbar */}
        <div
          id="toolbar"
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          <div className={styles.btnGroup}>
            <button
                id="whiteboardLockBtn"
                style={{"backgroundColor": "orange"}}
                title="View and Write"
                type="button"
            >
                <i className="fa fa-lock"></i>
            </button>
            <button id="whiteboardUnlockBtn" title="View Only" type="button">
                <i className="fa fa-lock-open"></i>
            </button>
          </div>

            <div className={`${styles.btnGroup} ${styles.whiteboardEditGroup}`}>
                <button id="whiteboardTrashBtn" title="Clear the whiteboard" type="button">
                    <i className="fa fa-trash"></i>
                </button>
                <button
                    style={{"position": "absolute", "left": "0px", "top": "0px", "width": "46px", "display": "none"}}
                    id="whiteboardTrashBtnConfirm"
                    title="Confirm clear..."
                    type="button"
                >
                    <i className="fa fa-check"></i>
                </button>
                <button id="whiteboardUndoBtn" title="Undo your last step" type="button">
                    <i className="fa fa-undo"></i>
                </button>
                <button id="whiteboardRedoBtn" title="Redo your last undo" type="button">
                    <i className="fa fa-redo"></i>
                </button>
            </div>

            <div className={`${styles.btnGroup} ${styles.whiteboardEditGroup}`}>
                <button tool="mouse" title="Take the mouse" type="button" className={`${styles.whiteboardTool} whiteboard-tool`}>
                    <i className="fa fa-mouse-pointer"></i>
                </button>
                <button
                    style={{"paddingBottom": "11px"}}
                    tool="recSelect"
                    title="Select an area"
                    type="button"
                    className={`${styles.whiteboardTool} whiteboard-tool`}
                >
                    <img src={dottedRec} />
                </button>
                <button
                    tool="pen"
                    title="Take the pen"
                    type="button"
                    className={`${styles.whiteboardTool} active whiteboard-tool`}
                >
                    <i className="fa fa-pencil-alt"></i>
                </button>
                <button
                    style={{"paddingBottom": "8px", "paddingTop": "6px"}}
                    tool="line"
                    title="draw a line"
                    type="button"
                    className={`${styles.whiteboardTool} whiteboard-tool`}
                >
                    ╱
                </button>
                <button tool="rect" title="draw a rectangle" type="button" className={`${styles.whiteboardTool} whiteboard-tool`}>
                    <i className="far fa-square"></i>
                </button>
                <button tool="circle" title="draw a circle" type="button" className={`${styles.whiteboardTool} whiteboard-tool`}>
                    <i className="far fa-circle"></i>
                </button>
                <button tool="text" title="write text" type="button" className={`${styles.whiteboardTool} whiteboard-tool`}>
                    <i className="fas fa-font"></i>
                </button>
                <button tool="eraser" title="take the eraser" type="button" className={`${styles.whiteboardTool} whiteboard-tool`}>
                    <i className="fa fa-eraser"></i>
                </button>
            </div>

            <div className={`${styles.btnGroup} ${styles.whiteboardEditGroup}`}>
                <button style={{"width": "190px", "cursor": "default"}}>
                    <div
                        className="activeToolIcon"
                        style={{"position": "absolute", "top": "2px", "left": "2px", "fontSize": "0.6em"}}
                    >
                        <i className="fa fa-pencil-alt"></i>
                    </div>
                    <img
                        style={{"position": "absolute",
                            "left": "11px",
                            "top": "16px",
                            "height": "14px",
                            "width": "130px"
                        }}
                        src={sliderBackground}
                    />
                    <input
                        title="Thickness"
                        id="whiteboardThicknessSlider"
                        style={{"position": "absolute", "left": "9px", "width": "130px", "top": "15px"}}
                        type="range"
                        min="1"
                        max="50"
                        value="3"
                    />
                    <div
                        id="whiteboardColorpicker"
                        style={{"position": "absolute",
                            "left": "155px",
                            "top": "10px",
                            "width": "26px",
                            "height": "23px",
                            "borderRadius": "3px",
                            "border": "1px solid darkgrey"
                        }}
                        data-color="#000000"
                    ></div>
                </button>
            </div>

            <div className={`${styles.btnGroup} ${styles.whiteboardEditGroup}`}>
                <button id="addImgToCanvasBtn" title="Upload Image to whiteboard" type="button">
                    <i className="fas fa-image"></i>
                    <i
                        style={{"position": "absolute",
                            "top": "3px",
                            "left": "2px",
                            "color": "#000000",
                            "fontSize": "0.5em"
                        }}
                        className="fas fa-upload"
                    ></i>
                </button>

                <button
                    style={{"position": "relative"}}
                    id="uploadJsonBtn"
                    title="Load saved JSON to whiteboard"
                    type="button"
                >
                    <i className="far fa-file-alt"></i>
                    <i
                        style={{"position": "absolute",
                            "top": "3px",
                            "left": "2px",
                            "color": "#000000",
                            "fontSize": "0.5em"
                        }}
                        className="fas fa-upload"
                    ></i>
                </button>

                <input style={{"display": "none"}} id="myFile" type="file" />
            </div>

            <div className={styles.btnGroup}>
                <button id="saveAsImageBtn" title="Save whiteboard as image" type="button">
                    <i className="fas fa-image"></i>
                    <i
                        style={{"position": "absolute",
                            "top": "3px",
                            "left": "2px",
                            "color": "#000000",
                            "fontSize": "0.5em"
                        }}
                        className="fas fa-save"
                    ></i>
                </button>
                <button
                    style={{"position": "relative", "display": "none"}}
                    id="uploadWebDavBtn"
                    title="Save whiteboard to webdav"
                    type="button"
                >
                    <i className="fas fa-globe"></i>
                    <i
                        style={{"position": "absolute",
                            "top": "3px",
                            "left": "2px",
                            "color": "#000000",
                            "fontSize": "0.5em"
                        }}
                        className="fas fa-save"
                    ></i>
                </button>
                <button
                    style={{"position": "relative"}}
                    id="saveAsJSONBtn"
                    title="Save whiteboard as JSON"
                    type="button"
                >
                    <i className="far fa-file-alt"></i>
                    <i
                        style={{"position": "absolute",
                            "top": "3px",
                            "left": "2px",
                            "color": "#000000",
                            "fontSize": "0.5em"
                        }}
                        className="fas fa-save"
                    ></i>
                </button>

                <button id="shareWhiteboardBtn" title="share whiteboard" type="button">
                    <i className="fas fa-share-square"></i>
                </button>

                <button id="displayWhiteboardInfoBtn" title="Show whiteboard info" type="button">
                    <i className="fas fa-info-circle"></i>
                </button>
            </div>

            <div className={`${styles.btnGroup} minGroup`}>
                <button
                    style={{"width": "25px", "padding": "11px 11px"}}
                    id="minMaxBtn"
                    title="hide buttons"
                    type="button"
                >
                    <i
                        id="minBtn"
                        style={{"position": "relative", "left": "-5px"}}
                        className="fas fa-angle-left"
                    ></i>
                    <i
                        id="maxBtn"
                        style={{"position": "relative", "left": "-5px", "display": "none"}}
                        className="fas fa-angle-right"
                    ></i>
                </button>
            </div>
        </div>

        <div id="whiteboardInfoContainer">
            <p><b>Whiteboard information:</b></p>
            <p># connected users: <i id="connectedUsersCount">0</i></p>
            <p>Smallest screen resolution: <i id="smallestScreenResolution">Unknown.</i></p>
            <p># msg. sent to server: <i id="messageSentCount">0</i></p>
            <p># msg. received from server: <i id="messageReceivedCount">0</i></p>
        </div>

        <div id="shareWhiteboardDialog" className={styles.displayNone}>
            <div className={styles.shareWhiteboardDialogContent}>
                <button
                    className="shareWhiteboardDialogItem"
                    id="shareWhiteboardDialogCopyReadOnlyLink"
                >
                    <i className="fa fa-lock"></i>&nbsp;Share read-only link
                </button>
                <button
                    className={`${styles.shareWhiteboardDialogItem} ${styles.displayNone}`}
                    id="shareWhiteboardDialogCopyReadWriteLink"
                >
                    <i className="fa fa-lock-open"></i>&nbsp;Share read/write link
                </button>
                <button className={styles.shareWhiteboardDialogItem} id="shareWhiteboardDialogGoBack">
                    <b>Go back to the whiteboard</b>
                </button>
                <p
                    className={`${styles.shareWhiteboardDialogItem} ${styles.displayNone}`}
                    id="shareWhiteboardDialogMessage"
                ></p>
            </div>
        </div>
      </>
    );
  }
};

export default GMapify;
