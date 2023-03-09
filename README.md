# <span>⚡</span> React Tippin.me Web Button <span>⚡</span>

The Tippin.me web button reimagined as a customizable React component. Easily accept Bitcoin payments via the Lightning
Network in your React applications.

![GitHub package.json version](https://img.shields.io/github/package-json/v/goldenpathtechnologies/react-tippin-button)
[![Release](https://github.com/goldenpathtechnologies/react-tippin-button/actions/workflows/release.yml/badge.svg)](https://github.com/goldenpathtechnologies/react-tippin-button/actions/workflows/release.yml)
[![Deploy Documentation Site to Pages](https://github.com/goldenpathtechnologies/react-tippin-button/actions/workflows/docs.yml/badge.svg)](https://github.com/goldenpathtechnologies/react-tippin-button/actions/workflows/docs.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
![GitHub](https://img.shields.io/github/license/goldenpathtechnologies/react-tippin-button)
[![tippin.me](https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@GoldenPathTech/F0918E)](https://tippin.me/@GoldenPathTech)

## <span>🎬</span> Demo

See the improved Tippin.me web button in action [here](https://react-tippin-button.goldenpath.ca/demo/).

## <span>🛠</span> Installation

PNPM:

```bash
pnpm add react-tippin-button
```

NPM:

```bash
npm install react-tippin-button
```

Yarn:

```bash
yarn install react-tippin-button
```

## <span>👨‍💻</span> Basic usage

```tsx
import TippinButton from "react-tippin-button";

// ...

<TippinButton
    userName="TippinUserName"
    className="CSS Classes"
    style={{ backgroundColor: `blue` }}
>
    Enter text, images, etc.
</TippinButton>
```

See the [demo](https://react-tippin-button.goldenpath.ca/demo/) for more examples.

## <span>📋</span> Properties

| Attribute           | Description                                                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| userName (required) | \[string] Your Tippin.me user name                                                                                              |
| className           | \[string] CSS class attribute for the Tippin button only, other UI elements can not be customized                               |
| style               | \[object] CSS style attribute for the Tippin button only, other UI elements can not be customized                               |
| subPath             | \[string] The root URL for the Tippin.me service, defaults to "https://tippin.me/" (this should not be changed in normal usage) |
| children (required) | \[string or JSX.Element] The Tippin button tag can not be empty and must contain text or another component                      |

## <span>🤦🏿‍♂️</span> Issues

Please report any issues with this software
[here](https://github.com/goldenpathtechnologies/react-tippin-button/issues). If you would like to contribute to 
this project, feel free to fork it and send a pull request. Note that this project is governed by a
[code of conduct](https://github.com/goldenpathtechnologies/react-tippin-button/blob/main/CODE_OF_CONDUCT.md).

## <span>💡</span> Motivation

The idea for this project came to me as I was attempting to integrate the Tippin.me web button in another React 
project. This required me to reverse engineer some parts of the web button. The work piled up to the point where it 
made sense to make the React Tippin Button into a separate library, but it was such a minor feature that it didn't 
make sense to do so. I didn't have a lot of experience publishing NPM packages, so I decided to go all out on this 
one to simultaneously create a template for future libraries that include a project documentation site. If you don't 
find the Tippin Button particularly useful, this project should also serve as a useful template for creating high 
quality libraries that are publishable on NPM.

## <span>📃</span> License

This project is [MIT](https://github.com/goldenpathtechnologies/react-tippin-button/blob/main/LICENSE) 
licensed.

## <span>⚖</span> Legal notice

The Tippin.me logo, image assets, Tippin card, and all associated branding are properties owned by 
Tippin Group. Golden Path Technologies Inc. is in no way affiliated with Tippin Group. Users of this 
software must agree to the terms of the [Tippin.me privacy policy](https://tippin.me/PrivacyPolicy). Do 
not use this software if you do not agree to these terms.
