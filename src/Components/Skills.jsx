import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import { RunningSnowDots } from '../AnimatedComponents/ParticleJsons/snowDotsJson.jsx.jsx';
import ParticlesComponent from '../AnimatedComponents/particles';
import { SOFTWARE_SKILLS, ACADEMIC_SKILLS, SOFT_SKILLS, SKILLS_TEXT, EXPERIENCE_TEXT } from './Constants'
import { DevelopingSkillSet } from './individualSkillSet.jsx';

export const Skills = () => {

    const [value, setValue] = useState(0);
    const text = SKILLS_TEXT.split('');
    const experience = EXPERIENCE_TEXT.split('');
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography component={'span'} variant={'body2'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    return (
        <div>
            <ParticlesComponent pageEffect={RunningSnowDots} id="backgroundContent" />
            <div className='skillsSection px-5'>
                <div className='skillContainer'>
                    <div className='d-flex'>
                        <div className='d-flex '>
                            {text.map((val, index) => {
                                return (
                                    <div  className='animatedMainTitle d-flex' key={index}>
                                        {val}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='animatedMainTitle ps-2'>
                            &
                        </div>
                        <div className='d-flex ps-2'>
                            {experience.map((val, index) => {
                                return (
                                    <div className='animatedMainTitle d-flex' key={index}>
                                        {val}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='skillsTabs'>
                        <Tabs
                            TabIndicatorProps={{ style: { background: 'orange' } }}
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Software Skills" {...a11yProps(0)} />
                            <Tab label="Academic Skils" {...a11yProps(1)} />
                            <Tab label="Soft Skills" {...a11yProps(2)} />
                        </Tabs>
                        {/* <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        > */}
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <DevelopingSkillSet SkillTabArray={SOFTWARE_SKILLS} />
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <DevelopingSkillSet SkillTabArray={ACADEMIC_SKILLS} />
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <DevelopingSkillSet SkillTabArray={SOFT_SKILLS} />
                            </TabPanel>
                        {/* </SwipeableViews> */}
                    </div>
                </div>
            </div>
        </div>
    )
}