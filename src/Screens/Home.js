import React, { useState } from "react";
import styled from "styled-components";

//components
import Post from "../Components/Post";
import Header from "../Components/Header";
import InputField from "../Components/InputField";

function Home() {
  const [hotelname, setHotelname] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const onSubmitClick = () => {};

  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="contents">
        <div className="posts-container">
          <Post />
          <Post />
        </div>
        <div className="add-post-container">
          <div className="heading">Add a Post</div>
          <div className="form">
            <InputField content="Restaurant Name" id="hotelname" type="text" onChange={setHotelname} />
            <InputField content="Description" id="desc" type="text" onChange={setDesc} />
            <div className="btn-container">
              <input type="file" name="fileinput" id="fileinput" onChange={(e) => setFile(e.target.files[0])} />
              <div className="btn photo" onClick={() => document.getElementById("fileinput").click()}>
                Add a photo
              </div>
              <div className="file-selected">{file ? file.name : "no files selected"}</div>
            </div>
            <div className="btn-container">
              <div className="btn" onClick={() => onSubmitClick()}>
                Add the Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: relative;

  .header {
    width: 100%;
    height: 100%;
    background-color: var(--post-background);
    top: 0;
    box-shadow: 0 2px 5px 0px lightgray;
  }

  .contents {
    display: flex;
    column-gap: 30px;
    padding-top: 30px;
    padding-inline: 50px;
    overflow-x: hidden;

    .posts-container {
      flex: 2;
      /* max-height: calc(100vh - 60px); */
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      overflow-y: auto;
      margin-bottom: 30px;
    }

    .add-post-container {
      flex: 1;
      width: 100%;
      height: max-content;
      background-color: var(--post-background);
      box-shadow: 0 2px 5px 0px lightgray;
      padding: 20px 30px;

      .heading {
        font-size: 1.4rem;
        font-weight: var(--font-w-600);
        color: var(--text-heading-color);
        text-transform: uppercase;
        text-align: center;
      }

      .btn-container {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 10px;

        .file-selected {
          font-size: 0.8rem;
        }

        input {
          display: none;
        }

        .btn {
          width: 100%;
          height: 50px;
          background-color: var(--btn-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--background-color);
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: var(--font-w-600);

          &.photo {
            width: 50%;
            background-color: var(--background-color);
            color: var(--text-heading-color);
            margin-top: 20px;
            margin-bottom: 20px;

            &:hover {
              background-color: lightgray;
            }
          }

          &:hover {
            background-color: var(--btn-color-alt);
          }
        }
      }
    }
  }
`;
