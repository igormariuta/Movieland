import React, { useEffect, useMemo, useState } from 'react';
// import ReactMarkdown from 'react-markdown'

import s from './Review.module.scss';
import cn from 'classnames';
import { CalendarEvent, PersonFill, StarFill } from 'react-bootstrap-icons';
import convertDate from '../../../../utils/dateToString';
import ReactMarkdown from 'react-markdown';
// import Review from './Review';

import html from 'remark-html'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

interface IProps {
  review: any;
}

const Review:React.FC<IProps> = ({review}) =>  {

  const [fullReview, setFullReview] = useState(true);

  const toggleFullReview = () => {
    setFullReview(state => !state)
  }

  useEffect(() => {
    if (review.content.length > 2000) {
      setFullReview(false);
    }
  }, [review])

  const parser = useMemo( ()=> {
    return unified()
      .use(parse)
      .use(remark2react)
  }, []);

  const printReview: any = useMemo ( () => {
    const tree:any = parser.parse(review.content)
    const modified = { ...tree, children: fullReview ? tree.children : tree.children.slice(0, 2) }
    return parser.stringify(modified)
  }, [parser, review, fullReview]);

  return (

    <>

      <div className={cn("d-flex align-items-center mb-3 rounded", s.authorLine)}>
        
        {
          review.author_details.avatar_path ? (
            <div className={cn('mr-3')} >
              <img className={cn('rounded ', s.avatar)} 
                src={
                  review.author_details.avatar_path.includes('http') ? 
                    review.author_details.avatar_path.substring(1) :
                    `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`
                    
                  } alt={review.author_details.username}/>
            </div> 
          ) :
          <div className={cn(s.avatar, 'rounded text-primary d-flex align-items-center justify-content-center mr-3')}>
            <PersonFill />
          </div>
        }

        <div>
          <p className={cn('text-secondary mb-0', s.author)}>
            { review.author_details.name || review.author_details.username }
          </p>
        </div>

        <div className='text-secondary d-flex align-items-center ml-auto'>
          <CalendarEvent size={14} className='text-secondary mr-2'/>
          <small className='d-none d-lg-inline '>{ convertDate(review.created_at) }</small>
          <small className='d-inline d-lg-none'>{ convertDate(review.created_at, 'sm') }</small>
        </div>

      </div>

      <div className={s.content}>

        <div className='text-white pl-3 pr-3'>

          { printReview }
          
          { !fullReview ? 
              <button className="d-inline btn badge badge-secondary" onClick={toggleFullReview} >Show full Review</button>
            : null }
                
        </div>
      
      </div>
     
    </>
            
  );
 
};

export default Review;
