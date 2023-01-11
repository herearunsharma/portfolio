import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";

const AllBlogData = () => {
  const blogsData = [

    {
      id: 1,
      img: img1,
      title: "When and how to use Freelancers In Your Organization",
      commentor: "Arun ",
      date: "08 January 2023",
      tag: `freelancer, business, economy, organization`,
      description1:
        "Freelancers can be used in an organization to supplement the existing workforce and provide specialized skills or extra capacity on a project or task basis. This can be beneficial in situations where a company needs to complete a specific project or task, but does not have the in-house resources or expertise to do so.",
      description2:
        "When considering using freelancers, it is important to clearly define the scope of the project or task and the specific skills and experience required for the role. This will allow you to identify potential candidates and evaluate their qualifications. It's also important to establish clear communication channels and deadlines, as well as set expectations for deliverables and payment.",
      description3:
        "It's also good practice to have clear and legally binding contract between your organization and the freelancer, which should spell out details such as timelines, deliverables, expectations of communication and payment.",
      description4:
        "There are many platforms for finding freelancers, including popular websites like Upwork, Freelancer, and Guru, which allows you to easily search for and connect with freelancers who have the skills and experience you need. You can also reach out to them through LinkedIn or professional networks.",
    },
    // {
    //   id: 4,
    //   img: img2,
    //   title: "",
    //   commentor: "",
    //   date: "",
    //   tag: "",
    //   description1: "",
    //   description2: "",
    //   description3: "",
    //   description4: "",
    // }
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
