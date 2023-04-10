import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "views/admin/default/components/TaskCard";
import { fetchCard } from "store/cardSlice";
import { selectCards } from "store/cardSlice";
import { fetchList } from "store/mainListSlice";
import { selectLists } from "store/mainListSlice";

const Dashboard = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cards, loading } = useSelector(selectCards);
  const { lists } = useSelector(selectLists);

  useEffect(() => {
    if (loading !== "loaded") {
      dispatch(fetchList());
      dispatch(fetchCard());
    }
  }, [dispatch]);

  // if (loading === "error") {
  //   return navigate("/auth/sign-in");
  // }

  if (loading === "ideal" || loading === "loading")
    return <div>Loading...</div>;

  return (
    <>
      <div className="my-5 grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-3 lg:grid-cols-3">
        {lists?.map((item, index) => (
          <TaskCard key={index} cards={cards} title={item.title}/>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
