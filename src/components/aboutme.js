import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills'


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid >
                    <Cell style={{}} className="resume-right-col" col={4}>
                    <h2>Certificate</h2>
                    <h4>・ JLPT N1</h4>
                    <h4>・ TOEIC 720</h4>
                    <h4>・ 정보처리산업기사</h4>
                    <h4>・ 사무자동화산업기사</h4>
                    <h4>・ 대한항공예약프로그램 토파즈</h4>
                    <h4>・ 운전면허보통1종</h4>
                    <hr style={{ borderTop: '3px solid #696969' }}></hr>
                    </Cell>



                    <Cell className="resume-right-col" col={8}>
                  <h2>Skills</h2>
                  
                    <h5>Frontend</h5>
                   <Skills
                   skills="JavaScript"
                   progress={55}
                   />
                   <Skills
                   skills="HTML"
                   progress={70}
                   />
                  <Skills
                   skills="CSS"
                   progress={70}
                   />
                   <hr style={{ borderTop: '3px solid #696969' }}></hr>
                   <h5>Backend</h5>
                    <Skills
                   skills="JAVA"
                   progress={45}
                   />
                   <hr style={{ borderTop: '3px solid #696969' }}></hr>
                    <h5>FW</h5>
                    <Skills
                   skills="SPRING"
                   progress={25}
                   />
                    <Skills
                   skills="React"
                   progress={60}
                   />
                   <Skills
                   skills="React Native"
                   progress={50}
                   />
                   <hr style={{ borderTop: '3px solid #696969' }}></hr>
                   <h5>DB</h5>
                   <Skills
                   skills="Oracle"
                   progress={50}
                   />
                    <Skills
                   skills="MongoDB"
                   progress={50}
                   />
                   <hr style={{ borderTop: '3px solid #696969' }}></hr>

                   <h5>Language</h5>
                   <Skills
                   skills="Korean"
                   progress={100}
                   />
                   <Skills
                   skills="Japanese"
                   progress={90}
                   />
                   <Skills
                   skills="English"
                   progress={50}
                   />
                   <hr style={{ borderTop: '3px solid #696969' }}></hr>     

 </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
