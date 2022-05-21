import "./App.css";
import Axios from "axios";
import { useState } from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { react, useEffect } from "react";
import SecondPage from "./SecondPage";

import { Button, Tooltip } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

function App() {
  const [user, setUser] = useState("");
  const [info, setInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${user}`;
    const { data } = await Axios.get(url);

    // console.log(data);
    setInfo(data);
    console.log(url);
  };

  return (
    <>
      <div className="ser">
        <Input
          size="large"
          placeholder="Enter User"
          prefix={<UserOutlined />}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onClick={handleSubmit}
        />
        <Tooltip title="search">
          <Button
            style={{ display: "span" }}
            className="serc"
            type="dashed"
            shape="circle"
            icon={<SearchOutlined />}
            onClick={handleSubmit}
          />
        </Tooltip>
      </div>

      <SecondPage info={info}></SecondPage>
    </>
  );
}

export default App;
