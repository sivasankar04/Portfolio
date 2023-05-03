import { Grid } from "@mui/material";

export const DevelopingSkillSet = ({ SkillTabArray }) => {
    const arrayLength = Math.floor(SkillTabArray.length / 2)

    return (
        <div className="developSkillSet mt-2 ">
            <Grid className="d-flex justify-content-center" container spacing={4} alignItems="stretch">
                {
                    SkillTabArray.length > 3 ? <><Grid item xs={12} sm={5}>{
                        // eslint-disable-next-line array-callback-return
                        SkillTabArray.map((val, index) => {
                            if (index <= arrayLength) {
                                return (
                                    <div key={index} className='mt-2'>
                                        <div className="individualSkillName ">
                                            {val.title}
                                        </div>
                                        <div className='parentSkill'>
                                            <div className="tabSilldesign" style={{ width: `${val.percent}%` }}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }</Grid>
                        <Grid item xs={12} sm={5}>{
                            // eslint-disable-next-line array-callback-return
                            SkillTabArray.map((val, index) => {
                                if (index > arrayLength) {
                                    return (
                                        <div key={index} className='mt-2'>
                                            <div className="individualSkillName ">
                                                {val.title}
                                            </div>
                                            <div className='parentSkill'>
                                                <div className="tabSilldesign" style={{ width: `${val.percent}%` }} >
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }</Grid></> : <Grid item xs={12} sm={5}>{
                            SkillTabArray.map((val, index) => {
                                return (
                                    <div key={index} className='mt-2'>
                                        <div className="individualSkillName ">
                                            {val.title}
                                        </div>
                                        <div className='parentSkill'>
                                            <div className="tabSilldesign" style={{ width: `${val.percent}%` }} >

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }</Grid>
                }

            </Grid>
        </div>
    )
}