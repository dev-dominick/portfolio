import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function ParticlesContainer() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "green",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },

        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 801.7060304327614,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5129459670609773,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: true,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: .1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        // interactivity: {
        //   detect_on: "canvas",
        //   events: {
        //     onhover: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     onclick: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     grab: {
        //       distance: 400,
        //       line_linked: {
        //         opacity: 1,
        //       },
        //     },
        //     bubble: {
        //       distance: 250,
        //       size: 0,
        //       duration: 2,
        //       opacity: 0,
        //       speed: 3,
        //     },
        //     repulse: {
        //       distance: 100,
        //       duration: 0.4,
        //     },
        //     push: {
        //       particles_nb: 4,
        //     },
        //     remove: {
        //       particles_nb: 2,
        //     },
        //   },
        // },
        retina_detect: true,
      }}
    />
  );
};
