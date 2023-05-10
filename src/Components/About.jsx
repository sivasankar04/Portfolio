import { Button, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

import { FULL_NAME, GET_IN_TOUCH, MESSAGE_TEXT, MY_MAIL, MY_NAME, RESUME, SELF_DESCRIPTION } from './Constants';
import Icons from './Icons/Icons.jsx';
import ParticlesComponent from '../AnimatedComponents/particles.jsx';
import { SnowDots } from '../AnimatedComponents/ParticleJsons/snowDotsJson.jsx.jsx';

const actions = [
    { icon: <Icons type={'linkedIn'} />, name: 'Linked in' },
    { icon: <Icons type={'facebook'} />, name: 'Facebook' },
    { icon: <Icons type={'instagram'} />, name: 'Instagram' },
    { icon: <Icons type={'twitter'} />, name: 'Twitter' },
    { icon: <Icons type={'github'} />, name: 'Github' },
];

export const About = () => {

    return (
        <div>
            <ParticlesComponent pageEffect={SnowDots} id="backgroundContent" />
            <div className='resumeButton me-5 mt-4'>
                <Button sx={{ color: 'orange', backgroundColor: 'black', borderColor: 'orange', borderRadius: '20px' }} variant="outlined"><a style={{ textDecoration: 'none', color: 'orange' }} href='../assets/pdf/sample.pdf' target={'blank'}>{RESUME}</a></Button>
            </div>
            <div className='aboutSection'>
                <div className='selfDescriptionContainer'>
                    <div className='selfDescription'>
                        {MY_NAME} <span className='nameColor'>{FULL_NAME}</span> . {SELF_DESCRIPTION}
                    </div>
                </div>
                <div className='contactInfoContainer d-flex justify-content-center mt-4'>
                    <SpeedDial
                        FabProps={{ color: 'orange', background: 'orange' }}
                        ariaLabel="Social Media"
                        direction='right'
                        icon={<SpeedDialIcon
                            buttonprops={{ color: "orange" }}
                            icon={<ChatBubbleOutlineOutlinedIcon />}
                            openIcon={< EmojiEmotionsOutlinedIcon />} />}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </SpeedDial>
                </div>
                <div >
                    <div className='getText mt-4'>
                        {GET_IN_TOUCH}
                    </div>
                    <div className='selfnoteContainer mt-2'>
                        <div className='selfNote px-3'>
                            {MESSAGE_TEXT}
                            <span className='nameColor cursor-pointer' onClick={() => { window.location = `mailto:${MY_MAIL}` }}>
                                {MY_MAIL}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}