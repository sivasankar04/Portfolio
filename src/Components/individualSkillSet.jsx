import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
export const DevelopingSkillSet = ({ SkillTabArray }) => {
    const [skillsArr, setSkillArr] = useState(SkillTabArray ?? []);
    useEffect(() => {
        if ((SkillTabArray.length % 2 === 0)) {
        } else {
            setSkillArr([...SkillTabArray, ''])
        }

    }, [])
    return (
        <div className="developSkillSet mt-2 ">
            <Grid className="d-flex justify-content-center" container spacing={4} alignItems="stretch">
                {
                    SkillTabArray.length > 3 ? <>{
                        // eslint-disable-next-line array-callback-return
                        skillsArr.map((val, index) => {
                            return (
                                <Grid item xs={12} sm={6}>
                                    {
                                        val?.title?.length &&
                                        <div key={index} className='mt-2'>
                                            <div className="individualSkillName ">
                                                {val.title}
                                            </div>
                                            <Tooltip
                                             placement="top"
                                             arrow
                                                title={`${val.percent}%`}
                                                TransitionComponent={Fade}
                                                TransitionProps={{ timeout: 600 }}
                                            >
                                                <div className='parentSkill'>
                                                    <div className="tabSilldesign" style={{ width: `${val.percent}%` }}>
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    }
                                </Grid>
                            )
                        })
                    }
                    </> : <div className="w-50">
                        {
                            SkillTabArray.map((val, index) => {
                                return (
                                    <Grid className="p-32" item xs={12} sm={12}>
                                        <div key={index} className='mt-2'>
                                            <div className="individualSkillName ">
                                                {val.title}
                                            </div>
                                            <div className='parentSkill'>
                                                <div className="tabSilldesign" style={{ width: `${val.percent}%` }} >

                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </div>
                }

            </Grid>
        </div>
    )
}