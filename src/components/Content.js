import { Layout, Input } from "antd";
import ArrowImage from "../assets/images/arrow-right.svg"
import SearchImage from "../assets/images/search.svg"

const appDatas = [
  { id: 0, name: "Mobile App", description: "Building Blocks for a Successfull App" },
  { id: 1, name: "Mobile App", description: "Building Blocks for a Successfull App" },
  { id: 2, name: "Mobile App", description: "Building Blocks for a Successfull App" },
  { id: 3, name: "Mobile App", description: "Building Blocks for a Successfull App" },
];

const projectDatas = [
  {id: 0, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 1, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 2, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 3, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 4, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 5, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 6, name: "Mobile App Essentials", lastSeen: "4 days ago"},
  {id: 7, name: "Mobile App Essentials", lastSeen: "4 days ago"},
]

const Content = () => (
  <Layout.Content className="test__content">
    <div className="skills_blc">
      <div className="content_title">
        <h2>Build Your Skills</h2>
        <div className="more_blc">
          <p>Find information that may be useful to you</p>
          <div className="more">Learn More 
            <span>
              <img src={ArrowImage} alt="next" />
            </span>
            </div>
        </div>
      </div>
      <div className="content_items">
        {appDatas.map((item, index) => (
          <div key={index} className="item">
            <div className="item_image" />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="projects_blc">
      <div className="content_title">
        <h2>Recent Projects</h2>
        <div className="search_blc">
          <p>Continue working on your latest files created</p>
          <div className="search">
            <h2>Search</h2>
            <div className="search_input">
              <Input 
                placeholder="search recent projects" 
                suffix={<img src={SearchImage} alt="search" />} 
              />
            </div>
          </div>
        </div> 
      </div>
      <div className="content_items">
        {projectDatas.map((item, index) => (
          <div key={index} className="item">
            <div className="item_image" />
            <h4>{item.name}</h4>
            <p>{item.lastSeen}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout.Content>
);

export default Content;
