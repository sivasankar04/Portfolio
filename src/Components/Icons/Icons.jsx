import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CloseIcon from '@mui/icons-material/Close';
export default function Icons({ type }) {
    switch (type) {
        case 'home':
            return <HomeIcon />
        case 'menu':
            return <MenuIcon />
        case 'facebook':
            return <FacebookIcon />
        case 'instagram':
            return <InstagramIcon />
        case 'twitter':
            return <TwitterIcon />
        case 'github':
            return <GitHubIcon />
        case 'linkedIn':
            return <LinkedInIcon />
        case 'smiley':
            return <EmojiEmotionsOutlinedIcon />
        case 'speedDial':
            return <SpeedDialIcon />
        case 'chat':
            return <ChatBubbleOutlineOutlinedIcon />
        case 'rightArrow':
            return <ChevronRightIcon />
        case 'zipFolder':
            return <FolderZipOutlinedIcon />
        case 'downArrow':
            return <ArrowDownwardIcon />
        case 'close':
            return <CloseIcon />
        default:
            return <SentimentVeryDissatisfiedIcon />
    }
}
