import { useTheme } from 'next-themes';
import React from 'react';


const Skill = () => {
  const{theme} =useTheme();


    return (
        <div className='mx-4 lg:max-w-[90%] lg:mx-auto py-24' id='skill'>
          <h1 className='uppercase text-center divider dark:text-[#1bacef] text-2xl md:text-3xl mt-24'>My Skill</h1>
    <div className=" grid md:grid-cols-2 dark:text-white">
      <p className="skl"></p>
      <p className="skl sklLine">_________</p>
      <div className="htmlProg ProgWidth mb-4">
        <div className="p">
          <p>HTML</p>
          <p>95%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar htmlBar"></span> :  <span className="skillBar htmlBar"></span>
            }
           
          </div>
        </div>
      </div>
      <div className="cssProg ProgWidth mb-4">
        <div className="p">
          <p>CSS</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar jsBar"></span> :  <span className="skillBar jsBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="jsProg ProgWidth mb-4">
        <div className="p">
          <p>Tailwind CSS</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar jsBar"></span> :  <span className="skillBar jsBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="javaProg ProgWidth mb-4">
        <div className="p">
          <p>Bootstrap</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar javaBar"></span> :  <span className="skillBar javaBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="c/c++Prog ProgWidth mb-4">
        <div className="p">
          <p>JavaScript</p>
          <p>80%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
          {
              theme==='dark' ?  <span className="darkSkillBar ccpBar"></span> :  <span className="skillBar ccpBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="reactProg ProgWidth mb-4">
        <div className="p">
          <p>React.js</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar reactBar"></span> :  <span className="skillBar reactBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth mb-4">
        <div className="p">
          <p>Mongodb</p>
          <p>35%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
          {
              theme==='dark' ?  <span className="darkSkillBar nodeBar"></span> :  <span className="skillBar nodeBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="sqlProg ProgWidth mb-4">
        <div className="p">
          <p>Node.js</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar sqlBar"></span> :  <span className="skillBar sqlBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="expressProg ProgWidth mb-4">
        <div className="p">
          <p>Express.js</p>
          <p>65%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">

            {
              theme==='dark' ?  <span className="darkSkillBar expressBar"></span> :  <span className="skillBar expressBar"></span>
            }
          </div>
        </div>
      </div>
      <div className="nextProg ProgWidth mb-4">
        <div className="p">
          <p>Next.js</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            {
              theme==='dark' ?  <span className="darkSkillBar nextBar"></span> :  <span className="skillBar nextBar"></span>
            }
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Skill;