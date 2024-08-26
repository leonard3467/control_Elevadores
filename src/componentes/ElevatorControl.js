import React, { useState } from 'react';
import './ElevatorControl.css';

function ElevatorControl({ id }) {
    const [color, setColor] = useState('#808080');
  
    const handleColorChange = (newColor) => {
      setColor(newColor === color ? '#808080' : newColor); // Cambia el color o vuelve a gris si se hace clic en el mismo color
    };
  
    const svgData = `
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="120px" height="120px" viewBox="0 0 581.000000 490.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,490.000000) scale(0.100000,-0.100000)"
      fill="${color}" stroke="none">
          <path d="M2840 4655 c-14 -8 -36 -14 -49 -15 -32 0 -203 -84 -260 -127 -72
          -55 -139 -124 -173 -178 -85 -135 -138 -270 -138 -350 0 -84 -1 -85 -242 -85
          -186 0 -206 -2 -221 -18 -16 -17 -17 -153 -17 -1753 0 -1336 -3 -1738 -12
          -1747 -9 -9 -73 -12 -228 -12 -228 0 -256 -5 -248 -46 3 -19 32 -19 1753 -22
          963 -1 1760 0 1773 3 15 4 22 13 22 29 0 32 -29 36 -274 36 -178 0 -200 2
          -212 18 -11 14 -13 325 -14 1753 0 1336 -3 1738 -12 1747 -9 9 -70 12 -214 12
          -167 0 -204 3 -214 15 -7 8 -18 43 -25 77 -27 128 -61 220 -99 271 -14 18 -26
          39 -26 46 0 16 -64 94 -119 145 -40 37 -61 53 -116 88 -11 7 -31 21 -44 31
          -13 9 -30 17 -37 17 -7 0 -37 11 -66 23 -113 50 -119 51 -293 54 -134 2 -175
          0 -195 -12z m315 -55 c3 -5 18 -10 33 -10 33 0 97 -22 182 -62 84 -40 271
          -220 312 -300 90 -179 116 -278 83 -311 -15 -15 -51 -17 -326 -17 -253 0 -311
          3 -315 14 -6 15 49 120 115 220 32 47 50 66 66 66 30 0 45 -19 45 -55 0 -37
          31 -71 56 -61 12 5 15 14 10 39 -4 17 -11 52 -16 77 -33 167 -31 164 -124 155
          -39 -4 -80 -14 -91 -21 -11 -8 -36 -14 -57 -14 -28 0 -38 -5 -43 -20 -10 -32
          4 -42 59 -40 92 4 93 2 40 -86 -20 -32 -44 -72 -54 -89 -19 -33 -56 -91 -95
          -147 l-26 -38 -358 0 -358 0 -13 25 c-11 21 -11 32 -2 59 7 18 12 41 12 52 0
          11 7 29 15 40 8 10 15 27 15 38 0 15 20 62 49 112 44 79 165 209 242 260 59
          39 141 78 214 102 46 15 91 20 192 21 78 0 134 -3 138 -9z m1077 -797 c17 -15
          18 -82 18 -1713 0 -1306 -3 -1699 -12 -1708 -8 -8 -46 -12 -106 -12 -79 0 -97
          3 -108 18 -11 14 -13 298 -14 1589 0 1415 -2 1573 -16 1587 -14 14 -116 16
          -973 16 -731 0 -960 -3 -969 -12 -9 -9 -12 -376 -12 -1589 0 -1421 -2 -1579
          -16 -1593 -23 -23 -170 -23 -196 1 -17 15 -18 82 -18 1706 0 1559 1 1692 17
          1709 15 17 66 18 1201 18 1089 0 1187 -1 1204 -17z m-1258 -295 c14 -20 16
          -185 16 -1563 -1 -1265 -3 -1543 -14 -1558 -12 -16 -44 -17 -422 -17 -324 1
          -413 3 -426 14 -17 12 -18 99 -18 1561 0 1427 1 1550 17 1567 15 17 42 18 424
          18 l408 0 15 -22z m944 2 l22 -21 0 -1541 c0 -1420 -1 -1543 -17 -1560 -15
          -17 -41 -18 -421 -18 -363 0 -407 2 -424 17 -17 15 -18 77 -18 1560 0 1530 0
          1543 20 1563 19 19 33 20 418 20 387 0 399 -1 420 -20z"/>
      </g>
      </svg>
    `;
  
    return (
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <h3>Elevador {id}</h3>
        <div dangerouslySetInnerHTML={{ __html: svgData }} />
        <div className="toggle-buttons">
          <div className="toggle-wrapper">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handleColorChange('#808080')}
                checked={color === '#808080'}
              />
              <span className="slider gray"></span>
            </label>
            <span className="color-label">Gris</span>
          </div>
          <div className="toggle-wrapper">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handleColorChange('#ff0000')}
                checked={color === '#ff0000'}
              />
              <span className="slider red"></span>
            </label>
            <span className="color-label">Rojo</span>
          </div>
          <div className="toggle-wrapper">
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => handleColorChange('#008000')} 
                checked={color === '#008000'}
              />
              <span className="slider green"></span> 
            </label>
            <span className="color-label">Verde</span> 
          </div>
        </div>
      </div>
    );
  }
  
  export default ElevatorControl;
