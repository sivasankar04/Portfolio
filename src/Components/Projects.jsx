import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { ALERT_TEXT, PROJECTS, PROJECTS_TEXT } from './Constants.jsx';
import { RunningSnowDots } from '../AnimatedComponents/ParticleJsons/snowDotsJson.jsx.jsx';
import ParticlesComponent from '../AnimatedComponents/particles';
import { Button } from '@mui/material';
import Icons from './Icons/Icons.jsx';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Projects = () => {
    const text = PROJECTS_TEXT.split('');
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        setOpen(true);
    }, [])
    useEffect(() => {
        window.addEventListener("scroll", checkBoxes);
        checkBoxes();
    })
    const boxes = document.querySelectorAll(".box");
    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove("show");
            }
        })
    }
    window.onscroll = function (ev) {
        if (document.getElementsByClassName('scrollDown')[0]) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                document.getElementsByClassName('scrollDown')[0].style.display = 'none';
            } else {
                document.getElementsByClassName('scrollDown')[0].style.display = '';
            }
        }
    };
    return (
        <div className='projectSection  px-5'>
            {/* <ParticlesComponent pageEffect={RunningSnowDots} id="backgroundContent" /> */}
            <Snackbar anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }} open={open}>
                <Alert icon={<Icons type="github" />} severity="warning" sx={{ width: '100%' }}>
                    {ALERT_TEXT}
                </Alert>
            </Snackbar>
            <div className='scrollDown'>
                <div onScroll={onscroll} className="arrow bounce">
                    <Icons type="downArrow" />
                </div>
            </div>
            <div className='projectContainer'>
                <div className='d-flex '>
                    {text.map((val, index) => {
                        return (
                            <div className='animatedMainTitle d-flex' key={index}>
                                {val}
                            </div>
                        )
                    })}
                </div>
                <div className='projectCards'>
                    <div>
                        {PROJECTS.map((val, index) => {
                            return (<div key={index}>
                                <div className='projectDomain  mt-3' data-text={val.domain}>
                                    {val.domain}
                                </div>
                                {/* adding parentbox css here will make new design pattern */}
                                <div className=''>{val.projectDetails.map(((val, index) => {
                                    return (<div className=' box' key={index}>
                                        <div className='p-3 '>
                                            <div className='projectTitle'>{val.title}</div>
                                            <div className='d-flex mt-3'>
                                                <div>
                                                    <img src={val.imageUrl} className='projImg' alt="" />
                                                </div>
                                                <div className='ps-3 projectDescription' >
                                                    <span >{val.description ?? 'Please visit the Application/App for more details!'}
                                                    </span>{
                                                        val.showClickMe ?
                                                            <span> ... For more <span className='clickText '>Click here !!</span></span>
                                                            : null}
                                                    <div className='d-flex mt-3'>
                                                        <Button variant="outlined" startIcon={<Icons type="zipFolder" />}>
                                                            <a className='btnClass' href={'../assets/zips/10mb.zip'} download> Clone project</a>
                                                        </Button>
                                                        <div className='ps-3'>
                                                            <Button variant="outlined" startIcon={<Icons type="github" />}>
                                                                <a className='btnClass' href={'./'} target="blank"> Repo</a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <span className='libraryText'>Library used</span>
                                                        :{" "}
                                                        <span className='subLibraryText'>{val.library}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }))}
                                </div>
                            </div>)
                        })}
                    </div>

                </div>

            </div>

        </div >
    )
}