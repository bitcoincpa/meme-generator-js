import React from 'react'

export const Watermark = () => {1
    ]ç
    return (
        <div>
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
        </div>
    )
}
