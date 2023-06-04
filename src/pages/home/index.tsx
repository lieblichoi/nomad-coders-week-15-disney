import HomePageTemplate from '#components/templates/home';
import { useCharactersList } from '#hooks/queries/charactersQuery';
import useIntersectionObserver from '#hooks/useIntersectionObserver';
import { CharactersListModel } from '#src/types/models';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  // API로 불러온 데이터
  const { data, isLoading } = useCharactersList();
  // 렌더링할 데이터
  const [displayData, setDisplayData] = useState<
    CharactersListModel[] | undefined
  >([]);
  // 페이지
  const [page, setPage] = useState<number>(1);
  // 스크롤 하단 loader ref
  const loader = useRef<HTMLDivElement | null>(null);
  // observer가 loader를 감지할 때 호출되는 함수
  const handleObserver: IntersectionObserverCallback = (entities, observer) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  // 페이지가 바뀔 때마다 displayData 업데이트
  useEffect(() => {
    const newData = data?.data?.slice(0, page * 40);
    setDisplayData(newData);
  }, [page, data]);
  // IntersectionObserver custom hook
  useIntersectionObserver({ handleObserver, ref: loader });

  return (
    <HomePageTemplate
      charactersList={displayData}
      loader={loader}
      isLoading={isLoading}
    />
  );
};

export default HomePage;
