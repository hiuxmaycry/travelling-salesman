import React from 'react';

export const Travelling = () => (
  <div>
    <div id="map-canvas" style={{ width: '660px', height: '560px' }} />
    <div className="hr vpad" />
    <div>
      <table>
        <tr>
          <td colSpan="2">
            <b>Configuration</b>
          </td>
        </tr>
        <tr>
          <td>Travel Mode: </td>
          <td>
            <select id="travel-type">
              <option value="DRIVING">Car</option>
              <option value="BICYCLING">Bicycle</option>
              <option value="WALKING">Walking</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Avoid Highways: </td>
          <td>
            <select id="avoid-highways">
              <option value="1">Enabled</option>
              <option value="0" selected="selected">
                Disabled
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Population Size: </td>
          <td>
            <select id="population-size">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50" selected="selected">
                50
              </option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Mutation Rate: </td>
          <td>
            <select id="mutation-rate">
              <option value="0.00">0.00</option>
              <option value="0.05">0.01</option>
              <option value="0.05">0.05</option>
              <option value="0.1" selected="selected">
                0.1
              </option>
              <option value="0.2">0.2</option>
              <option value="0.4">0.4</option>
              <option value="0.7">0.7</option>
              <option value="1">1.0</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Crossover Rate: </td>
          <td>
            <select id="crossover-rate">
              <option value="0.0">0.0</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5" selected="selected">
                0.5
              </option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1.0</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Elitism: </td>
          <td>
            <select id="elitism">
              <option value="1" selected="selected">
                Enabled
              </option>
              <option value="0">Disabled</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Max Generations: </td>
          <td>
            <select id="generations">
              <option value="20">20</option>
              <option value="50" selected="selected">
                50
              </option>
              <option value="100">100</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <b>Debug Info</b>
          </td>
        </tr>
        <tr>
          <td>Destinations Count: </td>
          <td id="destinations-count">0</td>
        </tr>
        <tr className="ga-info" style={{ display: 'none' }}>
          <td>Generations: </td>
          <td id="generations-passed">0</td>
        </tr>
        <tr className="ga-info" style={{ display: 'none' }}>
          <td>Best Time: </td>
          <td id="best-time">?</td>
        </tr>
        <tr id="ga-buttons">
          <td colSpan="2">
            <button id="find-route" type="button">
              Start
            </button>{' '}
            <button id="clear-map" type="button">
              Clear
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
);
