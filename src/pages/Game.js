import React from 'react'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/v0.2.loader.js",
    dataUrl: "build/v0.2.data",
    frameworkUrl: "build/v0.2.framework.js",
    codeUrl: "build/v0.2.wasm",
});

const Game = () => {
    return <Unity
        className={'game-view'}
        unityContext={unityContext} />;
}

export default Game;