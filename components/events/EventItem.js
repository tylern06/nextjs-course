import Link from 'next/link';
import React from 'react';
import classes from './EventItem.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
export default function EventItem(props) {
  console.log({ props });
  const { title, image, date, location, id } = props;
  const humanDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  // console.log('item', title);
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt="" className={classes.img} />
      <div>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>
            <Button link={exploreLink}>
              Explore Event
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </li>
  );
}
