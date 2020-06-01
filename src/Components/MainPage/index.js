import React from "react";
import { FormGroup, Label } from "reactstrap";

const initialState = {
  toptext: "",
  bottomtext: "",
  watermark: "",
  isTopDragging: false,
  isBottomDragging: false,
  isWatermarkDragging: false,
  topY: "10%",
  topX: "50%",
  bottomX: "50%",
  bottomY: "90%",
  watermarkX: "25%",
  watermarkY: "45%",
  fontSize: 50,
  opacity: 0.5,
  watermarkColor: "#FFFFFF",
  watermarkSize: 25,
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagebase64: null,
      ...initialState,
    };
  }

  convertToBase64 = (blob) => {
    const reader = new FileReader();
    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = () => {
        var ratio = image.height / image.width;
        image.width = 400;
        image.height = 400 * ratio;
        this.setState(() => ({
          currentImagebase64: image.src,
          newHeight: image.height,
          newWidth: image.width,
          ...initialState,
        }));
      };
    };
    reader.readAsDataURL(blob);
  };

  openImage = (event) => {
    URL.createObjectURL(event.target.files[0]);
    const newblob = event.target.files[0];
    this.convertToBase64(newblob);
  };

  changeWatermarkColor = (event) => {
    this.setState({
      watermarkColor: event.target.value,
    });
  };

  changeFontSize = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  changeWatermarkSize = (event) => {
    this.setState({
      watermarkFontSize: event.target.value,
    });
  };

  changeOpacity = (event) => {
    this.setState({
      opacity: event.target.value / 100,
    });
  };

  changeText = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  getStateObj = (e, type) => {
    let rect = this.imageRef.getBoundingClientRect();
    const xOffset = e.clientX - rect.left;
    const yOffset = e.clientY - rect.top;
    let stateObj = {};
    if (type === "bottom") {
      stateObj = {
        isBottomDragging: true,
        isTopDragging: false,
        isWatermarkDragging: false,
        bottomX: `${xOffset}px`,
        bottomY: `${yOffset}px`,
      };
    } else if (type === "top") {
      stateObj = {
        isTopDragging: true,
        isBottomDragging: false,
        isWatermarkDragging: false,
        topX: `${xOffset}px`,
        topY: `${yOffset}px`,
      };
    } else if (type === "watermark") {
      stateObj = {
        isTopDragging: false,
        isBottomDragging: false,
        isWatermarkDragging: true,
        watermarkX: `${xOffset}px`,
        watermarkY: `${yOffset}px`,
      };
    }
    return stateObj;
  };

  handleMouseDown = (e, type) => {
    const stateObj = this.getStateObj(e, type);
    document.addEventListener("mousemove", (event) =>
      this.handleMouseMove(event, type)
    );
    this.setState({
      ...stateObj,
    });
  };

  handleMouseMove = (e, type) => {
    if (
      this.state.isTopDragging ||
      this.state.isBottomDragging ||
      this.state.isWatermarkDragging
    ) {
      let stateObj = {};
      if (type === "bottom" && this.state.isBottomDragging) {
        stateObj = this.getStateObj(e, type);
      } else if (type === "top" && this.state.isTopDragging) {
        stateObj = this.getStateObj(e, type);
      } else if (type === "watermark" && this.state.isWatermarkDragging) {
        stateObj = this.getStateObj(e, type);
      }
      this.setState({
        ...stateObj,
      });
    }
  };

  handleMouseUp = (event) => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.setState({
      isTopDragging: false,
      isBottomDragging: false,
      isWatermarkDragging: false,
    });
  };

  convertSvgToImage = () => {
    const svg = this.svgRef;
    let svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
    );
    img.onload = function() {
      canvas.getContext("2d").drawImage(img, 0, 0);
      const canvasdata = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = "meme.png";
      a.href = canvasdata;
      document.body.appendChild(a);
      a.click();
    };
  };

  render() {
    const textStyle = {
      fontFamily: "Impact",
      fontSize: `${this.state.fontSize}px`,
      textTransform: "uppercase",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none",
    };

    const watermarkStyle = {
      fontFamily: "Arial",
      fontSize: `${this.state.watermarkFontSize}px`,
      userSelect: "none",
      opacity: `${this.state.opacity}`,
      fill: `${this.state.watermarkColor}`,
    };


    return (
      <div className="ui raised very padded text container segment">
        <div className="ui two column centered grid">
          <div className="column">
            <input
              type="file"
              id="image"
              alt="Select Image"
              onChange={(e) => this.openImage(e)}
            ></input>
          </div>
          <div className=" four column center row">
            <div className="column">
              <FormGroup>
                <Label for="toptext">Top Text</Label>
                <input
                  className="form-control"
                  type="text"
                  name="toptext"
                  id="toptext"
                  placeholder="Add text to the top"
                  onChange={this.changeText}
                />
              </FormGroup>

              <FormGroup>
                <Label for="bottomtext">Bottom Text</Label>
                <input
                  className="form-control"
                  type="text"
                  name="bottomtext"
                  id="bottomtext"
                  placeholder="Add text to the bottom"
                  onChange={this.changeText}
                />
              </FormGroup>
            </div>
            <div className="column">
              <FormGroup>
                <Label for="resizebottomtext">Top Text Size</Label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  name="resizebottom text"
                  onChange={this.changeFontSize}
                />
              </FormGroup>

              <FormGroup>
                <Label for="resizebottomtext"> Bottom Text Size</Label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  name="resizebottom text"
                  onChange={this.changeFontSize}
                />
              </FormGroup>
            </div>
          </div>
          <div className=" four column center row">
            <div className="column">
              <FormGroup>
                <input
                  className="form-control"
                  type="text"
                  name="watermark"
                  id="watermark"
                  placeholder="Add watermark"
                  onChange={this.changeText}
                />
              </FormGroup>
            </div>
            <div className="column">
                <button
                  onClick={this.changeWatermarkColor}
                  value="#FFFFFF"
                  className="ui basic button"
                >
                  White
                </button>

                <button
                  onClick={this.changeWatermarkColor}
                  value="#000000"
                  className="ui secondary button"
                >
                  Black
                </button>
              </div>
            <div className="column">
              <p>Watermark Opacity</p>
              <input
                type="range"
                min="0"
                max="100"
                onChange={this.changeOpacity}
              />

              <p>Watermark Size</p>
              <input
                type="range"
                min="0"
                max="100"
                onChange={this.changeWatermarkSize}
              />

              
            </div></div>
            <div className=" four column center row">
              <div className="column">
              <button
                onClick={() => this.convertSvgToImage()}
                className="ui button primary"
              >
                Download Meme!
              </button>
            </div>
        </div>
        

          <svg
            width={this.state.newWidth}
            height={this.state.newHeight}
            id="svg_ref"
            ref={(el) => {
              this.svgRef = el;
            }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <image
              ref={(el) => {
                this.imageRef = el;
              }}
              href={this.state.currentImagebase64}
              width={this.state.newWidth}
              height={this.state.newHeight}
            />
            <text
              style={{
                ...textStyle,
                zIndex: this.state.isTopDragging ? 4 : 1,
              }}
              x={this.state.topX}
              y={this.state.topY}
              dominantBaseline="middle"
              textAnchor="middle"
              onMouseDown={(event) => this.handleMouseDown(event, "top")}
              onMouseUp={(event) => this.handleMouseUp(event, "top")}
            >
              {this.state.toptext}
            </text>
            <text
              style={textStyle}
              dominantBaseline="middle"
              textAnchor="middle"
              x={this.state.bottomX}
              y={this.state.bottomY}
              onMouseDown={(event) => this.handleMouseDown(event, "bottom")}
              onMouseUp={(event) => this.handleMouseUp(event, "bottom")}
            >
              {this.state.bottomtext}
            </text>

            <text
              style={watermarkStyle}
              dominantBaseline="middle"
              textAnchor="middle"
              x={this.state.watermarkX}
              y={this.state.watermarkY}
              onMouseDown={(event) => this.handleMouseDown(event, "watermark")}
              onMouseUp={(event) => this.handleMouseUp(event, "watermark")}
            >
              {this.state.watermark}
            </text>
          </svg>
        </div>
      </div>
    );
  }
}

export default MainPage;
