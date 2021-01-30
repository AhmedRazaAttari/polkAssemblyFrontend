// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detect } from 'detect-browser';

const browser = detect();

const chromePolkadotExtension = 'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en'; // TODO: add mozilla
const mozillaPolkadotExtension = 'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en';

export default () => {
	switch (browser && browser.name) {
	case 'chrome':
		return chromePolkadotExtension;
	case 'firefox':
		return mozillaPolkadotExtension;
	default:
		// not supported
		return '';
	}
};
