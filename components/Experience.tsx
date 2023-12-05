
import  Title from "./Title"
import {MdWork} from "react-icons/md";
import { SiReactivex,SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperinceCard from "./ExperinceCard";
const Experience = () => {
  return (
    <div className='wrapper'>
      <Title text = "Experinces" icon={< MdWork />}/>
      <div className="grid grid-cols-1 grid-cols-2 gap-6">
        <ExperinceCard
        title ="ReactBD.com" 
        subTitle ="Web Developer 2022 - present"
        icon= {<SiReactivex />}
        />
        <ExperinceCard
        title ="Toptal" 
        subTitle ="Mern Stalk Developer 2021 - present"
        icon= {<SiToptal />}
        />
        <ExperinceCard
        title ="Toptal" 
        subTitle ="Mern Stalk Developer 2020 - 2021"
        icon= {<SiFreelancer />}
        />
        <ExperinceCard
        title ="Freelancer" 
        subTitle ="Web Developer 2020- present"
        icon= {<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience
