import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Map from '../../components/Map';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <Map />
      </div>
    </div>
  );
}
