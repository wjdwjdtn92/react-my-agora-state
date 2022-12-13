import { useState } from "react";
import { postDiscussion } from "../api/discussionApi";

export default function DiscussionForm({ setDiscussionList }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const onClick = async (e) => {
    const { name, title, story } = e.target.form;
    const createdAt = new Date().toISOString();

    if (!name.value || !title.value || !story.value) {
      return;
    }

    const discussionItem = {
      createdAt,
      title: title.value,
      author: name.value,
      url: "",
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
      answer: null,
    };

    const newDiscussionData = await postDiscussion(discussionItem);
    setDiscussionList(newDiscussionData);
  };

  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label for="name">Enter your name: </label>
            <input
              onChange={handleNameChange}
              type="text"
              name="name"
              value={name}
              id="name"
              required
            />
          </div>
          <div className="form__input--title">
            <label for="title">Enter your title: </label>
            <input
              onChange={handleTitleChange}
              type="text"
              name="title"
              value={title}
              id="title"
              required
            />
          </div>
          <div className="form__textbox">
            <label for="story">Your question: </label>
            <textarea
              onChange={handleQuestionChange}
              id="story"
              name="story"
              value={question}
              placeholder="질문을 작성하세요"
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="button" value="등록하기" onClick={onClick} />
        </div>
      </form>
    </section>
  );
}
