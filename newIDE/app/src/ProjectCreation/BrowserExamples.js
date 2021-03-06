import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { sendNewGameCreated } from '../Utils/Analytics/EventSender';
import { Column, Line } from '../UI/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import Window from '../Utils/Window';

const formatExampleName = (name: string) => {
  if (!name.length) return '';

  return name[0].toUpperCase() + name.substr(1).replace(/-/g, ' ');
};

// This is the list of available examples in src/fixtures folder.
// To add a new example, add it first in resources/examples, using the desktop Electron version
// of GDevelop, then use scripts/update-fixtures-from-resources-examples.js to have the web-app version
// of the example generated. Finally, add it in this list, in BrowserProjectOpener.js
// and upload the example resources online.
const exampleNames = [
  'animation-speed-scale',
  'asteroids',
  'brakeout',
  'buttons',
  'change-position-of-object',
  'change-scale-of-sprites',
  'change-sprite-animation',
  'change-sprite-color',
  'create-object-with-mouseclick',
  'drag-camera-with-mouse',
  'infinite-scrolling-background',
  'instance-timer',
  'inventory-system',
  'keyboard-practice',
  'magnet',
  'manipulate-text-object',
  'move-camera-to-position',
  'move-object-toward-position',
  'move-object-with-physics',
  'object-selection',
  'parallax-scrolling',
  'parallax',
  'parse-json-from-api',
  'particles-explosions',
  'particles-various-effects',
  'pathfinding-basics',
  'pathfinding',
  'physics',
  'platformer',
  'play-stop-sprite-animation',
  'rain',
  'random-color-picker',
  'rotate-toward-mouse',
  'rotate-toward-position',
  'rotate-with-keypress',
  'save-load',
  'shoot-bullets',
  'space-shooter',
  'splash-screen',
  'toggle-music-play-sound',
  'type-on-text-effect',
  'z-depth',
  'zombie-laser',
];

export default class BrowserExamples extends Component {
  _submitExample() {
    const body = `Hi!

I'd like to submit a new example to be added to GDevelop.
Here is the link to download it: **INSERT the link to your game here, or add it as an attachment**.

I confirm that any assets can be used freely by anybody, including for commercial usage.
`;
    Window.openExternalURL(
      `https://github.com/4ian/GD/issues/new?body=${encodeURIComponent(
        body
      )}&title=New%20example`
    );
  }

  render() {
    return (
      <Column noMargin>
        <Line>
          <Column>
            <p>Choose an example to open:</p>
          </Column>
        </Line>
        <Line>
          <Column expand noMargin>
            <List>
              {exampleNames.map(exampleName => (
                <ListItem
                  key={exampleName}
                  primaryText={formatExampleName(exampleName)}
                  onClick={() => {
                    sendNewGameCreated(exampleName);
                    this.props.onOpen(`internal://${exampleName}`);
                  }}
                />
              ))}
            </List>
            <Column expand>
              <p>Want to contribute to the examples?</p>
              <Line alignItems="center" justifyContent="center">
                <RaisedButton
                  label="Submit your example"
                  onClick={this._submitExample}
                />
              </Line>
            </Column>
          </Column>
        </Line>
      </Column>
    );
  }
}
