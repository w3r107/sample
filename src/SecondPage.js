import Axios from "axios";
import { react, useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";

const SecondPage = ({ info }) => {
  {
    info ? console.log("gds") : console.log("asda");
  }
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const allProduct = repos.map((repo) => ({
    nor: repo.name,
    nos: repo.watchers_count,
  }));

  const fetchDetails = async () => {
    const url2 = info.repos_url;

    const { data } = await Axios.get(url2);
    // console.log(data);
    setLoading(true);
    setRepos(data);
  };
  useEffect(() => {
    fetchDetails();
  }, [info]);

  const imgS = `https://github.com/${info.login}.png`;

  const columns = [
    {
      title: "Name Of Repository",
      dataIndex: "nor",
      key: "1",
    },
    {
      title: "Number Of Stars",
      dataIndex: "nos",
      key: "2",
    },
  ];
  const img = `https://github.com/github.png`;

  return (
    <>
      <div className="upper">
        {info.login ? (
          <img className="xy" src={imgS}></img>
        ) : (
          <>
            <img className="xy" src={img}></img>
            <h1>Search Repository </h1>
          </>
        )}
        <h1>{info.login}</h1>
      </div>
      <Table columns={columns} dataSource={allProduct}></Table>
    </>
  );
};

export default SecondPage;
