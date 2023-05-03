export const SnowDots = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.4,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                // "mode": "push"
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 250,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#000000",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "20%"
    }
}
export const RunningSnowDots = {
    "fullScreen": {
        "enable": true,
        zIndex:-1
    },
    "fpsLimit": 120,
    "particles": {
        "groups": {
            "z5000": {
                "number": {
                    "value": 70
                },
                "zIndex": {
                    "value": 50
                }
            },
            "z7500": {
                "number": {
                    "value": 30
                },
                "zIndex": {
                    "value": 75
                }
            },
            "z2500": {
                "number": {
                    "value": 50
                },
                "zIndex": {
                    "value": 25
                }
            },
            "z1000": {
                "number": {
                    "value": 40
                },
                "zIndex": {
                    "value": 10
                }
            }
        },
        "number": {
            "value": 200,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff",
            "animation": {
                "enable": false,
                "speed": 20,
                "sync": true
            }
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": false,
            "animation": {
                "enable": false,
                "speed": 4,
                "minimumValue": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0.9
        },
        "links": {
            "enable": false,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "angle": {
                "value": 10,
                "offset": 0
            },
            "enable": true,
            "speed": 0.5,
            "direction": "right",
            "random": false,
            "straight": false,
            "outModes": {
                "default": "out"
            },
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        },
        "zIndex": {
            "value": 5,
            "opacityRate": 0.5
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": false,
                "mode": "repulse"
            },
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "links": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 0.8
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4,
                "groups": ["z5000", "z7500", "z2500", "z1000"]
            },
            "remove": {
                "quantity": 2
            }
        }
    },
    "detectRetina": true,
    "background": {
        "color": "#000000",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "emitters": {
        "position": {
            "y": 55,
            "x": -5
        },
        "rate": {
            "delay": 7,
            "quantity": 1
        },
        "size": {
            "width": 0,
            "height": 0
        },
        "particles": {
            "shape": {
                "type": "images",
                "options": {
                    "images": {
                        "src": "https://particles.js.org/images/cyan_amongus.png",
                        "width": 500,
                        "height": 634
                    }
                }
            },
            "size": {
                "value": 40
            },
            "move": {
                "speed": 10,
                "outModes": {
                    "default": "none",
                    "right": "destroy"
                },
                "straight": true
            },
            "zIndex": {
                "value": 0
            },
            "rotate": {
                "value": {
                    "min": 0,
                    "max": 360
                },
                "animation": {
                    "enable": true,
                    "speed": 10,
                    "sync": true
                }
            }
        }
    }
}