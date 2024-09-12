import React, { useEffect, useState } from "react";
import "./NewsDetailPage.scss";
import { Link, useParams } from "react-router-dom";
import NotMean from "../../Components/NotMean/NotMean";
import axios from "axios";

function NewsDetailPage() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  async function getData() {
    const res = await axios.get(
      `http://thetest-001-site1.ftempurl.com/api/News/Get/${id}?isdeleted=false`
    );
    setDetail(res.data);
  }

  async function axiosData() {
    const res = await axios.get(
      "http://thetest-001-site1.ftempurl.com/api/News/Get?isdeleted=false&page=1&take=3"
    );
    setInfo(res.data);
  }

  useEffect(() => {
    getData();
    axiosData();
  }, [id]);

  return (
    <>
      {detail ? (
        <>
          <NotMean />
          <section id="newsDetailPage">
            <div id="newsDetailHead">
              <div className="backPage">
                <h1>News</h1>
              </div>
            </div>
            <div id="newDetailTextBox">
              <div className="leftBox">
                <div className="tittleBox">
                  <p>{detail.tittle}</p>
                </div>
                <div className="imgBox">
                  <img src={detail.image} alt="" />
                </div>
                <div className="textBox">
                  <p>{detail.description}</p>
                </div>
              </div>
              <div className="rigtBox">
                {info &&
                  info
                    .filter((item) => item.id !== detail.id) // Exclude current detail's ID
                    .map((item) => (
                      <Link className="link" to={`/news/detail/${item.id}`}>
                        <img src={item.image} alt="" />
                        <p key={item.id}>{item.tittle}</p>
                      </Link>
                    ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        "loading"
      )}
    </>
  );
}

export default NewsDetailPage;
