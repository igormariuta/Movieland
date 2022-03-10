import React, { useState } from "react";
import LayoutMain from "../../components/LayoutMain";

import cn from "classnames";

import { useSWRInfinite } from "swr";
import List from "./List";

import { BASE_URL, API_KEY } from "../../config/config";
import { ICard } from "../../components/CardItem";
import { GridFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

interface IResponse {
  page: number;
  total_pages: number;
  results: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
  }[];
}

const TvsPage = () => {
  const [totalPages, settotalPages] = useState(0);
  const [endpoint, setendpoint] = useState("/tv/popular");

  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json() as Promise<IResponse>)
      .then((res): ICard[] => {
        settotalPages(res.total_pages);
        return res.results.map((item) => ({
          id: item.id,
          title: item.name,
          overview: item.overview,
          poster: item.poster_path,
          date: item.first_air_date,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
        }));
      });

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${BASE_URL}${endpoint}?page=${index + 1}&${API_KEY}`,
    fetcher
  );

  // Go Mad

  const [gridView, setGridView] = useState(true);

  const changeView = () => {
    setGridView(() => !gridView);
  };

  const nextPage = () => {
    setSize((size) => ++size);
  };

  return (
    <LayoutMain>
      <div
        className={cn(
          "row no-gutters justify-content-between align-items-center mb-4"
        )}
      >
        <div className="row no-gutters">
          {
            // <Dropdown>
            //   <Dropdown.Toggle variant='dark' className=''>
            //     Popular &nbsp;
            //   </Dropdown.Toggle>
            //   <Dropdown.Menu>
            //       <Dropdown.Item>On The Air</Dropdown.Item>
            //       <Dropdown.Item>Popular</Dropdown.Item>
            //       <Dropdown.Item>Top Rated</Dropdown.Item>
            //   </Dropdown.Menu>
            // </Dropdown>
          }
        </div>

        <div className="filter text-secondary d-flex align-center ml-4">
          <button className="btn p-1 d-flex" onClick={changeView}>
            <GridFill
              size={19}
              className={gridView ? "text-primary" : "text-secondary"}
            />
          </button>
        </div>
      </div>

      {data?.map((arr) => (
        <List list={arr} gridView={gridView} type="tv" />
      ))}

      {size <= totalPages ? (
        <button className="btn btn-primary" onClick={nextPage}>
          Load More
        </button>
      ) : null}
    </LayoutMain>
  );
};

export default TvsPage;
