import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "views/admin/default/components/TaskCard";
import { fetchCard } from "store/cardSlice";
import { selectCards } from "store/cardSlice";
import { fetchList } from "store/mainListSlice";
import { selectLists } from "store/mainListSlice";

import { useQuery } from "react-query";
import { getUser, getLists, getCards } from "hooks/hooks";

const Dashboard = () => {
  // const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const { cards } = useSelector(selectCards);
  // const { lists, loading } = useSelector(selectLists);

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const listQuery = useQuery({
    queryKey: ["lists"],
    queryFn: getLists,
  });
  const cardsQuery = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  if (userQuery.status && listQuery.status && cardsQuery.status === "loading")
    return <h1>Loading...</h1>;
  if (userQuery.status && listQuery.status && cardsQuery.status === "error") {
    return <h1>{JSON.stringify(userQuery.error)}</h1>;
  }

  // useEffect(() => {

  //   console.log(userQuery)
  //   if (loading !== "loaded") {
  //     dispatch(fetchList());
  //     dispatch(fetchCard());
  //   }
  // }, [dispatch]);

  // if (loading === "error") {
  //   return navigate("/auth/sign-in");
  // }

  // if (loading === "ideal" || loading === "loading")
  //   return <div>Loading...</div>;

  return (
    <>
      <div className="my-5 grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-3 lg:grid-cols-3">
        {listQuery?.data?.map((item, index) => {
          const anyKeyFilter = (e) => (obj) => Object.values(obj).includes(e);
          const filteredBoards = cardsQuery?.data?.filter(
            anyKeyFilter(item.$id)
          );
          return (
            <TaskCard
              key={index}
              cards={filteredBoards}
              lid={item.$lid}
              title={item.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
