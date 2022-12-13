import Discussion from "./Discussion";

export default function Discussions({ discussionList }) {
  return (
    <ul className="discussions__container">
      {discussionList.map((discussion) => {
        return <Discussion key={discussion.id} discussion={discussion} />;
      })}
    </ul>
  );
}
