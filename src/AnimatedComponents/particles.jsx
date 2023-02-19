import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
import { Smalltriangle } from './ParticleJsons/smalltriangle'
import { SnowDots } from "./ParticleJsons/snowDotsJson.jsx";
const ParticlesComponent = (props) => {
    const { pageEffect } = props
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return pageEffect
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;