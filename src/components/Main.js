import { useEffect, useState } from "react";

import Discussions from "./Discussions";
import DiscussionForm from "./DiscussionForm";

import { getDiscussions, getDiscussionsCount } from "../api/discussionApi";
import LoadingIndicator from "./LoadingIndicator";
import PageNation from "./PageNation";

export default function Main() {
  const [discussionList, setDiscussionList] = useState([]);
  const [listConut, setListConut] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const ITEM_SHOW_LIMIT = 10;

  const setNextDiscussionList = async () => {
    setLoading(true);
    const newDiscussionList = await getDiscussions(
      currentPage,
      ITEM_SHOW_LIMIT
    );
    setDiscussionList(newDiscussionList);

    const count = await getDiscussionsCount();
    setListConut(count);
    setLoading(false);
  };

  const setPage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const newDiscussionList = await getDiscussions(
        currentPage,
        ITEM_SHOW_LIMIT
      );
      setDiscussionList(newDiscussionList);

      const count = await getDiscussionsCount();
      setListConut(count);
      setLoading(false);
    }

    fetchData();
  }, [currentPage]);

  return (
    <main>
      <div className="container">
        <h1>My Agora States</h1>
        <DiscussionForm setDiscussionList={setNextDiscussionList} />
        <section className="discussion__wrapper">
          <div className="discussions__area">
            {loading ? (
              <LoadingIndicator />
            ) : (
              <Discussions discussionList={discussionList} />
            )}
          </div>
          <PageNation
            setPage={setPage}
            listCount={listConut}
            currentPage={currentPage}
          />
        </section>
      </div>
    </main>
  );
}
