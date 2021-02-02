import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU"
                                alt="avater"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>박 상 현</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '80%' }} />
                        <p>동해물과 백두산이 마르고 닮도록 하나님이 보우하사 우리나라 만세 무궁화 삼천리<br/> 
                            화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닮도록 하나님이<br/>
                            보우하사 우리 나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>서울특별시 도봉구 방학동</p>
                        <h5>Phone</h5>
                        <p>010-2197-1370</p>
                        <h5>E-mail</h5>
                        <p>rainbluebirdsky@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>



                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear="2007.3 "
                            endYear=" 2013.2"
                            schoolName="신한대학교"
                            schoolDescription="국제관광경영학 전공"
                        />
                        <Education
                            startYear="2016.4 "
                            endYear=" 2016.10"
                            schoolName="종로 중앙HTA"
                            schoolDescription="웹서버사이드 프로그래밍 과정"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }}></hr>

                        <h2>Experience</h2>
                        <Experience
                       startYear="2008.2 "
                       endYear="2010.1"
                       jobName="해병대 연평부대"
                       jobDescription="병장 만기전역"
                   />
                     <Experience
                       startYear="2013.3 "
                       endYear=" 2015.3"
                       jobName="서울 반얀트리호텔"
                       jobDescription="하우스키핑부 근무"
                   />
                   <Experience
                       startYear="2015.4 "
                       endYear=" 2016.1"
                       jobName="일본"
                       jobDescription="일본 워킹홀리데이"
                   />
                    <Experience
                       startYear="2017.11 "
                       endYear=" 2018.4"
                       jobName="일본 NTT DOCOMO"
                       jobDescription="DOCOMO 파견 근무"
                   />
                    <Experience
                       startYear="2018.5 "
                       endYear=" 2019.5"
                       jobName="일본 DENSO"
                       jobDescription="DENSO 파견 근무"
                   />
                      <Experience
                       startYear="2019.6 "
                       endYear=" 2019.11"
                       jobName="일본 TOYOTA"
                       jobDescription=" TOYOTA 파견 근무"
                   />
                   <Experience
                       startYear="2019.12 "
                       endYear=" 2020.4"
                       jobName="일본 TOYOTA SYSTEMS"
                       jobDescription=" TOYOTA SYSTEMS 파견 근무"
                   />
                    <Experience
                       startYear="2020.5 "
                       endYear=" 2020.10"
                       jobName="일본 OPENSESAME TEC"
                       jobDescription=" OPENSESAME TEC 근무"
                   />
                   <hr style={{ borderTop: '3px solid #e22947' }}></hr>


 </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
